import fitz  # PyMuPDF
import re
import pandas as pd
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# -------- CONFIGURATION --------
PDF_FILES = [
    # Add your PDF file paths here - both old and new types
    r"",
    r""
]

# Box definitions for both PDF types
class NewBoxDefinitions:
    ITEM_NUMBER = (25, 40, 60, 770)
    PO_NUMBER = (220, 20, 370, 60)
    DESTINATION = (25, 190, 305, 252)
    
    OTHER_BOXES = {
        'product_code': (72, -3, 135, 12),
        'due_date': (250, -3, 310, 12),
        'qty': (315, -3, 370, 12),
        'net_price': (380, -3, 440, 12),
        'material_revision_box': (72, 6, 175, 60),
        'product_name_box': (134, -3, 250, 11)
    }
    
    NEXT_PAGE_REVISION = (72, 98, 175, 154)

class LegacyBoxDefinitions:
    ITEM_NUMBER = (40, 85, 70, 705)
    PO_NUMBER = (330, 40, 570, 115)
    DESTINATION = (40, 200, 330, 300)

    OTHER_BOXES = {
        'product_code': (72, -2, 131, 15),
        'due_date': (217, -2, 270, 15),
        'qty': (286, -2, 314, 15),
        'net_price': (350, -2, 399, 15),
        'material_revision_box': (80, 15, 192, 80)
    }

    NEXT_PAGE_REVISION = (80, 98, 192, 154)

# Destination mapping
DESTINATION_MAPPING = {
    "loc1": "Location one",
    "loc2": "Location two",
}

# Final column order and names
FINAL_COLUMNS = [
    ('Destination', 'Destination:'),
    ('PO number', 'PO number:'),
    ('Item number', 'Pos:'),
    ('product_code', 'Product code:'),
    ('Revision', 'Revision:'),
    ('product_name', 'Product name:'),
    ('due_date', 'Due date:'),
    ('qty', 'Qty:'),
    ('net_price', 'Net price:')
]

RIGHT_ALIGN_COLUMNS = {"PO number:", "Pos:", "Qty:", "Net price:"}

class UnifiedPDFProcessor:
    """Unified processor that handles both older and newer PDF formats."""
    
    def __init__(self):
        self.logger = logger
    
    def detect_pdf_type(self, doc: fitz.Document) -> str:
        """
        Detect PDF type by checking PO number format.
        Returns 'legacy' for PO numbers starting with 4, 'new' for 7-9.
        """
        try:
            page = doc[0]
            
            # Try new format PO number location first
            new_po_rect = fitz.Rect(*NewBoxDefinitions.PO_NUMBER)
            new_po_words = self.extract_words_from_box(page, new_po_rect)
            new_po_candidates = [w[4] for w in new_po_words 
                               if w[4].isdigit() and len(w[4]) == 10]
            
            # Try legacy format PO number location
            legacy_po_rect = fitz.Rect(*LegacyBoxDefinitions.PO_NUMBER)
            legacy_po_words = self.extract_words_from_box(page, legacy_po_rect)
            legacy_po_candidates = [w[4] for w in legacy_po_words 
                                  if w[4].isdigit() and len(w[4]) == 10]
            
            # Check all candidates from both locations
            all_candidates = new_po_candidates + legacy_po_candidates
            
            for po in all_candidates:
                first_digit = po[0]
                if first_digit == '4':
                    self.logger.info(f"Detected legacy PDF (PO starts with 4: {po})")
                    return 'legacy'
                elif first_digit in ['7', '8', '9']:
                    self.logger.info(f"Detected new PDF (PO starts with {first_digit}: {po})")
                    return 'new'
            
            # If no PO number found, default to new format
            self.logger.warning("Could not detect PDF type from PO number, defaulting to new format")
            return 'new'
            
        except Exception as e:
            self.logger.error(f"Error detecting PDF type: {e}")
            return 'new'  # Default to new format
    
    def get_box_definitions(self, pdf_type: str):
        """Get appropriate box definitions based on PDF type."""
        return LegacyBoxDefinitions if pdf_type == 'legacy' else NewBoxDefinitions
    
    def print_ascii_table(self, df: pd.DataFrame) -> None:
        """Print DataFrame as ASCII table with proper alignment."""
        if df.empty:
            self.logger.warning("DataFrame is empty, nothing to print")
            return
        
        def format_value(val: Any) -> str:
            """Format value for display."""
            return "" if pd.isna(val) else str(val)

        # Build string version of DataFrame
        str_df = {col: [format_value(v) for v in df[col]] for col in df.columns}

        # Compute column widths
        widths = {}
        for col in df.columns:
            data_lengths = [len(x) for x in str_df[col]]
            widths[col] = max(len(col), max(data_lengths) if data_lengths else 0)

        def create_horizontal_line(char: str = "-", corner: str = "+", junction: str = "+") -> str:
            """Create horizontal line for table."""
            return corner + junction.join(char * (widths[c] + 2) for c in df.columns) + corner

        def create_row(values: List[str], is_header: bool = False) -> str:
            """Create table row with proper alignment."""
            cells = []
            for col, val in zip(df.columns, values):
                if col in RIGHT_ALIGN_COLUMNS and not is_header:
                    cells.append(" " + val.rjust(widths[col]) + " ")
                else:
                    cells.append(" " + val.ljust(widths[col]) + " ")
            return "|" + "|".join(cells) + "|"

        # Build table lines
        lines = []
        top_line = create_horizontal_line("-")
        separator_line = create_horizontal_line("=")
        middle_line = create_horizontal_line("-")
        bottom_line = create_horizontal_line("-")

        lines.append(top_line)
        lines.append(create_row(list(df.columns), is_header=True))
        lines.append(separator_line)

        for i in range(len(df)):
            values = [str_df[col][i] for col in df.columns]
            lines.append(create_row(values))
            lines.append(bottom_line if i == len(df) - 1 else middle_line)

        print("\n".join(lines))

    def extract_words_from_box(self, page: fitz.Page, rect: fitz.Rect) -> List[Tuple]:
        """Extract words that intersect with given rectangle."""
        try:
            words = page.get_text("words")
            return [w for w in words if rect.intersects(fitz.Rect(w[:4]))]
        except Exception as e:
            self.logger.error(f"Error extracting words from box: {e}")
            return []

    def clean_price_to_eu(self, text: str) -> str:
        """
        Convert price text to EU format (comma as decimal separator).
        Handles both US and EU formats.
        """
        if not text:
            return ""
        
        # Handle both formats - look for numbers with optional thousands separators and decimals
        match = re.search(r"\d{1,3}(?:[.,\s\u202f]\d{3})*(?:[.,]\d{2,})|\d+[.,]\d{2,}", text)
        if not match:
            return ""
        
        try:
            raw_price = match.group(0).replace("\u202f", "").replace(" ", "")  # Remove thin spaces
            
            # Determine decimal and thousands separators
            last_dot = raw_price.rfind(".")
            last_comma = raw_price.rfind(",")
            
            if last_dot > last_comma:  # US format: 1,229.74
                decimal_sep = "."
                thousands_sep = ","
            elif last_comma > last_dot:  # EU format: 1.229,74
                decimal_sep = ","
                thousands_sep = "."
            else:  # Only one separator present
                if raw_price.count(",") == 1 and len(raw_price.split(",")[1]) <= 2:
                    decimal_sep = ","
                    thousands_sep = ""
                elif raw_price.count(".") == 1 and len(raw_price.split(".")[1]) <= 2:
                    decimal_sep = "."
                    thousands_sep = ""
                else:
                    decimal_sep = ","
                    thousands_sep = "."
            
            # Convert to float
            number_str = raw_price.replace(thousands_sep, "").replace(decimal_sep, ".")
            price_float = float(number_str)
            
            # Format with comma as decimal separator
            return f"{price_float:.2f}".replace(".", ",")
            
        except (ValueError, AttributeError) as e:
            self.logger.warning(f"Error converting price '{text}': {e}")
            return ""

    def clean_qty_numeric(self, text: str) -> str:
        """Extract first numeric value from text."""
        if not text:
            return ""
        
        match = re.search(r"\d+(?:[.,]\d+)?", text)
        return match.group(0).strip() if match else ""

    def convert_date_format(self, date_string: str) -> str:
        """Convert date from various formats to Finnish DD.MM.YYYY format."""
        if not date_string:
            return date_string
        
        date_formats = [
            '%Y%b%d',           # 2025Aug18
            '%b %d, %Y',        # Aug 18, 2025
            '%B %d, %Y',        # August 18, 2025
            '%d.%m.%Y',         # Already Finnish format
            '%d/%m/%Y',         # Day/Month/Year
            '%m/%d/%Y',         # Month/Day/Year (US format)
            '%Y-%m-%d',         # ISO format: 2025-08-18
            '%d-%m-%Y',         # Day-Month-Year with dashes
        ]
        
        for date_format in date_formats:
            try:
                parsed_date = datetime.strptime(date_string.strip(), date_format)
                return parsed_date.strftime('%d.%m.%Y')
            except ValueError:
                continue
        
        self.logger.warning(f"Unable to convert date format: '{date_string}'")
        return date_string

    def determine_destination(self, text: str) -> str:
        """Determine destination based on text content."""
        if not text:
            return "Unknown"
        
        text_lower = text.lower()
        for keyword, destination in DESTINATION_MAPPING.items():
            if keyword in text_lower:
                return destination
        return "Unknown"

    def extract_revision(self, item_info: Dict[str, Any], doc: fitz.Document, 
                        page_num: int, pdf_type: str) -> str:
        """Extract material revision from current or next page."""
        box_defs = self.get_box_definitions(pdf_type)
        
        # Try current page first
        if 'material_revision_box' in item_info:
            text = item_info['material_revision_box']
            # Different patterns for different PDF types
            if pdf_type == 'legacy':
                match = re.search(r"Material Revision:\s*([\w.-]+)", text)
            else:
                match = re.search(r"Material revision :\s*([\w.-]+)", text)
            
            if match:
                return match.group(1)

        # Try next page if available
        if page_num + 1 < len(doc):
            try:
                next_page = doc[page_num + 1]
                rect = fitz.Rect(*box_defs.NEXT_PAGE_REVISION)
                words = self.extract_words_from_box(next_page, rect)
                
                if words:
                    words.sort(key=lambda w: (w[3], w[0]))
                    text = ' '.join(w[4] for w in words)
                    
                    if pdf_type == 'legacy':
                        match = re.search(r"Material Revision:\s*([\w.-]+)", text)
                    else:
                        match = re.search(r"Material revision :\s*([\w.-]+)", text)
                    
                    if match:
                        return match.group(1)
            except Exception as e:
                self.logger.warning(f"Error checking next page for revision: {e}")

        return "No revision found"

    def extract_item_info(self, doc: fitz.Document, page_num: int, item_rect: fitz.Rect, 
                         po_number: Optional[str], destination: str, item_number: str,
                         pdf_type: str) -> Dict[str, Any]:
        """Extract all information for a single item."""
        page = doc[page_num]
        box_defs = self.get_box_definitions(pdf_type)
        
        item_info = {
            'PO number': po_number or "",
            'Destination': destination,
            'Item number': item_number
        }

        # Extract information from defined boxes
        for box_name, (x0, y0_off, x1, y1_off) in box_defs.OTHER_BOXES.items():
            rect = fitz.Rect(x0, item_rect.y0 + y0_off, x1, item_rect.y0 + y1_off)
            words = self.extract_words_from_box(page, rect)
            
            if words:
                words.sort(key=lambda w: (w[3], w[0]))
                text = ' '.join(w[4] for w in words)
            else:
                text = ""

            # Apply specific formatting based on box type
            if box_name == 'qty':
                item_info['qty'] = self.clean_qty_numeric(text)
            elif box_name == 'net_price':
                item_info['net_price'] = self.clean_price_to_eu(text)
            else:
                item_info[box_name] = text if text else "No text found"

        # Handle material revision
        item_info['Revision'] = self.extract_revision(item_info, doc, page_num, pdf_type)

        # Handle product name preference logic (only for new PDFs)
        if pdf_type == 'new' and 'product_name_box' in item_info:
            if item_info['product_name_box'] != "No text found":
                item_info['product_name'] = item_info['product_name_box']
            elif 'product_code' in item_info:
                parts = item_info['product_code'].split(' ', 1)
                if len(parts) == 2:
                    item_info['product_code'] = parts[0]
                    item_info['product_name'] = parts[1]
                else:
                    item_info['product_code'] = parts[0] if parts else ""
                    item_info['product_name'] = 'No text found'
        else:
            # Legacy PDF logic
            if 'product_code' in item_info:
                parts = item_info['product_code'].split(' ', 1)
                if len(parts) == 2:
                    item_info['product_code'] = parts[0]
                    item_info['product_name'] = parts[1]
                else:
                    item_info['product_name'] = 'No text found'

        # Convert date format if present
        if 'due_date' in item_info:
            item_info['due_date'] = self.convert_date_format(item_info['due_date'])

        return item_info

    def process_single_pdf(self, pdf_path: str) -> List[Dict[str, Any]]:
        """Process a single PDF file and extract all items."""
        if not Path(pdf_path).exists():
            self.logger.error(f"PDF file not found: {pdf_path}")
            return []

        try:
            with fitz.open(pdf_path) as doc:
                # Detect PDF type
                pdf_type = self.detect_pdf_type(doc)
                box_defs = self.get_box_definitions(pdf_type)
                
                po_number = None
                destination = "Unknown"
                extracted_items = []

                for page_num, page in enumerate(doc):
                    # Extract PO number and destination from first page
                    if page_num == 0:
                        # Extract PO number
                        po_rect = fitz.Rect(*box_defs.PO_NUMBER)
                        po_words = self.extract_words_from_box(page, po_rect)
                        po_candidates = [w[4] for w in po_words 
                                       if w[4].isdigit() and len(w[4]) == 10]
                        if po_candidates:
                            po_number = po_candidates[0]

                        # Extract destination
                        dest_rect = fitz.Rect(*box_defs.DESTINATION)
                        dest_words = self.extract_words_from_box(page, dest_rect)
                        dest_text = ' '.join(w[4] for w in dest_words)
                        destination = self.determine_destination(dest_text)

                    # Extract item numbers and their information
                    item_rect = fitz.Rect(*box_defs.ITEM_NUMBER)
                    item_words = self.extract_words_from_box(page, item_rect)
                    
                    # Filter for valid item numbers
                    item_numbers = [
                        w for w in item_words 
                        if (w[4].isdigit() and len(w[4]) == 5 and 
                            w[4][0] == '0' and int(w[4]) % 10 == 0)
                    ]

                    # Process each item
                    for item_word in item_numbers:
                        item_value = str(int(item_word[4]))  # Remove leading zeros
                        item_rect_coords = fitz.Rect(item_word[:4])
                        
                        item_info = self.extract_item_info(
                            doc, page_num, item_rect_coords, 
                            po_number, destination, item_value, pdf_type
                        )
                        extracted_items.append(item_info)

                return extracted_items

        except Exception as e:
            self.logger.error(f"Error processing PDF {pdf_path}: {e}")
            return []

    def create_output_dataframe(self, all_items: List[Dict[str, Any]]) -> pd.DataFrame:
        """Create and format the output DataFrame."""
        if not all_items:
            self.logger.warning("No items to process")
            return pd.DataFrame()

        df = pd.DataFrame(all_items)

        # Ensure all required columns exist
        for col_name, _ in FINAL_COLUMNS:
            if col_name not in df.columns:
                df[col_name] = ""

        # Select and rename columns
        df = df[[col_name for col_name, _ in FINAL_COLUMNS]]
        df.columns = [display_name for _, display_name in FINAL_COLUMNS]

        return df

    def process_all_pdfs(self, pdf_files: List[str]) -> Tuple[pd.DataFrame, List[Optional[str]]]:
        """Process all PDF files and return combined DataFrame and PO numbers."""
        all_items = []
        po_numbers = []

        for pdf_path in pdf_files:
            self.logger.info(f"Processing: {pdf_path}")
            items = self.process_single_pdf(pdf_path)
            
            if items:
                po_numbers.append(items[0].get('PO number'))
                all_items.extend(items)
            else:
                po_numbers.append(None)

        df = self.create_output_dataframe(all_items)
        return df, po_numbers

def main():
    """Main function to run the unified PDF processing."""
    processor = UnifiedPDFProcessor()
    
    logger.info("Starting unified PDF processing...")
    df, po_numbers = processor.process_all_pdfs(PDF_FILES)
    
    if df.empty:
        logger.warning("No data extracted from any PDF files.")
        return

    # Print results
    processor.print_ascii_table(df)

    # Print processed PO numbers
    valid_po_numbers = [po for po in po_numbers if po is not None]
    if valid_po_numbers:
        print("\nProcessed PO Numbers:")
        for po in valid_po_numbers:
            print(f" - {po}")
    
    logger.info("Processing completed successfully.")

if __name__ == "__main__":
    main()