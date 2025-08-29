import os, re, sys, time, logging
from pathlib import Path
import win32com.client, pythoncom

# ─── user‑config ────────────────────────────────────────────────────────────
# Target download directory
DOWNLOAD_DIR = Path(r"")

# Email configuration
SENDER_NAME = "Sender Name"
SUBJECT_PATTERN = re.compile(r"^Tilaus\s+(\d+)$", re.I)

# ─── logging ────────────────────────────────────────────────────────────────
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(DOWNLOAD_DIR / "Tilaus_Download_log.log", "a", "utf‑8"),
        logging.StreamHandler(sys.stdout),
    ],
)
LOG = logging.getLogger("Tilaus‑PDF‑DL")

# ─── Statistics tracking ────────────────────────────────────────────────────
class ProcessingStats:
    def __init__(self):
        self.total_unread = 0
        self.matching_emails = 0
        self.successfully_downloaded = 0
        self.failed_downloads = []
        self.skipped_emails = []
        
    def log_summary(self):
        LOG.info("=" * 80)
        LOG.info("PROCESSING SUMMARY:")
        LOG.info("=" * 80)
        LOG.info(f"Total unread messages found: {self.total_unread}")
        LOG.info(f"Matching emails: {self.matching_emails}")
        LOG.info(f"PDFs successfully downloaded: {self.successfully_downloaded}")
        LOG.info(f"Failed downloads: {len(self.failed_downloads)}")
        LOG.info(f"Skipped emails: {len(self.skipped_emails)}")
        
        if self.failed_downloads:
            LOG.warning("Failed downloads:")
            for order_id, reason in self.failed_downloads:
                LOG.warning(f"  - Tilaus {order_id}: {reason}")
        
        if self.skipped_emails:
            LOG.info("Skipped emails:")
            for subject in self.skipped_emails[:10]:  # Show max 10
                LOG.info(f"  - {subject[:80]}")
            if len(self.skipped_emails) > 10:
                LOG.info(f"  ... and {len(self.skipped_emails) - 10} more")
        
        LOG.info("=" * 80)

stats = ProcessingStats()

# ─── Helper functions ───────────────────────────────────────────────────────
def ensure_onedrive_synced(path: Path) -> bool:
    """Ensure OneDrive folder is accessible and synced."""
    max_wait = 30  # seconds
    check_interval = 2
    
    LOG.info(f"Checking OneDrive sync status for: {path}")
    
    for i in range(0, max_wait, check_interval):
        try:
            # Check if path exists and is accessible
            if path.exists() and path.is_dir():
                # Try to create a test file to ensure write access
                test_file = path / f".test_{os.getpid()}.tmp"
                try:
                    test_file.touch()
                    test_file.unlink()
                    LOG.info("OneDrive folder is accessible and writable")
                    return True
                except Exception as e:
                    LOG.warning(f"OneDrive folder exists but not writable yet: {e}")
            else:
                LOG.warning(f"OneDrive folder not accessible yet (attempt {i//check_interval + 1})")
            
            if i < max_wait - check_interval:
                time.sleep(check_interval)
                
        except Exception as e:
            LOG.warning(f"Error checking OneDrive status: {e}")
            if i < max_wait - check_interval:
                time.sleep(check_interval)
    
    LOG.error("OneDrive folder is not accessible after waiting")
    return False

def get_final_filename(order_number: str, folder: Path) -> Path:
    base_name = f"{order_number} M"
    final_path = folder / f"{base_name}.pdf"
    
    if not final_path.exists():
        return final_path
    
    # Find next available number if file exists
    i = 2
    while (folder / f"{base_name}_{i}.pdf").exists():
        i += 1
    final_name = folder / f"{base_name}_{i}.pdf"
    LOG.info(f"File exists, using alternative name: {final_name.name}")
    return final_name

def process_email(msg) -> bool:
    """Process a single email and download PDF attachments."""
    try:
        # Get email details
        subject = str(msg.Subject or "")
        sender_name = str(msg.SenderName or "")
        
        LOG.info(f"Checking email: '{subject}' from '{sender_name}'")
        
        # Check if sender matches
        if sender_name.lower() != SENDER_NAME.lower():
            LOG.info(f"  Skipped - wrong sender (expected: {SENDER_NAME})")
            stats.skipped_emails.append(f"{subject} (from: {sender_name})")
            return False
        
        # Check if subject matches pattern
        match = SUBJECT_PATTERN.match(subject)
        if not match:
            LOG.info(f"  Skipped - subject doesn't match pattern")
            stats.skipped_emails.append(subject)
            return False
        
        order_number = match.group(1)
        LOG.info(f"  Found order: {order_number}")
        stats.matching_emails += 1
        
        # Check for attachments
        attachments = msg.Attachments
        if attachments.Count == 0:
            error_msg = "No attachments found"
            LOG.warning(f"  {error_msg}")
            stats.failed_downloads.append((order_number, error_msg))
            return False
        
        pdf_found = False
        for i in range(1, attachments.Count + 1):
            attachment = attachments.Item(i)
            filename = str(attachment.FileName or "")
            
            LOG.info(f"  Checking attachment: {filename}")
            
            # Check if it's a PDF
            if not filename.lower().endswith('.pdf'):
                LOG.info(f"    Skipped - not a PDF file")
                continue
            
            # Generate target filename
            target_path = get_final_filename(order_number, DOWNLOAD_DIR)
            LOG.info(f"  Downloading to: {target_path.name}")
            
            try:
                # Save the attachment
                attachment.SaveAsFile(str(target_path))
                LOG.info(f"  ✓ Successfully downloaded: {target_path.name}")
                stats.successfully_downloaded += 1
                pdf_found = True
                
                # Usually there's only one PDF per email, but continue checking
                # in case there are multiple PDFs
                
            except Exception as e:
                error_msg = f"Failed to save attachment: {e}"
                LOG.error(f"  ✗ {error_msg}")
                stats.failed_downloads.append((order_number, error_msg))
                return False
        
        if not pdf_found:
            error_msg = "No PDF attachment found in email"
            LOG.warning(f"  {error_msg}")
            stats.failed_downloads.append((order_number, error_msg))
            return False
        
        return True
        
    except Exception as e:
        LOG.error(f"✗ Error processing email: {e}")
        return False

# ─── main ───────────────────────────────────────────────────────────────────
def main():
    # Phase 1: Starting the script
    LOG.info("=" * 80)
    LOG.info("Starting PDF Attachment Downloader")
    LOG.info(f"Download directory: {DOWNLOAD_DIR}")
    LOG.info(f"Looking for emails from: {SENDER_NAME}")
    LOG.info(f"Subject pattern: The wanted pattern")
    LOG.info("=" * 80)
    
    # Validate environment
    LOG.info("Validating environment...")
    
    # Check OneDrive sync
    if not ensure_onedrive_synced(DOWNLOAD_DIR):
        LOG.error("✗ OneDrive is not properly synced. Please ensure OneDrive is running and synced.")
        LOG.error("Try these steps:")
        LOG.error("  1. Open OneDrive from system tray")
        LOG.error("  2. Check sync status")
        LOG.error("  3. Resolve any sync conflicts")
        LOG.error("  4. Restart OneDrive if needed")
        return
    
    pythoncom.CoInitialize()
    
    try:
        # Phase 2: Accessing Outlook
        LOG.info("Connecting to Outlook...")
        try:
            outlook = win32com.client.Dispatch("Outlook.Application")
            ns = outlook.GetNamespace("MAPI")
            LOG.info("✓ Connected to Outlook")
        except Exception as e:
            LOG.error("✗ Failed to connect to Outlook")
            LOG.error(f"Error: {e}")
            LOG.error("Possible causes:")
            LOG.error("  - Outlook is not installed")
            LOG.error("  - Outlook is not running")
            LOG.error("  - Insufficient permissions")
            return
        
        # Phase 3: Access the Inbox
        LOG.info("Accessing Inbox (Saapuneet)...")
        try:
            # Get the default Inbox folder (6 = olFolderInbox)
            inbox = ns.GetDefaultFolder(6)
            LOG.info(f"✓ Accessed Inbox: {inbox.Name}")
            
            # Log the email account being accessed
            try:
                account_name = inbox.Parent.Name
                LOG.info(f"Email account: {account_name}")
            except:
                pass
                
        except Exception as e:
            LOG.error(f"✗ Failed to access Inbox: {e}")
            return
        
        # Phase 4: Find unread messages
        LOG.info("Searching for unread messages...")
        try:
            msgs = inbox.Items
            unread_filter = "[Unread] = true"
            unread_msgs = msgs.Restrict(unread_filter)
            unread_total = unread_msgs.Count
            stats.total_unread = unread_total
            
            LOG.info(f"Found {unread_total} unread messages")
        except Exception as e:
            LOG.error(f"✗ Failed to access unread messages: {e}")
            return
        
        if unread_total == 0:
            LOG.info("No unread messages found - nothing to process")
            stats.log_summary()
            return
        
        # Phase 5: Process messages
        LOG.info("Processing messages...")
        LOG.info("-" * 80)
        
        # Convert to list to avoid collection modification issues
        messages_to_process = []
        for i in range(1, unread_total + 1):
            try:
                msg = unread_msgs.Item(i)
                if msg.UnRead:  # Double-check it's still unread
                    messages_to_process.append(msg)
            except Exception as e:
                LOG.warning(f"Failed to access message {i}: {e}")
                continue
        
        LOG.info(f"Collected {len(messages_to_process)} messages for processing")
        LOG.info("-" * 80)
        
        # Process each message
        for msg_num, msg in enumerate(messages_to_process, 1):
            LOG.info(f"\nProcessing message {msg_num}/{len(messages_to_process)}:")
            try:
                process_email(msg)
                
            except Exception as e:
                LOG.error(f"✗ Failed to process message {msg_num}: {e}")
                continue
        
        LOG.info("\n" + "-" * 80)
        LOG.info("All messages processed!")
        
    except Exception as e:
        LOG.error("✗ Fatal error occurred!")
        LOG.exception(f"Unexpected error: {e}")
    finally:
        try:
            pythoncom.CoUninitialize()
        except:
            pass
    
    # Final summary
    stats.log_summary()
    LOG.info("DOWNLOADER FINISHED!")
    LOG.info("")

if __name__ == "__main__":
    main()