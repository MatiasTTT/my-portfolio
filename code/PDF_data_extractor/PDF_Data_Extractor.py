import sys
import os
import re
from decimal import Decimal, ROUND_HALF_UP
import tkinter as tk
from tkinter import filedialog
from PyPDF2 import PdfReader

E_COMPAT = True
E_EXTRA_MODE = "all"
EXTRA_LOOKAHEAD = 10
HYPHEN_CHARS = ('\u2010','\u2011','\u2012','\u2013','\u2014','\u2212')

POS_RE = re.compile(r"^0{3}[0-9][1-9]0$")
TARIC_RE = re.compile(r"^\d{8}$")
WEIGHT_RE = re.compile(r"^\d{1,3}(?:,\d{3})*$")     # accept 1,234 or 1,234,567
AMOUNT_RE = re.compile(r"^[0-9]{1,3}(?:\.[0-9]{3})*,[0-9]{2}$")
COUNTRY_MARKER = ["Country", "of", "origin", "-", "Pays", "d'origine:"]
COUNTRY_MARKER_RE = re.compile(
    r"country\s+of\s+origin\s*-\s*pays\s+d'origine:?[\s\u00A0]+([A-Z]{2,})",
    re.IGNORECASE
)

EX8_RE = re.compile(r"^\d{8}$")
HYPHEN_SPLIT_RE = re.compile(r"^(-?[\d.,]+)-(-?\d+)$")
DECIMAL_DOT_RE = re.compile(r"^\d+\.\d{2}$")
COMMA_THOUSAND_RE = re.compile(r"^\d{1,3}(?:,\d{3})*$")
COUNTRY_CODE_RE = re.compile(r"^[A-Z]{2}$")

old_items = []
extra_sums = []
neg_errors = []
standard_errors = []
new_pdfs_data = []
a_errors = []

def normalize_text(s: str) -> str:
    if not s:
        return ''
    for ud in HYPHEN_CHARS:
        s = s.replace(ud, '-')
    return s.replace('\u00A0', ' ')

def format_amount_with_comma(amount: Decimal) -> str:
    return str(amount).replace('.', ',')

def to_decimal_from_token(tok: str) -> Decimal:
    return Decimal(tok.replace('.', '').replace(',', '.'))

def is_numeric(tok: str) -> bool:
    cleaned = tok.lstrip('-').replace(',', '').replace('.', '')
    return cleaned.isdigit() and cleaned != ''

def process_old_pdf(pdf_path: str):
    fname = os.path.basename(pdf_path)
    lines = []
    try:
        reader = PdfReader(pdf_path)
    except Exception:
        standard_errors.append(fname)
        return [f"{fname}: Failed to open PDF"]

    doc_tokens = []
    for page in reader.pages:
        text = normalize_text(page.extract_text() or '')
        doc_tokens.extend(text.split())

    if any(tok.startswith('-') and is_numeric(tok.lstrip('-')) for tok in doc_tokens):
        neg_errors.append(fname)
        return [f"{fname}: Sisältää negatiivisia lukuja!"]

    items_found = False
    extra_found = False
    net_found = False

    for page_num, page in enumerate(reader.pages, start=1):
        text = normalize_text(page.extract_text() or '')
        tokens = text.split()

        extracting = False
        last_code = None
        last_price_concat = None

        for idx, tok in enumerate(tokens):
            if not extracting:
                if tok.lower() == 'orign':
                    extracting = True
                continue

            if EX8_RE.match(tok):
                qty_price = []
                if idx >= 1:
                    m = HYPHEN_SPLIT_RE.match(tokens[idx-1])
                    if m and is_numeric(m.group(1)) and is_numeric(m.group(2)):
                        qty_price = [m.group(2), m.group(1)]
                if not qty_price and idx >= 2:
                    t1, t2 = tokens[idx-2], tokens[idx-1]
                    if t1 == '-' and is_numeric(t2):
                        qty_price = ["-" + t2]
                    else:
                        both = is_numeric(t1) and is_numeric(t2)
                        one  = is_numeric(t1) ^ is_numeric(t2)
                        if both:
                            qty_price = [t1, t2]
                        elif one:
                            qty_price = [t1] if is_numeric(t1) else [t2]
                if not qty_price and idx + 2 < len(tokens):
                    s_tok, v_tok = tokens[idx+1], tokens[idx+2]
                    if s_tok.startswith('-') and is_numeric(s_tok.lstrip('-')) and is_numeric(v_tok):
                        qty_price = [s_tok, v_tok]

                if qty_price:
                    last_price_concat = qty_price[0] + (qty_price[1] if len(qty_price) == 2 else "")
                    last_code = tok

            if DECIMAL_DOT_RE.match(tok) and idx+1 < len(tokens) and tokens[idx+1].lower() == 'pc':
                weight = country = None
                for j in range(idx+2, len(tokens)):
                    if COMMA_THOUSAND_RE.match(tokens[j]):
                        weight = tokens[j]
                        for k in range(j+1, len(tokens)):
                            if COUNTRY_CODE_RE.match(tokens[k]):
                                country = tokens[k]
                                break
                        break

                if last_code and last_price_concat and weight and country:
                    w_clean_str = weight.replace(',', '').lstrip('0') or "0"
                    lines.append(f"{fname} | Page {page_num}: {country}, {last_code}, {last_price_concat}, {w_clean_str}")
                    old_items.append((country, last_code, last_price_concat, w_clean_str))
                    items_found = True
                    last_code = last_price_concat = None

    if E_EXTRA_MODE == "all":
        pc_indices = [i for i, t in enumerate(doc_tokens) if t.lower() == "pc"]
    else:  # "last" (legacy)
        last_pc = max((i for i, t in enumerate(doc_tokens) if t.lower() == "pc"), default=None)
        pc_indices = [] if last_pc is None else [last_pc]

    for pc_idx in pc_indices:
        window = doc_tokens[pc_idx+1:pc_idx+1+EXTRA_LOOKAHEAD]
        if "0,000" in window and "0.00" in window:
            first_zero = "0,000" if "0,000" in window else "0.00"
            zi = pc_idx + 1 + window.index(first_zero)
            heading = " ".join(doc_tokens[pc_idx+1:zi]).strip()

            if not re.search(r"[A-Za-zÄÖÅäöå]", heading):
                continue

            amt_tok = doc_tokens[pc_idx-2] if pc_idx >= 2 else ""
            if not (AMOUNT_RE.match(amt_tok) or is_numeric(amt_tok.replace(',', ''))):
                continue

            lines.append(f"{fname} | Extra Sum: {heading} -> {amt_tok}")
            extra_sums.append((fname, heading, amt_tok))
            extra_found = True

    if not items_found:
        standard_errors.append(fname)
        if not (extra_found):  # if literally nothing else, return an error line
            return [f"PDF sisältö on virheellisessä muodossa: {fname}"]
        return lines

    for i in range(len(doc_tokens)-1):
        if doc_tokens[i].lower() == "net" and doc_tokens[i+1].lower() == "amount:":
            parts, j = [], i+2
            while j < len(doc_tokens):
                tok = doc_tokens[j]
                if tok == "0.00":
                    break
                if tok == "-" and j+1 < len(doc_tokens) and is_numeric(doc_tokens[j+1]):
                    parts.append("-" + doc_tokens[j+1].replace(',', ''))
                    j += 2
                    continue
                if is_numeric(tok):
                    parts.append(tok.replace(',', ''))
                j += 1
            if parts:
                net_amt = "".join(parts).replace('.', ',')
                lines.append(f"{fname} | Net Amount: {net_amt}")
                net_found = True
            break

    if not (items_found or extra_found or net_found):
        standard_errors.append(fname)
        return [f"PDF sisältö on virheellisessä muodossa: {fname}"]

    return lines

def process_new_pdf(pdf_path: str):
    fname = os.path.basename(pdf_path)
    lines = []
    summary = {}
    country = None
    try:
        reader = PdfReader(pdf_path)
    except Exception as e:
        a_errors.append(f"{fname}: Failed to open PDF: {e}")
        return [f"{fname}: Failed to open PDF: {e}"]

    for page in reader.pages:
        raw = page.extract_text() or ''
        text = normalize_text(raw)
        m = COUNTRY_MARKER_RE.search(text)
        if m:
            country = m.group(1).upper()
            break
        tokens = text.split()
        for i in range(len(tokens) - len(COUNTRY_MARKER)):
            if tokens[i:i+len(COUNTRY_MARKER)] == COUNTRY_MARKER:
                if i + len(COUNTRY_MARKER) < len(tokens):
                    country = tokens[i+len(COUNTRY_MARKER)]
                break
        if country:
            break

    rows_found = False
    for page_num, page in enumerate(reader.pages, start=1):
        tokens = (normalize_text(page.extract_text() or '')).split()
        tlen = len(tokens)
        idx = 0
        while idx < tlen:
            tok = tokens[idx]
            if POS_RE.match(tok):
                taric = tokens[idx+4] if idx+4 < tlen else ''
                weight = tokens[idx+5] if idx+5 < tlen else ''
                amount = tokens[idx+8] if idx+8 < tlen else ''

                if taric.lower() in {'taric', 'cn', 'code'} or weight.lower() == 'weight':
                    idx += 1
                    continue

                if TARIC_RE.match(taric) and WEIGHT_RE.match(weight) and AMOUNT_RE.match(amount):
                    try:
                        wt = int(weight.replace(',', ''))
                        amt = to_decimal_from_token(amount)
                    except Exception:
                        idx += 1
                        continue

                    summary.setdefault(taric, {'total_wt': 0, 'total_amt': Decimal('0')})
                    summary[taric]['total_wt'] += wt
                    summary[taric]['total_amt'] += amt

                    lines.append(f"{fname} | Page {page_num}: Pos {tok} -> Taric {taric} -> Weight {weight} -> Amount {amount}")
                    rows_found = True
                else:
                    lines.append(f"{fname} | Page {page_num}: Rivin tiedoissa ongelmaa")
                idx += 3
            else:
                idx += 1

    if not rows_found:
        a_errors.append(f"{fname}: No valid rows found")

    new_pdfs_data.append({
        'filename': fname,
        'country': country if country else 'Unknown',
        'summary': summary,
        'lines': lines
    })

    return lines

# === Printing / Reporting ===
def print_e_summary():
    if not old_items and not neg_errors and not standard_errors:
        return
    print('\n\n')
    print('='*57)
    print('E YHTEENVETO'.center(57))
    print('='*57)

    if neg_errors or standard_errors:
        print("E VIRHEET:")
        print("-" * 15)
        for error in neg_errors:
            print(f"{error}: Sisältää negatiivisia lukuja!")
        for error in standard_errors:
            print(f"PDF sisältö on virheellisessä muodossa: {error}")
        print()

    if not old_items:
        return

    summary = {}
    for country, taric, amt_str, w_str in old_items:
        try:
            amt_val = float(amt_str.replace(',', '.'))
        except Exception:
            amt_val = 0.0
        try:
            wt_val = int(w_str)
        except Exception:
            wt_val = 0
        summary.setdefault(country, {}).setdefault(taric, {'total_amt': 0.0, 'total_wt': 0})
        summary[country][taric]['total_amt'] += amt_val
        summary[country][taric]['total_wt'] += wt_val

    for country, tarics in summary.items():
        border = "| " + "- " * 41 + "|"
        print(border)
        print(f"Country of origin: {country}")
        print(border)
        col1, col2, col3 = 'Taric', 'Summa', 'Paino'
        w1 = max(len(col1), *(len(t) for t in tarics))
        w3 = max(len(col3), *(len(str(v['total_wt'])) for v in tarics.values()))
        w2 = max(
            len(col2),
            *(len(str(Decimal(str(v['total_amt'])).quantize(Decimal('1'), rounding=ROUND_HALF_UP)))
              for v in tarics.values())
        )
        print(f"{col1:<{w1}} | {col2:>{w2}} | {col3:>{w3}}")
        print(f"{'-'*w1}-+-{'-'*w2}-+-{'-'*w3}")
        for taric, v in tarics.items():
            amt_whole = str(Decimal(str(v['total_amt'])).quantize(Decimal('1'), rounding=ROUND_HALF_UP))
            wt_tot = v['total_wt']
            print(f"{taric:<{w1}} | {amt_whole:>{w2}} | {wt_tot:>{w3}}")
        print()

def print_extra_sums():
    if not extra_sums:
        return
    border2 = "| " + "- " * 41 + "|"
    print('\n\n')
    print(border2)
    print('E LISÄ SUMMAT')
    print(border2)
    for fname, heading, amt in extra_sums:
        print(f"{fname} | {heading} -> {amt}")
    print()

def print_a_summary():
    if not new_pdfs_data and not a_errors:
        return
    print('\n\n')
    print('='*57)
    print('A YHTEENVETO'.center(57))
    print('='*57)
    if a_errors:
        print("A VIRHEET:")
        print("-" * 16)
        for error in a_errors:
            print(error)
        print()
    if not new_pdfs_data:
        return
    for pdf_data in new_pdfs_data:
        border1 = "| " + "- " * 41 + "|"
        print(border1)
        print(f"Country of origin: {pdf_data['country']} -|- PDF file name: {pdf_data['filename']}")
        print(border1)
        summary = pdf_data['summary']
        if summary:
            col1, col2, col3 = 'Taric', 'Paino', 'Summa'
            w1 = max(len(col1), *(len(t) for t in summary))
            w2 = max(len(col2), *(len(str(v['total_wt'])) for v in summary.values()))
            w3 = max(len(col3), *(len(str(v['total_amt'].quantize(Decimal('1'), ROUND_HALF_UP))) for v in summary.values()))
            print(f"{col1:<{w1}} | {col2:>{w2}} | {col3:>{w3}}")
            print(f"{'-'*w1}-+-{'-'*w2}-+-{'-'*w3}")
            for taric, v in summary.items():
                wt_tot = v['total_wt']
                amt_tot = v['total_amt'].quantize(Decimal('1'), ROUND_HALF_UP)
                print(f"{taric:<{w1}} | {wt_tot:>{w2}} | {amt_tot:>{w3}}")
        else:
            print("No valid rows found.")
        print()

def save_report_to_file(save_path, old_reports, new_reports):
    with open(save_path, 'w', encoding='utf-8') as f:
        for bad in neg_errors:
            f.write(f"{bad}: Sisältää negatiivisia lukuja!\n")
        if neg_errors: f.write("\n")
        for bad in standard_errors:
            f.write(f"PDF sisältö on virheellisessä muodossa: {bad}\n")
        if standard_errors: f.write("\n")

        for line in old_reports:
            f.write(line + "\n")
        for line in new_reports:
            f.write(line + "\n")

        if old_items or neg_errors or standard_errors:
            f.write('\n\n')
            f.write('='*57 + "\n")
            f.write('E YHTEENVETO'.center(57) + "\n")
            f.write('='*57 + "\n")
            if neg_errors or standard_errors:
                f.write("E VIRHEET:\n")
                f.write("-" * 15 + "\n")
                for error in neg_errors:
                    f.write(f"{error}: Sisältää negatiivisia lukuja!\n")
                for error in standard_errors:
                    f.write(f"PDF sisältö on virheellisessä muodossa: {error}\n")
                f.write("\n")
            if old_items:
                summary = {}
                for country, taric, amt_str, w_str in old_items:
                    try:
                        amt_val = float(amt_str.replace(',', '.'))
                    except Exception:
                        amt_val = 0.0
                    try:
                        wt_val = int(w_str)
                    except Exception:
                        wt_val = 0
                    summary.setdefault(country, {}).setdefault(taric, {'total_amt': 0.0, 'total_wt': 0})
                    summary[country][taric]['total_amt'] += amt_val
                    summary[country][taric]['total_wt'] += wt_val
                for country, tarics in summary.items():
                    border = "| " + "- " * 41 + "|"
                    f.write(border + "\n")
                    f.write(f"Country of origin: {country}\n")
                    f.write(border + "\n")
                    col1, col2, col3 = 'Taric', 'Summa', 'Paino'
                    w1 = max(len(col1), *(len(t) for t in tarics))
                    w3 = max(len(col3), *(len(str(v['total_wt'])) for v in tarics.values()))
                    w2 = max(
                        len(col2),
                        *(len(str(Decimal(str(v['total_amt'])).quantize(Decimal('1'), rounding=ROUND_HALF_UP)))
                          for v in tarics.values())
                    )
                    f.write(f"{col1:<{w1}} | {col2:>{w2}} | {col3:>{w3}}\n")
                    f.write(f"{'-'*w1}-+-{'-'*w2}-+-{'-'*w3}\n")
                    for taric, v in tarics.items():
                        amt_whole = str(Decimal(str(v['total_amt'])).quantize(Decimal('1'), rounding=ROUND_HALF_UP))
                        wt_tot = v['total_wt']
                        f.write(f"{taric:<{w1}} | {amt_whole:>{w2}} | {wt_tot:>{w3}}\n")
                    f.write("\n")

        if extra_sums:
            border2 = "| " + "- " * 41 + "|"
            f.write(border2 + "\n")
            f.write('E LISÄ SUMMAT\n')
            f.write(border2 + "\n")
            for fname, heading, amt in extra_sums:
                f.write(f"{fname} | {heading} -> {amt}\n")
            f.write("\n")

        if new_pdfs_data or a_errors:
            f.write('\n\n')
            f.write('='*57 + "\n")
            f.write('A YHTEENVETO'.center(57) + "\n")
            f.write('='*57 + "\n")
            if a_errors:
                f.write("A VIRHEET:\n")
                f.write("-" * 16 + "\n")
                for error in a_errors:
                    f.write(error + "\n")
                f.write("\n")
            if new_pdfs_data:
                for pdf_data in new_pdfs_data:
                    border1 = "| " + "- " * 41 + "|"
                    f.write(border1 + "\n")
                    f.write(f"Country of origin: {pdf_data['country']} -|- PDF file name: {pdf_data['filename']}\n")
                    f.write(border1 + "\n")
                    summary = pdf_data['summary']
                    if summary:
                        col1, col2, col3 = 'Taric', 'Paino', 'Summa'
                        w1 = max(len(col1), *(len(t) for t in summary))
                        w2 = max(len(col2), *(len(str(v['total_wt'])) for v in summary.values()))
                        w3 = max(len(col3), *(len(str(v['total_amt'].quantize(Decimal('1'), ROUND_HALF_UP))) for v in summary.values()))
                        f.write(f"{col1:<{w1}} | {col2:>{w2}} | {col3:>{w3}}\n")
                        f.write(f"{'-'*w1}-+-{'-'*w2}-+-{'-'*w3}\n")
                        for taric, v in summary.items():
                            wt_tot = v['total_wt']
                            amt_tot = v['total_amt'].quantize(Decimal('1'), ROUND_HALF_UP)
                            f.write(f"{taric:<{w1}} | {wt_tot:>{w2}} | {amt_tot:>{w3}}\n")
                    else:
                        f.write("No valid rows found.\n")
                    f.write("\n")

# === Main ===
def main():
    global old_items, new_pdfs_data, extra_sums, neg_errors, standard_errors, a_errors
    old_items = []
    new_pdfs_data = []
    extra_sums = []
    neg_errors = []
    standard_errors = []
    a_errors = []

    root = tk.Tk()
    root.withdraw()
    try:
        pdfs = filedialog.askopenfilenames(title="Select PDF files", filetypes=[("PDF files","*.pdf")])
        if not pdfs:
            sys.exit("No PDF files selected.")

        old_reports = []
        new_reports = []

        for pdf in pdfs:
            try:
                reader = PdfReader(pdf)
                first_raw = reader.pages[0].extract_text() or ''
                first = re.sub(r"\s+", " ", normalize_text(first_raw)).lower()
                if 'e' in first:
                    old_reports.extend(process_old_pdf(pdf))
                elif any(k in first for k in ('i b', 'a', 'am')):
                    new_reports.extend(process_new_pdf(pdf))
                else:
                    new_reports.append(f"{os.path.basename(pdf)}: Unknown PDF type")
            except Exception as e:
                print(f"Error processing {pdf}: {e}")

        for bad in neg_errors:
            print(f"{bad}: Sisältää negatiivisia lukuja!")
        if neg_errors: print()
        for bad in standard_errors:
            print(f"PDF sisältö on virheellisessä muodossa: {bad}")
        if standard_errors: print()
        for line in old_reports:
            print(line)
        for line in new_reports:
            print(line)

        print_e_summary()
        print_extra_sums()
        print_a_summary()

        save = filedialog.asksaveasfilename(title="Save report as", defaultextension=".txt", filetypes=[("Text files","*.txt")])
        if save:
            save_report_to_file(save, old_reports, new_reports)
            print(f"Report saved to: {save}")
    finally:
        try:
            root.destroy()
        except Exception:
            pass

if __name__ == '__main__':
    main()
