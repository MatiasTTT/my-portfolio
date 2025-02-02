export const projects = [
  {
    id: 1,
    name: 'PDF_to_Excel',
    githubUrl: 'https://github.com/MatiasTTT/My-projects/tree/main/PDF_to_Excel',
    files: [
      {
        name: 'README.txt',
        content: `With the help of ChatGPT, I developed this Python program to automate order processing and tracking,
drastically reducing the time spent handling incoming PDF orders and managing billing. By extracting
order details from PDFs and converting them into an easily processable Excel format, the program
streamlined the workflow, replacing a previously manual and time-consuming process.`
      },
      {
        name: 'gui.py',
        content: `import customtkinter as ctk
from tkinter import filedialog, messagebox, BOTH, LEFT, END
from logic import start_extraction
from phase1 import phase1_validation
from phase2 import phase2_update_with_reporting
import shutil
import os

class Application(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("Metso PDF to Excel")
        self.geometry("800x600")

        ctk.set_appearance_mode("dark")
        ctk.set_default_color_theme("dark-blue")

        # Initialize the variable to store the Excel file path
        self.excel_file = None

        # Left side of the GUI
        left_frame = ctk.CTkFrame(self)
        left_frame.pack(side=LEFT, fill=BOTH, expand=True, padx=10, pady=10)

        # Add the "info" button inside the left_frame
        info_button = ctk.CTkButton(left_frame, text="i", width=20, height=20, command=self.show_contact_info, fg_color="#fc9d30", text_color="#FFFFFF", hover_color="#ff8903")
        info_button.pack(anchor="nw", pady=5, padx=5)

        self.pdf_files_label = ctk.CTkLabel(left_frame, text="No PDF Files Selected")
        self.pdf_files_label.pack()

        select_pdf_button = ctk.CTkButton(left_frame, text="Select PDF Files", command=self.select_pdf_files)
        select_pdf_button.pack(pady=5)

        self.excel_file_label = ctk.CTkLabel(left_frame, text="No Excel File Selected")
        self.excel_file_label.pack()

        select_excel_button = ctk.CTkButton(left_frame, text="Select Excel File", command=self.select_excel_file)
        select_excel_button.pack(pady=5)



        self.extract_button = ctk.CTkButton(left_frame, text="Extract", command=self.extract_data, fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0", state="disabled")
        self.extract_button.pack(pady=(50, 5))

        self.log_text = ctk.CTkTextbox(left_frame, height=200, state='disabled')
        self.log_text.pack(fill=BOTH, expand=True, pady=5)

        # Right side of the GUI
        right_frame = ctk.CTkFrame(self)
        right_frame.pack(side=LEFT, fill=BOTH, expand=True, padx=10, pady=10)

        self.validate_button = ctk.CTkButton(right_frame, text="Validate shipment", command=self.validate_shipment, fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0", state="disabled")
        self.validate_button.pack(pady=(20, 5))

        self.validation_text = ctk.CTkTextbox(right_frame, height=100, state='normal')
        self.validation_text.pack(fill=BOTH, expand=True, pady=5)
        self.validation_text.configure(state='disabled')

        self.update_button = ctk.CTkButton(right_frame, text="Update the order ledger", command=self.update_order_ledger, fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0", state="disabled")
        self.update_button.pack(pady=(20, 5))

        self.update_text = ctk.CTkTextbox(right_frame, height=100, state='normal')
        self.update_text.pack(fill=BOTH, expand=True, pady=5)
        self.update_text.configure(state='disabled')

    def show_contact_info(self):
        contact_info = (
            "For support, please contact:"
            "Email: Matias.Turpeinen@outlook.com"
        )
        messagebox.showinfo("Contact Information", contact_info)

    def select_pdf_files(self):
        self.pdf_files = filedialog.askopenfilenames(filetypes=[("PDF files", "*.pdf")])
        self.pdf_files_label.configure(text=f"{len(self.pdf_files)} PDF Files Selected")

    def select_excel_file(self):
        self.excel_file = filedialog.askopenfilename(filetypes=[("Excel files", "*.xlsx")])
        self.excel_file_label.configure(text="Excel File Selected")
        self.update_button_states()

    def update_button_states(self):
        if self.excel_file:
            self.extract_button.configure(state="normal", fg_color="#28B463", text_color="#FFFFFF", hover_color="#1E8449")
            self.validate_button.configure(state="normal", fg_color="#1f538d", text_color="#FFFFFF", hover_color="#14375e")
            self.update_button.configure(state="normal", fg_color="#1f538d", text_color="#FFFFFF", hover_color="#14375e")
        else:
            self.extract_button.configure(state="disabled", fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0")
            self.validate_button.configure(state="disabled", fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0")
            self.update_button.configure(state="disabled", fg_color="#d3d3d3", text_color="#a9a9a9", hover_color="#c0c0c0")

    def backup_excel_file(self):
        if self.excel_file:
            backup_path = os.path.join(os.path.dirname(self.excel_file), "backup_" + os.path.basename(self.excel_file))
            shutil.copyfile(self.excel_file, backup_path)
            print(f"Backup created at {backup_path}")

    def extract_data(self):
        self.backup_excel_file()
        self.log_text.configure(state='normal')
        self.log_text.insert(END, "Extracting data...")
        self.log_text.configure(state='disabled')
        start_extraction(self.pdf_files, self.excel_file, self.log_text)

    def validate_shipment(self):
        self.backup_excel_file()
        try:
            self.validation_text.configure(state='normal')
            self.validation_text.delete(1.0, END)
            phase1_validation(self.excel_file, self.validation_text)
        except Exception as e:
            self.validation_text.configure(state='normal')
            self.validation_text.insert(END, f"Validation error: {str(e)}")
            self.validation_text.configure(state='disabled')

    def update_order_ledger(self):
        self.backup_excel_file()
        try:
            self.update_text.configure(state='normal')
            self.update_text.delete(1.0, END)
            
            # Get the new formatted message
            message_parts, message_tags = phase2_update_with_reporting(self.excel_file)
            
            # Insert the message into the update_text widget with tags
            for part, tag in zip(message_parts, message_tags):
                if tag:
                    self.update_text.insert(END, part, tag)
                else:
                    self.update_text.insert(END, part)
            
            # Configure the tags for coloring
            self.update_text.tag_config("full_rows", foreground="#99fc77")
            self.update_text.tag_config("partial_rows", foreground="#fcd465")
            
            self.update_text.configure(state='disabled')
        except Exception as e:
            self.update_text.configure(state='normal')
            self.update_text.insert(END, f"Order ledger update error: {str(e)}")
            self.update_text.configure(state='disabled')
      

if __name__ == "__main__":
    app = Application()
    app.mainloop()`
      },
      {
        name: 'logic.py',
        content: `import fitz  # PyMuPDF
import re
import pandas as pd
from datetime import datetime
from openpyxl import load_workbook
from tkinter import messagebox, END

def remove_all_annotations(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc[page_num]
            annotations = page.annots()
            if annotations:
                for annot in annotations:
                    page.delete_annot(annot)
        doc.saveIncr()  # Save the changes to the same file
        print(f"All annotations removed from: {pdf_path}")
    except Exception as e:
        print(f"Error processing {pdf_path}: {str(e)}")

def extract_words_from_box(page, rect):
    words = page.get_text("words")
    return [word for word in words if rect.intersects(fitz.Rect(word[:4]))]

def clean_price_format(price_str):
    price_str = price_str.replace('.', '').replace(',', '.')
    try:
        return float(price_str)
    except ValueError:
        return None

def extract_item_info(doc, page_num, item_rect, box_definitions, po_number, destination, item_number):
    page = doc[page_num]
    item_info = {'PO number': po_number, 'Destination': destination, 'Item number': item_number}
    for box_name, (x0, y0_offset, x1, y1_offset) in box_definitions.items():
        rect = fitz.Rect(x0, item_rect.y0 + y0_offset, x1, item_rect.y0 + y1_offset)
        words_in_box = extract_words_from_box(page, rect)
        
        if words_in_box:
            words_in_box.sort(key=lambda word: (word[3], word[0]))
            item_info[box_name] = ' '.join(word[4] for word in words_in_box)
        else:
            item_info[box_name] = "No text found"
    
    if 'material_revision_box' in item_info:
        material_revision_text = item_info['material_revision_box']
        revision_match = re.search(r"Material Revision:\s*([\w-]+)", material_revision_text)
        if revision_match:
            item_info['Revision'] = revision_match.group(1)
        else:
            # Check the next page for material revision if not found on the current page
            if page_num + 1 < len(doc):
                next_page = doc[page_num + 1]
                next_page_rect = fitz.Rect(80, 98, 192, 154)  # coordinates for the next page material revision box
                next_page_words = extract_words_from_box(next_page, next_page_rect)
                if next_page_words:
                    next_page_words.sort(key=lambda word: (word[3], word[0]))
                    next_page_text = ' '.join(word[4] for word in next_page_words)
                    revision_match_next = re.search(r"Material Revision:\s*([\w-]+)", next_page_text)
                    item_info['Revision'] = revision_match_next.group(1) if revision_match_next else "No revision found"
                else:
                    item_info['Revision'] = "No revision found"
            else:
                item_info['Revision'] = "No revision found"
    
    if 'net_price' in item_info:
        item_info['net_price'] = clean_price_format(item_info['net_price'])

    return item_info

def determine_destination(destination_text):
    destination_text_lower = destination_text.lower()
    if "india" in destination_text_lower:
        return "India"
    elif "china" in destination_text_lower:
        return "China"
    elif "hankkion" in destination_text_lower:
        return "Etu"
    elif "crusher" in destination_text_lower:
        return "Mob"
    elif "scm" in destination_text_lower:
        return "SCM"
    elif "holtum noordweg 5" in destination_text_lower:
        return "HO5"
    elif "holtum noordweg 11" in destination_text_lower:
        return "HO11"
    elif "helsinki" in destination_text_lower:
        return "VA"
    elif "huko" in destination_text_lower:
        return "Lokomo"
    elif "urusvuorenkatu 5" in destination_text_lower:
        return "Turku"         
    else:
        return "Unknown"

def convert_date_format(date_str):
    try:
        return datetime.strptime(date_str, '%Y%b%d').strftime('%d.%m.%Y')
    except ValueError:
        return date_str

def print_text_in_boxes(pdf_path):
    item_number_box_def = (40, 85, 70, 705)
    po_number_box_def = (330, 40, 570, 115)
    destination_box_def = (40, 200, 330, 300)
    other_boxes_definitions = {
        'product_code': (72, -2, 131, 15),
        'due_date': (217, -2, 270, 15),
        'qty': (286, -2, 314, 15),
        'net_price': (350, -2, 399, 15),
        'material_revision_box': (80, 15, 192, 80)
    }

    po_number = None
    destination = "Unknown"
    extracted_data = []

    try:
        doc = fitz.open(pdf_path)
        for page_num in range(len(doc)):
            page = doc[page_num]
            if page_num == 0:
                po_number_rect = fitz.Rect(*po_number_box_def)
                words_in_po_number_box = extract_words_from_box(page, po_number_rect)
                po_numbers = [word[4] for word in words_in_po_number_box if word[4].isdigit() and len(word[4]) == 10]
                if po_numbers:
                    po_number = po_numbers[0]

                destination_rect = fitz.Rect(*destination_box_def)
                words_in_destination_box = extract_words_from_box(page, destination_rect)
                destination_text = ' '.join(word[4] for word in words_in_destination_box)
                destination = determine_destination(destination_text)

            item_number_rect = fitz.Rect(*item_number_box_def)
            words_in_item_number_box = extract_words_from_box(page, item_number_rect)
            
            item_numbers = [word for word in words_in_item_number_box if word[4].isdigit() and len(word[4]) == 5 and word[4][0] == '0' and int(word[4]) % 10 == 0]
            for item_number in item_numbers:
                item_number_value = str(int(item_number[4]))  # Remove leading zeros
                item_number_rect = fitz.Rect(item_number[:4])
                item_info = extract_item_info(doc, page_num, item_number_rect, other_boxes_definitions, po_number, destination, item_number_value)
                
                if 'product_code' in item_info:
                    description_parts = item_info['product_code'].split(' ', 1)
                    if len(description_parts) == 2:
                        item_info['product_code'] = description_parts[0]
                        item_info['product_name'] = description_parts[1]
                    else:
                        item_info['product_code'] = description_parts[0]
                        item_info['product_name'] = 'No text found'

                if 'due_date' in item_info:
                    item_info['due_date'] = convert_date_format(item_info['due_date'])

                extracted_data.append(item_info)

    except Exception as e:
        print(f"Error processing {pdf_path}: {str(e)}")

    return extracted_data

def find_last_non_empty_row(sheet):
    last_row = sheet.max_row
    while last_row > 0:
        if any(cell.value is not None for cell in sheet[last_row]):
            break
        last_row -= 1
    return last_row

def start_extraction(pdf_file_paths, excel_file_path, log_text):
    if not pdf_file_paths:
        messagebox.showinfo("No selection", "No PDF files selected. Exiting.")
        return

    if not excel_file_path:
        messagebox.showinfo("No selection", "No Excel file selected. Exiting.")
        return

    all_data = []
    po_numbers = []

    try:
        log_text.configure(state='normal')
        log_text.delete(1.0, END)
        log_text.insert(END, "Attempting to open PDF files:")
        log_text.insert(END, "Removing annotations:")
        log_text.insert(END, "Processing:")

        for pdf_path in pdf_file_paths:
            # Remove all annotations before processing
            remove_all_annotations(pdf_path)

            extracted_data = print_text_in_boxes(pdf_path)
            if extracted_data:
                po_numbers.append(extracted_data[0]['PO number'])
            all_data.extend(extracted_data)


        df = pd.DataFrame(all_data)    

        cols = df.columns.tolist()
        destination_index = cols.index('Destination')
        cols.insert(destination_index + 1, cols.pop(cols.index('Item number')))
        

        # Directly select and order the columns as needed
        df = df[['Destination', 'PO number', 'Item number', 'product_code', 'Revision', 'product_name', 'due_date', 'qty', 'net_price']]
        df.columns = ['Destination:', 'PO number:', 'Pos:', 'Product code:', 'Revision:', 'Product name:', 'Due date:', 'Qty:', 'Net price:']

        # Convert to appropriate types
        df['PO number:'] = pd.to_numeric(df['PO number:'], errors='coerce')
        df['Pos:'] = pd.to_numeric(df['Pos:'], errors='coerce')
        df['Qty:'] = pd.to_numeric(df['Qty:'], errors='coerce')
        df['Net price:'] = pd.to_numeric(df['Net price:'], errors='coerce').round(2)

        if df.empty:
            messagebox.showinfo("Error", "No data extracted from the PDFs.")
            log_text.insert(END, "No data extracted.")
            log_text.configure(state='disabled')
            return

        log_text.insert(END, "Data extracted:")

        book = load_workbook(excel_file_path)
        
        # Ensure the sheet "TILAUKSET" exists
        if "TILAUKSET" not in book.sheetnames:
            messagebox.showinfo("Error", "Sheet 'TILAUKSET' not found in the Excel file.")
            log_text.insert(END, "Sheet 'TILAUKSET' not found.")
            log_text.configure(state='disabled')
            return
        
        sheet = book["TILAUKSET"]
        last_row = find_last_non_empty_row(sheet)
        start_row = last_row + 1

        for r_idx, row in df.iterrows():
            for c_idx, value in enumerate(row):
                sheet.cell(row=start_row + r_idx, column=c_idx + 1, value=value)

        book.save(excel_file_path)

        log_text.insert(END, f"Data successfully appended to the Excel file:{excel_file_path}")
        log_text.insert(END, "Processed PO Numbers:")
        for po in po_numbers:
            log_text.insert(END, po + "")

        log_text.configure(state='disabled')

        messagebox.showinfo("Success", "Data successfully appended to the Excel file.")

    except Exception as e:
        messagebox.showerror("Error", str(e))
        log_text.insert(END, f"Error: {str(e)}")
        log_text.configure(state='disabled')`
      },
      {
        name: 'main.py',
        content: `from gui import Application

if __name__ == "__main__":
    app = Application()
    app.mainloop()`
      },
      {
        name: 'phase1.py',
        content: `import pandas as pd
from openpyxl import load_workbook
from openpyxl.styles import PatternFill, Font
import re
from tkinter import END

def phase1_validation(excel_file_path, validation_log):
    try:
        # Load the workbook and the necessary sheets
        wb = load_workbook(excel_file_path)
        ws_kuormat = wb['KUORMAT']
        ws_p4t = wb['P4T']

        # Convert the data from the sheets into pandas DataFrames
        df_kuormat = pd.DataFrame(ws_kuormat.values)
        df_p4t = pd.DataFrame(ws_p4t.values)

        # Assuming the first row is the header
        df_kuormat.columns = df_kuormat.iloc[0]
        df_kuormat = df_kuormat[1:].reset_index(drop=True)
        df_p4t.columns = df_p4t.iloc[0]
        df_p4t = df_p4t[1:].reset_index(drop=True)

        # Print first few rows of the P4T dataframe for verification
        print("First few rows of P4T dataframe:")
        print(df_p4t.head())

        # UUSI Strip exclamation marks from 'Del. Qty:' column in the DataFrame
        df_kuormat['Del. Qty:'] = df_kuormat['Del. Qty:'].astype(str).str.replace('!', '')

        # UUSI Write the cleaned 'Del. Qty:' column back to the worksheet
        for idx, value in enumerate(df_kuormat['Del. Qty:']):
            if value.strip().isdigit():  # Ensure the value is numeric
                ws_kuormat.cell(row=idx+2, column=7, value=float(value))
            else:
                ws_kuormat.cell(row=idx+2, column=7, value=None)  # Leave empty if not numeric

        # Ensure numeric columns are correctly formatted
        df_kuormat['PO nr.:'] = pd.to_numeric(df_kuormat['PO nr.:'], errors='coerce').astype('Int64')
        df_kuormat['Del. Qty:'] = pd.to_numeric(df_kuormat['Del. Qty:'], errors='coerce')
        df_kuormat['Total'] = pd.to_numeric(df_kuormat['Total'], errors='coerce')
        df_p4t['Contract no.'] = pd.to_numeric(df_p4t['Contract no.'], errors='coerce')
        df_p4t['Shipped qty'] = pd.to_numeric(df_p4t['Shipped qty'], errors='coerce')

        # Ensure the 'Code:' column is treated as a string and trim spaces
        df_kuormat['Code:'] = df_kuormat['Code:'].astype(str).str.strip()
        df_p4t['Material no.'] = df_p4t['Material no.'].astype(str).str.strip()

        # Function to strip revision indicators
        def strip_revision(code):
            # Remove any part of the code after a space or dash
            return re.split(r'[\s-]', code)[0]

        # Track rows with total price as 0
        zero_price_rows = []
        # Track rows that failed validation
        failed_validation_rows = []

        # Iterate through each row in KUORMAT
        for index, row in df_kuormat.iterrows():
            po_nr = row['PO nr.:']
            code = row['Code:']
            del_qty = row['Del. Qty:']
            total = row['Total']
            if pd.isna(po_nr) or pd.isna(code) or pd.isna(del_qty):
                print(f"Skipping row {index+2}: Invalid data found.")
                continue

            # Strip the revision from the code
            code_base = strip_revision(code)
            print(f"Processing row {index+2}: PO nr.: {po_nr}, Code: {code}, Base Code: {code_base}, Del. Qty: {del_qty}")

            # Find matching rows in P4T
            match = df_p4t[
                (df_p4t['Contract no.'] == po_nr) &
                (df_p4t['Material no.'].str.startswith(code_base)) &
                (df_p4t['Shipped qty'] == del_qty)
            ]

            if match.empty:
                print(f"No match found for row {index+2}: PO nr.: {po_nr}, Base Code: {code_base}, Del. Qty: {del_qty}")
                print(f"Relevant rows in P4T for PO nr. {po_nr} and Base Code {code_base}:")
                print(df_p4t[(df_p4t['Contract no.'] == po_nr)])
                if len(str(po_nr)) == 10:  # Ensure the PO number is 10 digits
                    failed_validation_rows.append((int(po_nr), code))  # Ensure po_nr is an integer
            else:
                print(f"Match found for row {index+2}: PO nr.: {po_nr}, Base Code: {code_base}, Del. Qty: {del_qty}")
                # If a match is found, highlight the row in KUORMAT
                for cell in ws_kuormat.iter_rows(min_row=index + 2, max_row=index + 2, min_col=1, max_col=14):
                    for c in cell:
                        c.fill = PatternFill(start_color="C6EFCE", end_color="C6EFCE", fill_type="solid")

                # Check if the total is 0 after validation
                if total == 0 and len(str(po_nr)) == 10:
                    zero_price_rows.append((int(po_nr), code))  # Ensure po_nr is an integer
                    for cell in ws_kuormat.iter_rows(min_row=index + 2, max_row=index + 2, min_col=14, max_col=14):  # Column N is the 14th column
                        for c in cell:
                            c.fill = PatternFill(start_color="FFC7CE", end_color="FFC7CE", fill_type="solid")
                            c.font = Font(color="9C0006")

        # Save the workbook
        wb.save(excel_file_path)
        print("Phase 1 validation completed successfully.")

        # Report zero price rows and failed validation rows in the GUI
        validation_log.configure(state='normal')
        if zero_price_rows:
            validation_log.insert(END, "Price detected as 0,00 for the following rows:")
            for po_nr, code in zero_price_rows:
                validation_log.insert(END, f"-PO: {po_nr}. Code: {code}.", "zero_price")
        if failed_validation_rows:
            validation_log.insert(END, "Validation was unsuccessful for the following rows:")
            for po_nr, code in failed_validation_rows:
                validation_log.insert(END, f"-PO: {po_nr}. Code: {code}.", "failed_validation")
        validation_log.insert(END, "Validation completed.")
        validation_log.tag_config("zero_price", foreground="#7984f7")
        validation_log.tag_config("failed_validation", foreground="#fc4949")
        validation_log.configure(state='disabled')

    except Exception as e:
        print(f"An error occurred during Phase 1 validation: {str(e)}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        phase1_validation(sys.argv[1])
    else:
        print("Please provide the path to the Excel file.")`
      },
      {
        name: 'phase2.py',
        content: `import pandas as pd
from openpyxl import load_workbook
from openpyxl.styles import PatternFill, Font
from datetime import datetime
from tkinter import Text

def phase2_update(excel_file_path):
    fully_delivered_rows = []
    partially_delivered_rows = []
    df_tilaukset = None
    
    try:
        # Load the workbook and the necessary sheets
        wb = load_workbook(excel_file_path)
        ws_tilaukset = wb['TILAUKSET']
        ws_kuormat = wb['KUORMAT']
        ws_p4t = wb['P4T']

        # Convert the data from the sheets into pandas DataFrames
        df_tilaukset = pd.DataFrame(ws_tilaukset.values)
        df_kuormat = pd.DataFrame(ws_kuormat.values)
        df_p4t = pd.DataFrame(ws_p4t.values)

        # Assuming the first row is the header
        df_tilaukset.columns = df_tilaukset.iloc[0]
        df_tilaukset = df_tilaukset[1:].reset_index(drop=True)
        df_kuormat.columns = df_kuormat.iloc[0]
        df_kuormat = df_kuormat[1:].reset_index(drop=True)
        df_p4t.columns = df_p4t.iloc[0]
        df_p4t = df_p4t[1:].reset_index(drop=True)

        # Ensure numeric columns are correctly formatted
        df_tilaukset['PO number:'] = pd.to_numeric(df_tilaukset['PO number:'], errors='coerce')
        df_tilaukset['Pos:'] = pd.to_numeric(df_tilaukset['Pos:'], errors='coerce')
        df_tilaukset['Qty:'] = pd.to_numeric(df_tilaukset['Qty:'], errors='coerce')
        df_tilaukset['Delivered:'] = pd.to_numeric(df_tilaukset['Delivered:'], errors='coerce').fillna(0)
        df_tilaukset['Remaining:'] = pd.to_numeric(df_tilaukset['Remaining:'], errors='coerce').fillna(df_tilaukset['Qty:'])

        df_kuormat['PO nr.:'] = pd.to_numeric(df_kuormat['PO nr.:'], errors='coerce')
        df_kuormat['Order Qty:'] = pd.to_numeric(df_kuormat['Order Qty:'], errors='coerce')
        df_kuormat['Del. Qty:'] = pd.to_numeric(df_kuormat['Del. Qty:'], errors='coerce')

        df_p4t['PO position no.'] = pd.to_numeric(df_p4t['PO position no.'], errors='coerce')
        df_p4t['Shipped qty'] = pd.to_numeric(df_p4t['Shipped qty'], errors='coerce')

        # Function to strip revision indicators and handle numeric codes
        def strip_revision(code):
            if pd.isna(code):
                return None, None
            code_str = str(code).strip()
            parts = code_str.split(' ', 1)
            return parts[0], parts[1] if len(parts) > 1 else None

        # To keep track of rows that are matched and updated
        updated_indices = set()

        # Iterate through each row in TILAUKSET
        for index, row in df_tilaukset.iterrows():
            po_number = row['PO number:']
            pos = row['Pos:']
            product_code = row['Product code:']
            revision = row['Revision:']
            qty = row['Qty:']
            delivered = row['Delivered:']

            if pd.isna(po_number) or pd.isna(pos) or pd.isna(product_code):
                print(f"Skipping row {index + 2}: Invalid data found.")
                continue

            print(f"Processing row {index + 2}: PO number: {po_number}, Pos: {pos}, Product code: {product_code}, Revision: {revision}, Qty: {qty}, Delivered: {delivered}")

            # Match with KUORMAT
            product_code_base, product_revision = strip_revision(product_code)
            if product_code_base is None:
                print(f"Skipping row {index + 2}: Invalid product code.")
                continue
            
            if product_revision is None:
                product_revision = ''
            revision = str(revision).lstrip('0').replace('-', '')  # Remove dash and leading zeros from revision

            print(f"Stripped product code: {product_code_base}, Stripped revision: {revision}")

            # Improved matching logic
            kuormat_match = df_kuormat[
                (df_kuormat['PO nr.:'] == po_number) & 
                (df_kuormat['Code:'].apply(lambda x: str(x).startswith(str(product_code_base))))
            ]

            if kuormat_match.empty:
                print(f"No match found in KUORMAT for PO number: {po_number}, Product code: {product_code}")
                continue

            for k_index, k_row in kuormat_match.iterrows():
                k_product_code_base, k_product_revision = strip_revision(k_row['Code:'])
                print(f"Checking KUORMAT row {k_index + 2}: PO nr.: {k_row['PO nr.:']}, Code: {k_row['Code:']}, Order Qty: {k_row['Order Qty:']}, Del. Qty: {k_row['Del. Qty:']}")

                # Skip if the revisions do not match, ignoring dashes
                k_product_revision = str(k_product_revision).replace('-', '') if k_product_revision else ''
                if k_product_revision and k_product_revision != revision:
                    print(f"Skipping KUORMAT row {k_index + 2} due to revision mismatch: {k_product_revision} != {revision}")
                    continue

                print(f"Matched KUORMAT row {k_index + 2}: PO nr.: {k_row['PO nr.:']}, Code: {k_row['Code:']}, Order Qty: {k_row['Order Qty:']}, Del. Qty: {k_row['Del. Qty:']}")

                # Match with P4T
                p4t_match = df_p4t[
                    (df_p4t['Contract no.'] == po_number) & 
                    (df_p4t['PO position no.'] == pos)
                ]

                if p4t_match.empty:
                    print(f"No match found in P4T for PO number: {po_number}, Pos: {pos}")
                    continue

                for p_index, p_row in p4t_match.iterrows():
                    shipped_qty = p_row['Shipped qty']
                    print(f"Matched P4T row {p_index + 2}: Contract no.: {p_row['Contract no.']}, PO position no.: {p_row['PO position no.']}, Shipped qty: {shipped_qty}")

                    # Update Delivered and Remaining
                    new_delivered = delivered + shipped_qty
                    new_remaining = qty - new_delivered

                    df_tilaukset.at[index, 'Delivered:'] = new_delivered
                    df_tilaukset.at[index, 'Remaining:'] = max(new_remaining, 0)
                    updated_indices.add(index)

                    if new_remaining != 0:
                        partially_delivered_rows.append(index + 2)

        # Write back to the TILAUKSET sheet only for updated rows
        for r_idx in updated_indices:
            row = df_tilaukset.iloc[r_idx]
            for c_idx, value in enumerate(row):
                ws_tilaukset.cell(row=r_idx + 2, column=c_idx + 1, value=value)

        # Apply coloring after all updates are done
        fully_delivered_rows = apply_coloring(ws_tilaukset, df_tilaukset, updated_indices)

        wb.save(excel_file_path)
        print("Phase 2 update completed successfully.")
        
    except Exception as e:
        import traceback
        print(f"An error occurred during Phase 2 update: {str(e)}")
        traceback.print_exc()
    
    return fully_delivered_rows, partially_delivered_rows, df_tilaukset



def phase2_update_with_reporting(excel_file_path):
    fully_delivered_rows, partially_delivered_rows, df_tilaukset = phase2_update(excel_file_path)

    fully_delivered_count = len(fully_delivered_rows)
    partially_delivered_count = len(partially_delivered_rows)
    
    # Prepare the new message format
    message_parts = []
    message_tags = []
    
    message_parts.append("Fully delivered rows:")
    message_tags.append(None)
    
    message_parts.append(f"-Count: {fully_delivered_count}")
    message_tags.append("full_rows")
    
    if partially_delivered_count > 0:
        message_parts.append("Partially delivered rows:")
        message_tags.append(None)
        
        message_parts.append(f"-Count: {partially_delivered_count}")
        message_tags.append("partial_rows")
        
        for row in partially_delivered_rows:
            po_nr = df_tilaukset.at[row - 2, 'PO number:']
            code = df_tilaukset.at[row - 2, 'Product code:']
            message_parts.append(f"-PO: {po_nr}. Code: {code}.")
            message_tags.append("partial_rows")
    
    message_parts.append("Order ledger update completed.")
    message_tags.append(None)
    
    return message_parts, message_tags



def apply_coloring(ws_tilaukset, df_tilaukset, updated_indices):
    # Define the fills for the different conditions
    green_fill = PatternFill(start_color="C6EFCE", end_color="C6EFCE", fill_type="solid")
    orange_fill = PatternFill(start_color="FFD966", end_color="FFD966", fill_type="solid")
    blue_fill = PatternFill(start_color="ADD8E6", end_color="ADD8E6", fill_type="solid")

    # Get the current date in Finnish standard format
    current_date = datetime.now().strftime("%d.%m.%Y")
    italic_font = Font(italic=True)

    fully_delivered_rows = []

    for index in updated_indices:
        row = df_tilaukset.iloc[index]
        qty = row['Qty:']
        delivered = row['Delivered:']
        remaining = row['Remaining:']

        # Apply green fill if fully delivered
        if remaining == 0 and delivered == qty:
            for cell in ws_tilaukset.iter_rows(min_row=index + 2, max_row=index + 2, min_col=1, max_col=11):  # Ensure it covers all columns
                for c in cell:
                    c.fill = green_fill
            fully_delivered_rows.append(index + 2)  # Record as fully delivered

        # Apply orange fill if there are remaining quantities
        if remaining > 0:
            ws_tilaukset.cell(row=index + 2, column=11).fill = orange_fill

        # Apply blue fill if partially delivered
        if delivered != 0 and delivered != qty:
            ws_tilaukset.cell(row=index + 2, column=10).fill = blue_fill

        # Log the current date in the "Updated:" column (Column L) with italic font
        updated_cell = ws_tilaukset.cell(row=index + 2, column=12, value=current_date)
        updated_cell.font = italic_font

    return fully_delivered_rows


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        fully_delivered, partially_delivered = phase2_update(sys.argv[1])
        print(f"Fully delivered rows: {fully_delivered}")
        print(f"Partially delivered rows: {partially_delivered}")
    else:
        print("Please provide the path to the Excel file.")`
      }
    ]
  },
  {
    id: 2,
    name: 'Website',
    githubUrl: 'https://github.com/MatiasTTT/My-projects/tree/main/Website',
    files: [
      {
        name: 'README.txt',
        content: `Without the assistance of AI, I created this HTML and CSS web page as part of a web development
course during my BBA studies. This project was completed using traditional learning 
methods—following examples, researching online, and applying fundamental web development principles.
At the time, large language models like ChatGPT did not exist, so I relied on self-guided learning
to structure content, style elements, and build a functional layout.`
      },
      {
        name: 'about.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>About US</h1>
	</section>
	
<!-- About us sisältöä -->


<section class="about-us">
	<div class="row">
		<div class="about-col">
			<h1> We are the world leading commuications trainers </h1>
			<p> Professional Personal Development
			The ordinary, run-of-the-mill and predictable just don’t do it for us here at King Maker and frankly, we prefer clients who feel the same way. <br> 
			<br>
			Join our ranks and become the master of your own communication
			</p>
			<a href="" class="hero-btn red-btn">EXPLORE NOW</a>      
		</div>
		<div class="about-col">
			<img src="images/professor.jpg">
		</div>
	</div>
</section>	

	

	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	Facebook: The King Maker Company <br>
	Twitter: @TheKingMakerCompany<br>
	Instagram: KMC 
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
</script>	
	
</body>
</html>`
      },
      {
        name: 'blog.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header2">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>BLOG: How to improve your communication skills</h1>
	</section>
	
<!-- blogi sisältö -->

<section class="blog-content">
	
	<div class="row">
		<div class="blog-left">
		<h2>How to improve your communication skills</h2>
		<img src="images/bam.gif">
		<h3>Discover why good communication matters and what you can do to be a better communicator.</h3>
		<p>It’s well known that having good communication skills is important at work – it’s why ‘I’m a great communicator’ is a staple of every CV.</p><br>
		<p>However, it’s less clear why communication matters. Similarly, we all know what bad communication looks like.</p><br>
		<p>But what does it mean to be a good communicator? And how can you improve your communication skills?</p><br>
		<p>Luckily for you, The King Maker offers a diverse selection of courses designed to hone your communication abilities, 
		whether by learning how to create killer presentations or improving your spoken English.</p><br>
		<p>But before you get stuck into a course, we’ve put together a handy rundown of quick tips for turning yourself into a top talker. </p><br>
		<h3>1. Know your audience</h3>
		<p>Understanding exactly who you’re talking to is vital.</p><br>
		<p>You might be a whizz with facts and figures, but if you’re addressing a room full of creatives you might want to use less jargon, and more visual aids.</p><br>
		<p>Being stiff and serious might be appropriate when dealing with senior executives, but with junior staff a more relaxed approach could be better.</p><br>
		<p>It all comes down to being flexible. Try to read the room – and prepare in advance.</p><br>
		<p>Before you go into a meeting or a presentation think carefully about who’ll be there, and the best way to adjust your words and body language to appeal to them.</p><br>
		<p>Good communication isn’t about imposing yourself on others but adapting your tone of voice to make sure you get your message across.</p><br>
		<h3>2. Be concise</h3>
		<p>There’s nothing worse than a meeting being dominated by someone waffling on about a topic, when just a few words would have sufficed. </p><br>
		<p>People sacrifice productive time to attend a meeting or a presentation, so think about how to communicate what you want to say in a simple and straightforward way.</p><br>
		<p>It’s also worth considering the backgrounds of those in the room when you talk. Remember that the clearer you are, the more likely it is that your ideas will land.</p><br>
		<p>It’s also important to bear in mind that English might not be everyone’s first language. If you work with an international team, the University of Sussex has a course designed to help you better communicate with diverse audiences.</p><br>
		<p>Equally, if English is your second language, and you’re worried about being clear in your communication, you might want to consider taking a course to improve your confidence in using English for the workplace.</p><br>
		<h3>3. Be clear</h3>
		<p>Clarity is the cousin of conciseness. Just as it’s vital to not use ten words when one would work, good communication also rests on using the right words.</p><br>
		<p>What is it exactly you want to communicate, and what are the points you want to make?</p><br>
		<p>You might want to think about this in advance, preparing and structuring your ideas to keep on point. Make a plan of what you want to talk about, and the key issues you want to address. </p><br>
		<p>You could even share your objectives with people in advance, so participants know precisely what you want to discuss – and how to stay on topic.</p><br>
		<h3>4. The medium is the message</h3>
		<p>Face-to-face communication is vital for building trust and responsibility in an organisation – it’s never good to hide behind emails or Slack (as tempting as it can be).</p><br>
		<p>However, it’s just as important to know whether what you want to communicate is really worthy of a meeting, or could just be discussed in an email or a group chat.</p><br>
		<p>Increasingly, the future of business communication is moving online, so familiarising yourself with how to write emails is key for success. Fortunately, the British Council have a course for that!</p><br>
		<h3>5. Listen</h3>
		<p>Good communication is a two-way street – great communicators are also great listeners. </p><br>
		<p>After all, communication is all about being able to facilitate those around you to do their jobs better. That means taking people’s opinions into account.</p><br>
		<p>Make sure you listen to feedback and really hear what your colleagues are saying to you.</p><br>
		<p>If you’re giving a presentation, leave time for questions and discussion. If you’re in a meeting, don’t hog the floor and let others talk – especially if you’re a man and no women have spoken yet. And if you’re in the office, take the time to ask people how they are, and remember what they say so you can follow up later.</p><br>
		<p>It never hurts to ask too many questions – it shows you’re interested and attentive. </p><br>
		
		<div class="comment-box">
		
			<h3>Leave a comment</h3>
			
			<form class="comment-form">
				<input type="text" placeholder="Enter Name">
				<input type="email" placeholder="Enter Email">
				<p>Tell us your toughts on the matter</p>
				<textarea rows="5" placeholder="Your comment">
				</textarea>
				<button type="submit" class="hero-btn red-btn">POST COMMENT
				</button>
			</form>
		</div>
	
		</div>
		<div class="blog-right">	
			<h3>Post Categories</h3>
			<div>
				<span>Non-Verbal Communication</span>
				<span>23</span>
			</div>
			<div>
				<span>Verbal communication</span>
				<span>56</span>
			</div>
			<div>
				<span>Understanding the context</span>
				<span>14</span>
			</div>
			<div>
				<span>Visual communication</span>
				<span>18</span>
			</div>
			<div>
				<span>Written communication</span>
				<span>6</span>
			</div>
			<div>
				<span>Phone Etiquette</span>
				<span>10</span>
			</div>
			<div>
				<span>Mastering The Five C's Of Influential Communication</span>
				<span>5</span>
			</div>
		</div>
	
</section>
	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	Facebook: The King Maker Company <br>
	Twitter: @TheKingMakerCompany<br>
	Instagram: KMC 
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
</script>	
	
</body>
</html>`
      },
      {
        name: 'contact.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header3">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>Contact US</h1>
	</section>
	
<!-- Contact us sisältöä -->


<section class="location">

	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1824.5207927686752!2d22.819767508356286!3d62.
	787355217867805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4687cb94653f1ed5%3A0xdabf7aab958fe6e9!2sFrami!5e0!3m2!1sfi!2sfi
	!4v1636015629358!5m2!1sfi!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

</section>	

<section class="contact-us">

	<div class="row">
		<div class="contact-col">
			<div>
				<h3>HOME</h3>
				<span>
					<h5>Kampusranta 9, Building F</h5>
					<p>60320, Seinäjoki</p>
				</span>
				<h3>PHONE</h3>
				<span>
					<h5>040-5348757</h5>
					<p>Monday to saturday, 8AM to 5PM</p>
				</span>
				<h3>EMAIL</h3>
				<span>
					<h5>info@tkmc.com</h5>
					<p>Email us your questions</p>
				</span>
			</div>
		</div>
		<div class="contact-col">
			
			<form action="">
				<input type="text" placeholder="Enter your name" required>
				<input type="email" placeholder="Enter your email address" required>
				<input type="text" placeholder="Enter your subject" required>
				<textarea rows="8" placeholder="Message" required></textarea>
				<button type="submit" class="hero-btn red-btn">Send message</button>
			</form>
	
	
	
		</div>
	</div>

</section>

<section class="infotable">

	<div class="row">
		<div class="table">
		<h3>Contact information of our managing trainers</h3>
			<table>
			  <tr>
				<th>Name</th>
				<th>Phone</th>
				<th>Email</th>
				<th>Office</th>
			  </tr>
			  <tr>
				<td>Terrell Linwood</td>
				<td>040-6436482</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Terrell.Linwood@tkmc.com</a></td>
				<td>147</td>
			  </tr>
			  <tr>
				<td>Marlin Kingston</td>
				<td>044-9386667</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Marlin.Kingston@tkmc.com</a></td>
				<td>201</td>
			  </tr>
			  <tr>
				<td>Neville Keyes</td>
				<td>040-3535735</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Neville.Keyes@tkmc.com</a></td>
				<td>215</td>
			  </tr>
			  <tr>
				<td>Ann White</td>
				<td>040-4895164</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Ann.White@tkmc.com</a></td>
				<td>109</td>
			  </tr>
			  <tr>
				<td>Kerrie Forester</td>
				<td>050-7291923</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Kerrie.Forester@tkmc.com</a></td>
				<td>117</td>
			  </tr>
			  <tr>
				<td>Isaac Tifft</td>
				<td>040-8729262</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Isaac.Tifft@tkmc.com</a></td>
				<td>194</td>
			  </tr>
			  <tr>
				<td>Jacob Wilson</td>
				<td>040-4467789</td>
				<td><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1636021465&rver=7.0.6737.0&wp=MBI_SSL&wreply=
				https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d7a43c461-c280-b94d-da4b-adbc97184349&id=292841&aadredir=
				1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">Jacob.Wilson@tkmc.com</a></td>
				<td>310</td>
			  </tr>
			</table>
		</div>
	</div>
	
</section>
	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	Facebook: The King Maker Company <br>
	Twitter: @TheKingMakerCompany<br>
	Instagram: KMC 
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
</script>	
	
</body>
</html>`
      },
      {
        name: 'index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="header">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
	
	<div class="text-box">
		<h1> The king Maker Consulting</h1>
		<p>Become the king of your own communication. </p>
		<a href="services.html" class="hero-btn">Visit Us To Know More</a>
	</div>
	
	</section>
	
<!-- kohta 2 ekalla sivulla -->
	
<section class="services">
	<h1>What sort of services we offer</h1>
	<p>this is the part for the information about the services</p>
	
	<div class="row">
		<div class="course-col">
			<h3>Presentations</h3>
			<p>Having problems with giving clear and powerful presentations with confidence is not uncommon.
			Here at King Maker Consulting we will teach you to become the best presentator that you can possibly be.</p>
		</div>
		<div class="course-col">
			<h3>Public speaking</h3>
			<p>Public speaking is also a weak spot for many, and staying in the spot light can be frightening,
			but with the tools and help we offer you, you can gain aconfidence for it like never before and become the pro of the craft with out a sliver of fear.  </p>
		</div>
		<div class="course-col">
			<h3>Introductions</h3>
			<p>Presenting is not always about giving presentations or public speaking. Introductions are the personal minipresentations of your self.
			They are manytimes the most important things you can do when meeting a new person, and we will help you to give the best one out there.</p>
		</div>
	</div>
	
</section>	
	
	
<!-- kohta 3 ekalla sivulla -->	
	
<section class="something">
	<h1>This is what your future will look like if you trust in our guidance</h1>
	<p>Take the first step and we handle the rest</p>
	
	<div class="row">
		<div class="something-col">
			<img src="images/presentation.jpg">
			<div class="layer">
				<h3>PRESENTATIONS</h3>
			</div>
		</div>
		<div class="something-col">
			<img src="images/speaking.jpg">
			<div class="layer">
				<h3>PUBLIC SPEAKING</h3>
			</div>
		</div>
		<div class="something-col">
			<img src="images/handshake.jpeg">
			<div class="layer">
				<h3>INTRODUCTIONS</h3>
			</div>
		</div>
	</div>
	 
</section>
	
<!-- kohta 4 ekalla sivulla -->

<section class="facilities">
	<h1>Our training facilities</h1>
	<p>From here you can check out what our training facilities look like</p>
	
	<div class="row">
		<div class="facilities-col">
			<img src="images/conferenceroom.jpg">
			<h3>State of the art conference room</h3>
			<p>Our conference room that is equipped with the state of the art technology to help you become solid professional at giving presentations from 
			corporate level to literally anything.</p>
		</div>
		<div class="facilities-col">
			<img src="images/auditorium.jpg">
			<h3>Auditorium for confidence</h3>
			<p>In our auditorium we will tarin you in the art of the publick speaking, so that you can loose all the fears it may cause you right now
			and you will become the most charismatic speaker out there.</p>
		</div>
		<div class="facilities-col">
			<img src="images/introlongue.jpg">
			<h3>Cozy longue for introductions</h3>
			<p>This works as the perfect are where you can mingle with people and practise the theories which you have learned about giving
			a perfect first impression</p>
		</div>
	</div>
	
</section>

<!-- kohta 5 ekalla sivulla  -->

<section class="comments">
	<h1>What our customers say about us</h1>
	<p>here are some unbiased comments from our customers and their experiences that they have had with us</p>
	
	<div class="row">
		<div class="comments-col">
			<img src="images/man.jpg">
			<div>
				<p>A fantastic organisation! Great support from beginning to end of the process. 
				The team are really informed and go the extra mile at every stage. I would recommend them unreservedly. </p>
				<h3>John Marston</h3>
			</div>
		</div>
		<div class="comments-col">
			<img src="images/woman.jpg">
			<div>
				<p> The King Maker Company went above and beyond to help me out with my shortcomings. I would recommend the services they 
					provide to everyone.</p>
				<h3>Betty Cenan</h3>
			</div>
		</div>
	</div>
	
</section>

<!-- kohta 6 ekalla sivulla  -->

<section class="cta">
	<h1> Enroll for our various online courses <br> anywhere from the world</h1>
	<a href="contact.html" class="hero-btn">CONTACT US</a>
</section>
	
<!-- kohta 7 ekalla sivulla  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	<a href="https://www.facebook.com/" target="_blank">Facebook: The King Maker Company</a><br>
	<a href="https://twitter.com/" target="_blank">Twitter: @TheKingMakerCompany</a><br>
	<a href="https://www.instagram.com/" target="_blank">Instagram: KMC</a>
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
</script>	
	
</body>
</html>`
      },
      {
        name: 'services.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="with=device-width, initial-scale=1.0">
	<title> The King Maker Company </title>
	<link rel="stylesheet" href="style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
</head>
<body>
	<section class="sub-header1">
		<nav>
			<a href="index.html"><img src="images/kinglvalkonen.png"</a>
			<div class="nav-links" id="navLinks">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li><a href="services.html">SERVICES</a></li>
					<li><a href="blog.html">BLOG</a></li>
					<li><a href="contact.html">CONTACT</a></li>
				</ul>
			</div>
		</nav>
		<h1>Our Services</h1>
	</section>
	
<!-- Services -->
	
<section class="services">
	<h1>What sort of services we offer</h1>
	<p>this is the part for the information about the services</p>
	
	<div class="row">
		<div class="course-col">
			<h3>Presentations</h3>
			<p>Having problems with giving clear and powerful presentations with confidence is not uncommon.
			Here at King Maker Consulting we will teach you to become the best presentator that you can possibly be.</p>
		</div>
		<div class="course-col">
			<h3>Public speaking</h3>
			<p>Public speaking is also a weak spot for many, and staying in the spot light can be frightening,
			but with the tools and help we offer you, you can gain aconfidence for it like never before and become the pro of the craft with out a sliver of fear.  </p>
		</div>
		<div class="course-col">
			<h3>Introductions</h3>
			<p>Presenting is not always about giving presentations or public speaking. Introductions are the personal minipresentations of your self.
			They are manytimes the most important things you can do when meeting a new person, and we will help you to give the best one out there.</p>
		</div>
	</div>
	
</section>	

<!-- facilities -->

<section class="facilities">
	<h1>Our training facilities</h1>
	<p>From here you can check out what our training facilities look like</p>
	
	<div class="row">
		<div class="facilities-col">
			<img src="images/conferenceroom.jpg">
			<h3>State of the art conference room</h3>
			<p>Our conference room that is equipped with the state of the art technology to help you become solid professional at giving presentations from 
			corporate level to literally anything. <br><br> The room holds in it the following equipment:</p>
			<ul>
			<li>Epson EH-TW7100 4K projector</li>
			<li>Herman Miller Aeron Office seats</li>
			<li>Virtual reality readiness</li>
			<li><a href="https://www.raflaamo.fi/fi/seinajoki/talriikki-seinajoki" target="_blank">With catering service proided by TALRIIKKI</a></li>
			</ul>
		</div>
		<div class="facilities-col">
			<img src="images/auditorium.jpg">
			<h3>Auditorium for confidence</h3>
			<p>In our auditorium we will tarin you in the art of the publick speaking, so that you can loose all the fears it may cause you right now
			and you will become the most charismatic speaker out there. <br><br> This is supported with great technology like:</p>
			<ul>
			<li>Harman Kardon Surround</li>
			<li>Sennheiser EW 112P G4 B-Band wireless mics</li>
			<li>Unbliding spotlights</li>
			<li>Epson EH-TW7100 4K projector</li>
			</ul>
		</div>
		<div class="facilities-col">
			<img src="images/introlongue.jpg">
			<h3>Cozy longue for introductions</h3>
			<p>This works as the perfect are where you can mingle with people and practise the theories which you have learned about giving
			a perfect first impression <br><br> The cozy facilities consist out of:</p>
			<ul>
			<li>Beanbags</li>
			<li>Sofas</li>
			<li>Smooth Jazz</li>
			<li><a href="https://valkoinenpuu.fi/?gclid=Cj0KCQjw5oiMBhDtARIsAJi0qk2u87Lml2PpZumE-DYXscBdtPSlBErTeddGPEDu8fnIejltP2fDfYkaAgNqEALw_wcB" target="_blank">And cakes and coffee provided by Valkoine Puu</a></li>
			</ul>
		</div>
	</div>
	
</section>
	
<!-- footer  -->

<section class="footer">
	<h2> Find us in the social media</h2>
	<div class="social">
	<p>---------------------------------------------------------------------------------------------<br>
	<a href="https://www.facebook.com/" target="_blank">Facebook: The King Maker Company</a><br>
	<a href="https://twitter.com/" target="_blank">Twitter: @TheKingMakerCompany</a><br>
	<a href="https://www.instagram.com/" target="_blank">Instagram: KMC</a>
	<br>---------------------------------------------------------------------------------------------</p>
	</div>
	<p>Pieced together by: Matias Turpeinen</p>
</section>
	
	
	
	
	
	
	
	
<!-- js valikolle -->	
<script>
	
	var navLinks = document.getElementById("navLinks");
	
	function showMenu(){
		navLinks.style.right = "0";
	}
	function hideMenu(){
		navLinks.style.right = "-200px";
	}
	
</script>	
	
</body>
</html>`
      },
      {
        name: 'style.css',
        content: `*{
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;font-family: 'Montserrat', sans-serif;
}
.header{
	min-height: 100vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.6),rgba(1,1,1,0.6)),url(images/back.jpg); /* muokkaa tausta värin tummuutta*/
	background-position:center;
	background-size:cover;
	position:relative;
	
}
nav{
	display: flex;
	padding: 2% 6%;
	justify-content: space-between;
	align-items: center;
}
nav img{
	width:400px;
	
} /*nav img:llä voi muokata pikku logon kokoa*/
.nav-links{
	flex:1;
	text-align: right;
}
.nav-links ul li{
	list-style:none;
	display:inline-block;
	padding: 8px 12px;
	position:relative;
}
.nav-links ul li a{
	color:#fff;
	text-decoration:none;
	font-size:17px;
}
.nav-links ul li::after{
	content: '';
	width:0%;
	height:2px;
	background: #f44336;
	display: block;
	margin: auto;
	transition: 0.5s;
}
.nav-links ul li:hover::after{
	width:100%;
}
.text-box{
	width:90%;
	color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	text-align: center;
}
.text-box h1{
	font-size: 62px;
}
.text-box p{
	margin: 10px 0 40px;
	font-size:20px;
	color: #fff;
}
.hero-btn{
	display: inline-block;
	text-decoration: none;
	color: #fff;
	border: 1px solid #fff;
	padding: 12px 34px;
	font-size: 20px;
	background: transparent;
	position: relative;
	cursor: pointer;
}
.hero-btn:hover{
	border: 1px solid #fff;
	background: #f44336;
	transition: 1s;
}
nav .fa{
	display: none;
}

/*------- services (kohta 2 ekalla sivulla) -------*/

.services{
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 100px;
}

h1{
	font-size: 36px;
	font-weight: 600;
}

.services p{
	color: #fff;
	font-size: 20px;
	font-weight: 300;
	line-height: 22px;
	padding: 10px;
}
.row{
	margin-top: 5%;
	display: flex;
	justify-content: space-between;
}
.course-col{
	flex-basis: 31%;
	background: #f44336;
	border-radius: 10px;
	margin-bottom: 5%;
	padding: 20px 12px;
	box-sizing: border-box;
}
.services h3{
	text-align:center;
	font-weight: 600;
	margin: 10px 0;
	font-size: 30px;
	color: #fff;
}
.course-col:hover{
	box-shadow: 0 0 20px 0px rgba(0,0,0,0.4);
}

/*----- "something" (kohta 3 ekalla sivulla) ---*/

.something{
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 50px;
}
.something-col{
	flex-basis: 32%;
	border-radius: 10px;
	margin-bottom: 30px;
	position: relative;
	overflow: hidden;
}
.something-col img{
	width:100%;
	display: block;
}
.something p{
	color: #3d3d3d;
	font-size: 20px;
	font-weight: 300;
	line-height: 22px;
	padding: 10px;
}
.layer{
	background: transparent;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: 0.5s;
}
.layer:hover{
	background: rgba(244,67,54,0.6);
}
.layer h3{
	width: 100%;
	font-weight: 500;
	color: #fff;
	font-size: 26px;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	position:absolute;
	opacity: 0;
	transition: 0.5s;
}
.layer:hover h3{
	bottom: 49%;
	opacity: 1;
}

/*----- "facilities" (kohta 4 ekalla sivulla) -----*/

.facilities {
	width: 80%;
	margin: auto;
	text-align: center;
	padding-top: 100px;
}
.facilities-col{
	flex-basis: 31%;
	border-radius: 10px;
	margin-bottom: 5%;
	text-align: left;
}
.facilities-col img{
	width: 100%;
	border-radius: 10px;
}
.facilities-col p{
	padding: 0;
}
.facilities-col h3{
	margin-top: 16px;
	margin-bottom: 15px;
	text-align: left;
}
.facilities-col ul{
	padding: 5px;
	margin-left: 15px;
}
/*------ "comments" (kohta 5 ekalla sivulla) -----*/

.comments {
	width: 80%;
	margin: auto;
	padding-top: 60px;
	text-align: center;
}
.comments-col{
	flex-basis: 44%;
	border-radius: 10px;
	margin-bottom: 5%;
	text-align: left;
	background: #404040;
	padding: 25px;
	cursor: pointer;
	display: flex;
}
.comments-col h3{
	color: #fff;
	margin-top: 15px;
	text-align: left;
}
.comments-col p{
	color: #fff;
	padding: 0;
}
.comments-col img{
	height: 40px;
	margin-left: 5px;
	margin-right: 30px;
	border-radius: 50%;
}

/*------ "cta" (kohta 6 ekalla sivulla) -----*/

.cta{
	margin: 100px;
	width: 80%;
	margin-left: auto;
	margin-right:auto;
	background-image: linear-gradient(rgba(1,1,1,0.6),rgba(1,1,1,0.6)),url(images/mic.jpg);
	background-position: center;
	background-size: cover;
	border-radius: 10px;
	text-align: center;
	padding: 100px 0;
}
.cta h1{
	color:#fff;
	margin-bottom: 40px;
	padding: 0;
}

/*------ "footer" (kohta 6 ekalla sivulla) -----*/

.footer{
	width: 100%;
	text-align: center;
	padding:30px 0;
}
.footer h2{
	margin-bottom: 25px;
	margin-top: 20px;
	font-weight: 600;
	font-size:40px
}
.social{
	margin: 40px;
	margin-left: auto;
	margin-right:auto;
	width: 80%;
	background-image: linear-gradient(rgba(1,1,1,0),rgba(1,1,1,0)), url(images/social.gif);
	border-color:#1a1a1a;
	background-position: center;
	background-size: cover;
	border-radius: 10px;
	text-align: center;
	padding: 20px 0;
	font-size:20px;
	display: block;
}
.social p{
	padding: 10px 0;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7));
	color: #fff;
	border-radius: 10px;
}
.social a:link {
	color: #fff;
	text-decoration:none
	
}
.social a:visited {
	color: #fff;
	text-decoration:none;
}
.social a:hover {
	color:#f44336;
	text-decoration:none;
	
}

/*-------- Abut Us sivu -----------*/

.sub-header{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/hands.jpg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.sub-header h1{
	margin-top:100px;
}
.about-us{
	width: 80%;
	margin: auto;
	padding-top: 80px;
	padding-bottom: 50px;
}
.about-col{
	flex-basis: 48%;
	padding: 30px 2px;
}
.about-col img{
	width:100%;
	border-radius: 10px;
	
}
.about-col h1{
	padding-top: 0;
}
.about-col p{
	padding: 15px 0 25px;
}

.red-btn{
	border: 1px solid #f44336;
	background: transparent;
	color: #f44336;
}
.red-btn:hover{
	color:#fff;
}
.new1{
	border: solid 1px;
}
.facilities-col a:link {
	color: #000000;
	
}
.facilities-col a:visited {
	color: #878787;
	text-decoration:none;
}
.facilities-col a:hover {
	color:#f44336;
	text-decoration:none;
	
}
.sub-header1{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/handshake.jpg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}

/*-------- blogi sisältöä -----------*/

.sub-header2{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/book.jpeg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.blog-content{
	width: 80%;
	margin: auto;
	padding: 60px 0;
}
.blog-left{
	flex-basis: 65%;
}
.blog-left img{
	width: 100%;
	border-radius: 10px;
}
.blog-left h2{
	color: #222;
	font-weight: 600;
	margin: 30px 0;
}
.blog-left h3{
	color: #222;
	font-weight: 600;
	margin: 30px 0;
}
.blog-left p{
	color: #404040;
	padding: 0;
}
.blog-right{
	flex-basis: 32%;
	padding-top: 33px;
}
.blog-right h3{
	background: #f44336;
	color: #fff;
	padding: 7px 0;
	font-size: 16px;
	margin-bottom: 20px;
}
.blog-right div{
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #555;
	padding: 8px;
	box-sizing: border-box;
}
.comment-box{
	border: 1px solid #ccc;
	margin: 50px 0;
	padding: 10px 20px;
}
.comment-box h3{
	text-align: left;
}
.comment-form input, .comment-form textarea{
	width:100%;
	padding: 10px;
	margin: 15px 0;
	box-sizing: border-box;
	border: none;
	outline: none;
	background: #f0f0f0;
}
.comment-form button{
	margin: 10px 0;
}

/*-------- contact sisältöä -----------*/

.sub-header3{
	height: 50vh;
	width: 100%;
	background-image: linear-gradient(rgba(1,1,1,0.7),rgba(1,1,1,0.7)), url(images/mail.jpg);
	background-position: center;
	background-size: cover;
	text-align: center;
	color: #fff;
}
.location{
	width: 80%;
	margin: auto;
	padding: 80px 0;
}
.location iframe{
	width: 100%;
	border-radius: 10px;
}
.contact-us{
	width: 80%;
	margin: auto;
}
.contact-col{
	flex-basis: 48%;
	margin-bottom:30px;
}
.contact-col div{
	align-items: center;
	margin-bottom: 40px;
}
.contact-col div h3{
	font-size: 28px;
	color: #f44336;
	margin-bottom: 5px;
	margin-top: 10px;
	margin-right: 30px;
	font-weight: 600;
}
.contact-col div p{
	padding: 0;
	color: #555;
}
.contact-col div h5{
	font-size: 20px;
	margin-bottom: 5px;
	font-weight: 400;
}
.contact-col input, .contact-col textarea{
	width: 100%;
	padding: 15px;
	margin-bottom: 17px;
	outline: none;
	border: 1px solid #ccc;
	box-sizing: border-box;
}
.infotable{
	width: 80%;
	margin: auto;
}
.table{
	text-align: center;
	border-collapse: collapse;
	margin: 25px 0;
	font-size: 0.9em;
	min-width: 400px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;
	
}
.table th, .table td{
	border: 1px solid #ccc;
	padding: 5px;
	width: 90%;
}
.table a:link {
	color: #000000;
	
}
.table a:visited {
	color: #878787;
	text-decoration:none;
}
.table a:hover {
	color:#f44336;
	text-decoration:none;
}`
      }
    ]
  }
];
