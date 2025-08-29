import os, re, sys, time, logging
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import win32com.client, pythoncom
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options as FFOptions
from selenium.webdriver.firefox.service import Service as FFService
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import (
    TimeoutException, NoSuchElementException, StaleElementReferenceException,
    WebDriverException
)
from webdriver_manager.firefox import GeckoDriverManager

# ─── user‑config ────────────────────────────────────────────────────────────
# Auto-detect which PC we're on and use appropriate paths
PC1_DOWNLOAD_DIR = Path(r"")
PC2_DOWNLOAD_DIR = Path(r"")

PC1_GECKO_PATH = r""
PC2_GECKO_PATH = r""

# Determine which paths to use
if PC1_DOWNLOAD_DIR.exists():
    DOWNLOAD_DIR = PC1_DOWNLOAD_DIR
    GECKO_DRIVER_PATH = PC1_GECKO_PATH
    LOG_PREFIX = "PC1"
elif PC2_DOWNLOAD_DIR.exists():
    DOWNLOAD_DIR = PC2_DOWNLOAD_DIR
    GECKO_DRIVER_PATH = PC2_GECKO_PATH
    LOG_PREFIX = "PC2"
else:
    # Fallback - try to find OneDrive path dynamically
    username = os.environ.get('USERNAME', '')
    fallback_dir = Path(f"")
    if fallback_dir.exists():
        DOWNLOAD_DIR = fallback_dir
        GECKO_DRIVER_PATH = str(fallback_dir.parent / "geckodriver.exe")
        LOG_PREFIX = f"PC-{username}"
    else:
        raise RuntimeError(
            "Could not find the download directory. Please check paths:\n"
            f"PC1: {PC1_DOWNLOAD_DIR}\n"
            f"PC2: {PC2_DOWNLOAD_DIR}\n"
            f"Attempted: {fallback_dir}"
        )

TARGET_FOLDER_NAME = "Example"

# ─── constants ──────────────────────────────────────────────────────────────
SUBJECT_RE = re.compile(r"^PII:\s*Order#\s*(\d{10})\s*received\s*from\s*PII", re.I)
LINK_RE    = re.compile(r"https://example\.pattern\.com/example\S+")
WAIT_SECS  = 5
DL_TIMEOUT = 5

# Pre-compile address patterns for faster matching
ADDR_PATTERNS = [
    (re.compile(r"Address 1", re.I), "A1"),
    (re.compile(r"Address 2", re.I), "A2"),
]

# ─── logging ────────────────────────────────────────────────────────────────
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
logging.basicConfig(
    level=logging.INFO,
    format="%(message)s",
    handlers=[
        logging.FileHandler(DOWNLOAD_DIR / "Download_log.log", "a", "utf‑8"),
        logging.StreamHandler(sys.stdout),
    ],
)
for noisy in ("selenium", "urllib3", "webdriver_manager"):
    logging.getLogger(noisy).setLevel(logging.WARNING)
LOG = logging.getLogger("M‑DL")

# Log which PC configuration is being used
LOG.info(f"Running on {LOG_PREFIX} with download dir: {DOWNLOAD_DIR}")

load_dotenv()

# ─── Statistics tracking ────────────────────────────────────────────────────
class ProcessingStats:
    def __init__(self):
        self.total_unread = 0
        self.successfully_processed = 0
        self.successfully_downloaded = 0
        self.successfully_renamed = 0
        self.failed_emails = []
        self.skipped_emails = []
        
    def log_summary(self):
        LOG.info("=" * 120)
        LOG.info("PROCESSING SUMMARY:")
        LOG.info("=" * 120)
        LOG.info(f"Total unread messages found: {self.total_unread}")
        LOG.info(f"Messages successfully processed: {self.successfully_processed}")
        LOG.info(f"PDFs successfully downloaded: {self.successfully_downloaded}")
        LOG.info(f"PDFs successfully renamed: {self.successfully_renamed}")
        LOG.info(f"Failed processing: {len(self.failed_emails)}")
        LOG.info(f"Skipped (non-PII): {len(self.skipped_emails)}")
        
        if self.failed_emails:
            LOG.warning("Failed orders:")
            for order_id, reason in self.failed_emails:
                LOG.warning(f"  - {order_id}: {reason}")
        
        if self.skipped_emails:
            LOG.info("Skipped emails (not PII orders):")
            for subject in self.skipped_emails:
                LOG.info(f"  - {subject[:80]}")
        
        LOG.info("=" * 120)

stats = ProcessingStats()

# ─── Outlook helper ─────────────────────────────────────────────────────────
def find_folder(root, wanted_name):
    """Optimized folder search with early termination."""
    LOG.info(f"Searching for folder '{wanted_name}' in {root.Name}")
    stack = [root]
    while stack:
        current = stack.pop()
        try:
            for f in current.Folders:
                if f.Name == wanted_name:
                    LOG.info(f"Found target folder: {wanted_name}")
                    return f
                stack.append(f)
        except Exception as e:
            LOG.warning(f"Error accessing folder {current.Name}: {e}")
            continue
    return None

# ─── webdriver helpers ──────────────────────────────────────────────────────
def build_firefox_driver(dest: Path) -> webdriver.Firefox:
    """Optimized Firefox driver with better performance settings."""
    LOG.info("Initializing Firefox web driver")
    
    try:
        opts = FFOptions()
        opts.add_argument("-headless")
        
        # Add performance optimizations
        opts.add_argument("--disable-blink-features=AutomationControlled")
        opts.set_preference("dom.webdriver.enabled", False)
        opts.set_preference("useAutomationExtension", False)
        
        prefs = {
            "browser.download.folderList": 2,
            "browser.download.dir": str(dest),
            "browser.download.useDownloadDir": True,
            "browser.download.start_downloads_in_tmp_dir": False,
            "browser.download.improvements_to_download_panel": False,
            "browser.download.always_ask_before_handling_new_types": False,
            "browser.helperApps.neverAsk.saveToDisk": "application/pdf,application/octet-stream",
            "pdfjs.disabled": True,
            # Performance improvements
            "browser.cache.disk.enable": False,
            "browser.cache.memory.enable": False,
            "browser.cache.offline.enable": False,
            "network.http.use-cache": False,
        }
        for k, v in prefs.items():
            opts.set_preference(k, v)

        if (bin_path := os.getenv("FIREFOX_BINARY")):
            opts.binary_location = bin_path

        service = FFService(
            executable_path=GECKO_DRIVER_PATH or GeckoDriverManager().install(),
            log_output=os.devnull, log_level="fatal",
        )
        drv = webdriver.Firefox(service=service, options=opts)
        drv.set_page_load_timeout(WAIT_SECS)
        LOG.info(f"Firefox driver initialized successfully. Download directory: {dest}")
        return drv
        
    except Exception as e:
        LOG.error(f"Failed to initialize Firefox driver: {e}")
        LOG.error("Possible causes:")
        LOG.error("  - Firefox browser not installed")
        LOG.error("  - GeckoDriver not found or corrupted")
        LOG.error("  - Insufficient permissions")
        LOG.error(f"  - Download directory not accessible: {dest}")
        raise

def wait_for_download(prefix: str, folder: Path) -> Path | None:
    """Optimized download waiting with early detection."""
    LOG.info(f"Waiting for PDF download to complete (prefix: {prefix})")
    end_time = time.time() + DL_TIMEOUT
    pattern = f"{prefix}*.pdf"
    
    while time.time() < end_time:
        # Use a more efficient file check
        pdf_files = list(folder.glob(pattern))
        for f in pdf_files:
            # Check file size is stable (file fully written)
            if f.exists() and not f.with_suffix(".part").exists():
                try:
                    size1 = f.stat().st_size
                    if size1 > 0:  # File has content
                        time.sleep(0.1)  # Brief wait
                        size2 = f.stat().st_size
                        if size1 == size2:  # Size stable
                            LOG.info(f"PDF download completed: {f.name}")
                            return f
                except OSError:
                    continue
        time.sleep(0.2)  # Reduced sleep time
    
    LOG.error(f"Download failed: Timed out after {DL_TIMEOUT}s waiting for {prefix}*.pdf")
    LOG.error("Possible causes:")
    LOG.error("  - Network connection issues")
    LOG.error("  - Server-side download problems")
    LOG.error("  - Browser blocked the download")
    LOG.error("  - Insufficient disk space")
    return None

# ─── address helpers ───────────────────────────────────────────────────────
def detect_suffix_fast(page_source: str) -> str | None:
    """Optimized suffix detection using pre-compiled regexes."""
    for pattern, suffix in ADDR_PATTERNS:
        if pattern.search(page_source):
            LOG.info(f"Address found: {suffix}")
            return suffix
    LOG.info("No address found - will use default naming")
    return None

def get_final_filename(order_id: str, suffix: str, folder: Path) -> Path:
    """Pre-calculate the final filename to avoid multiple rename attempts."""
    base_name = f"{order_id} {suffix}"
    final_path = folder / f"{base_name}.pdf"
    
    if not final_path.exists():
        return final_path
    
    # Find next available number efficiently
    i = 2
    while (folder / f"{base_name}_{i}.pdf").exists():
        i += 1
    final_name = folder / f"{base_name}_{i}.pdf"
    LOG.info(f"File exists, using alternative name: {final_name.name}")
    return final_name

# ─── e‑mail processing ──────────────────────────────────────────────────────
def process_email(msg, drv):
    """Optimized email processing with better performance."""
    # Cache subject and body to avoid multiple COM calls
    subject = str(msg.Subject or "")
    body = str(msg.Body or "")
    
    LOG.info(f"Processing email: {subject[:24]}")
    
    m = SUBJECT_RE.match(subject)
    if not m:
        LOG.info("Email skipped - not a PII order")
        stats.skipped_emails.append(subject)
        return True
    
    order_id = m.group(1)
    LOG.info(f"Processing Order: {order_id}")

    # Step 4: Find link in email
    LOG.info(f"Looking for link in the email")
    link_m = LINK_RE.search(body)
    if not link_m:
        error_msg = "No PII link found in email body"
        LOG.error(f"✗ Order {order_id}: {error_msg}")
        stats.failed_emails.append((order_id, error_msg))
        return False

    pii_url = link_m.group(0)
    LOG.info(f"Link found: {pii_url}")

    # Step 5: Navigate to link
    try:
        LOG.info(f"Navigating to PII portal")
        drv.get(pii_url)
        LOG.info(f"Successfully loaded PII page")
    except Exception as e:
        error_msg = f"Failed to navigate to PII URL: {e}"
        LOG.error(f"✗ Order {order_id}: {error_msg}")
        stats.failed_emails.append((order_id, error_msg))
        return False

    # Step 6: Login if needed
    try:
        if not do_login_if_needed(drv, order_id):
            error_msg = "Login failed"
            stats.failed_emails.append((order_id, error_msg))
            return False
    except Exception as e:
        error_msg = f"Login process failed: {e}"
        LOG.error(f"✗ Order {order_id}: {error_msg}")
        stats.failed_emails.append((order_id, error_msg))
        return False

    # Detect address suffix for naming
    LOG.info(f"Searching for address")
    page_source = drv.page_source
    suffix = detect_suffix_fast(page_source)
    
    # Only check iframes if necessary
    if suffix is None:
        LOG.info("Checking iframes for address patterns")
        iframes = drv.find_elements(By.TAG_NAME, "iframe")
        for i, iframe in enumerate(iframes):
            try:
                LOG.info(f"Checking iframe {i+1}/{len(iframes)}")
                drv.switch_to.frame(iframe)
                suffix = detect_suffix_fast(drv.page_source)
                drv.switch_to.default_content()
                if suffix:
                    break
            except StaleElementReferenceException:
                drv.switch_to.default_content()
                continue

    # Step 7: Find download link
    LOG.info(f"Searching for PDF download link")
    try:
        link = WebDriverWait(
            drv, WAIT_SECS, poll_frequency=0.2
        ).until(lambda d: find_doc_link_optimized(d, order_id))
        
        if not link:
            error_msg = "PDF download link not found"
            LOG.error(f"✗ Order {order_id}: {error_msg}")
            stats.failed_emails.append((order_id, error_msg))
            return False
        
        LOG.info(f"PDF download link found: {link.text}")
    except TimeoutException:
        error_msg = f"PDF download link not found within {WAIT_SECS} seconds"
        LOG.error(f"✗ Order {order_id}: {error_msg}")
        LOG.error("Possible causes:")
        LOG.error("  - Page still loading")
        LOG.error("  - Document not yet available")
        LOG.error("  - Page structure changed")
        stats.failed_emails.append((order_id, error_msg))
        return False

    if ".zip" in link.text.lower():
        LOG.warning(f"Order {order_id}: ZIP file detected - skipping download")
        stats.skipped_emails.append(f"Order {order_id} (ZIP file)")
        return True

    # Pre-calculate target filename if suffix found
    target_path = None
    if suffix:
        target_path = get_final_filename(order_id, suffix, DOWNLOAD_DIR)
        LOG.info(f"Target filename will be: {target_path.name}")

    # Step 8: Download
    LOG.info(f"Starting PDF download")
    try:
        link.click()
        LOG.info(f"Download initiated")
    except Exception as e:
        error_msg = f"Failed to click download link: {e}"
        LOG.error(f"✗ Order {order_id}: {error_msg}")
        stats.failed_emails.append((order_id, error_msg))
        return False
    
    pdf = wait_for_download(order_id, DOWNLOAD_DIR)
    if not pdf:
        error_msg = "PDF download failed or timed out"
        stats.failed_emails.append((order_id, error_msg))
        return False
    
    stats.successfully_downloaded += 1
    
    # Step 9: Rename
    if pdf and target_path:
        LOG.info(f"Renaming file")
        try:
            pdf.rename(target_path)
            LOG.info(f"File renamed: {target_path.name}")
            stats.successfully_renamed += 1
        except OSError as e:
            LOG.error(f"✗ Failed to rename {pdf.name}: {e}")
            LOG.error("File downloaded but kept original name")
            LOG.error("Possible causes:")
            LOG.error("  - File permissions issue")
            LOG.error("  - Target filename already exists")
            LOG.error("  - Disk full or file system error")
            # Don't count as complete failure since file was downloaded
    elif pdf:
        LOG.info(f"File kept with original name: {pdf.name}")
        stats.successfully_renamed += 1  # Count as successful since no rename was needed

    LOG.info(f"Order {order_id} processed successfully")
    return True

def do_login_if_needed(drv, order_id):
    """Optimized login check with detailed error handling."""
    try:
        # Use a faster presence check
        username_field = drv.find_element(By.ID, "username")
        LOG.info(f"Login required for Order {order_id}")
    except NoSuchElementException:
        LOG.info(f"Already logged in - no login required")
        return True
    
    LOG.info("Checking login credentials")
    user, pw = os.getenv("PII_USERNAME"), os.getenv("PII_PASSWORD")
    if not (user and pw):
        LOG.error("✗ Login credentials not found!")
        LOG.error("Please set PII_USERNAME and PII_PASSWORD in .env file or environment variables")
        return False
    
    LOG.info(f"Credentials found for user: {user}")
    
    try:
        LOG.info("Entering login credentials")
        # Batch element finding
        u = drv.find_element(By.ID, "username")
        p = drv.find_element(By.ID, "tpass")
        s = drv.find_element(By.ID, "submit")
        
        u.clear()
        u.send_keys(user)
        p.clear()
        p.send_keys(pw)
        
        LOG.info("Submitting login form")
        s.click()
        
        LOG.info("Waiting for login to complete")
        WebDriverWait(drv, WAIT_SECS).until(
            EC.invisibility_of_element_located((By.ID, "loginTable"))
        )
        LOG.info("Login successful")
        return True
        
    except TimeoutException:
        LOG.error(f"✗ Login failed: Timeout waiting for login to complete")
        LOG.error("Possible causes:")
        LOG.error("  - Invalid credentials")
        LOG.error("  - Network connection issues")
        LOG.error("  - PII portal is down")
        return False
    except NoSuchElementException as e:
        LOG.error(f"✗ Login failed: Login form elements not found: {e}")
        LOG.error("Login page structure may have changed")
        return False
    except Exception as e:
        LOG.error(f"✗ Login failed: Unexpected error: {e}")
        return False

def find_doc_link_optimized(drv, order_id: str):
    """Optimized link search with better iframe handling."""
    xpath = f"//a[contains(text(), '{order_id}')]"
    
    # Check main content first
    try:
        link = drv.find_element(By.XPATH, xpath)
        LOG.info(f"Download link found in main content")
        return link
    except NoSuchElementException:
        pass
    
    # Check iframes only if needed
    iframes = drv.find_elements(By.TAG_NAME, "iframe")
    LOG.info(f"Checking {len(iframes)} iframes for download link")
    
    for i, iframe in enumerate(iframes):
        try:
            LOG.info(f"Checking iframe {i+1}/{len(iframes)}")
            drv.switch_to.frame(iframe)
            link = drv.find_element(By.XPATH, xpath)
            LOG.info(f"Download link found in iframe {i+1}")
            drv.switch_to.default_content()
            return link
        except (NoSuchElementException, StaleElementReferenceException):
            drv.switch_to.default_content()
            continue
    
    return None

# ─── main ───────────────────────────────────────────────────────────────────
def main():
    # Phase 1: Starting the script
    LOG.info("Starting PDF Downloader")
    LOG.info("=" * 120)
    LOG.info(f"Download directory: {DOWNLOAD_DIR}")
    LOG.info(f"Target folder: {TARGET_FOLDER_NAME}")
    LOG.info(f"Configuration: {LOG_PREFIX}")
    LOG.info("=" * 120)
    
    pythoncom.CoInitialize()
    drv = None
    
    try:
        # Phase 2: Accessing email
        LOG.info("Connecting to Outlook")
        try:
            outlook = win32com.client.Dispatch("Outlook.Application")
            ns = outlook.GetNamespace("MAPI")
            LOG.info("Success")
        except Exception as e:
            LOG.error("✗ Failed to connect to Outlook")
            LOG.error(f"Error: {e}")
            LOG.error("Possible causes:")
            LOG.error("  - Outlook is not installed")
            LOG.error("  - Outlook is not running")
            LOG.error("  - Insufficient permissions")
            LOG.error("  - Windows COM registration issues")
            return

        # Find target folder in primary mailbox only
        LOG.info(f"Searching for email folder '{TARGET_FOLDER_NAME}' in primary mailbox")
        try:
            default_store = ns.GetDefaultFolder(6).Parent
            LOG.info(f"Primary mailbox: {default_store.Name}")
            
            target = find_folder(default_store, TARGET_FOLDER_NAME)
            
            if not target:
                LOG.error(f"✗ Email folder '{TARGET_FOLDER_NAME}' not found in primary mailbox!")
                LOG.error("Possible causes:")
                LOG.error(f"  - Folder name '{TARGET_FOLDER_NAME}' is incorrect")
                LOG.error("  - Folder is in a subfolder")
                LOG.error("  - Folder is in a different mailbox/store")
                LOG.error(f"Available folders in primary mailbox '{default_store.Name}':")
                try:
                    for folder in default_store.Folders:
                        LOG.error(f"    - {folder.Name}")
                        # Also show subfolders one level deep
                        try:
                            for subfolder in folder.Folders:
                                LOG.error(f"      └─ {subfolder.Name}")
                        except:
                            pass
                except Exception as e:
                    LOG.error(f"    (Could not list folders: {e})")
                return
                
        except Exception as e:
            LOG.error(f"✗ Failed to access primary mailbox: {e}")
            LOG.error("Falling back to searching all available stores")
            
            # Fallback: search all stores if primary mailbox access fails
            target = None
            stores_checked = 0
            for store in ns.Folders:
                stores_checked += 1
                LOG.info(f"Checking store: {store.Name}")
                target = find_folder(store, TARGET_FOLDER_NAME)
                if target:
                    break
            
            if not target:
                LOG.error(f"✗ Email folder '{TARGET_FOLDER_NAME}' not found in any store!")
                LOG.error(f"Searched {stores_checked} email stores")
                return

        # Phase 3: Finding unread emails
        LOG.info(f"Searching for unread messages in '{target.Name}'")
        try:
            msgs = target.Items
            unread_filter = "[Unread] = true"
            unread_msgs = msgs.Restrict(unread_filter)
            unread_total = unread_msgs.Count
            stats.total_unread = unread_total
            
            LOG.info(f"Found || {unread_total} || unread messages")
        except Exception as e:
            LOG.error(f"✗ Failed to access unread messages: {e}")
            LOG.error("Possible causes:")
            LOG.error("  - Email folder permissions")
            LOG.error("  - Outlook connectivity issues")
            LOG.error("  - Corrupted mailbox")
            return

        if unread_total == 0:
            LOG.info("No unread messages found - nothing to process")
            stats.log_summary()
            return

        # CRITICAL: Convert to list immediately to avoid collection modification issues
        LOG.info("Collecting messages for processing")
        messages_to_process = []
        for i in range(unread_total, 0, -1):  # Process in reverse order
            try:
                msg = unread_msgs.Item(i)
                if msg.UnRead:
                    messages_to_process.append(msg)
            except Exception as e:
                LOG.warning(f"Failed to access message {i}: {e}")
                continue
        
        LOG.info(f"Collected || {len(messages_to_process)} || messages for processing")
        
        # Initialize web driver
        try:
            drv = build_firefox_driver(DOWNLOAD_DIR)
        except Exception as e:
            LOG.error("✗ Failed to initialize web browser - cannot continue")
            return
        
        # Process each message
        LOG.info("Starting message processing")
        for msg_num, m in enumerate(messages_to_process, 1):
            LOG.info(f"\n\n--- Processing message {msg_num}/{len(messages_to_process)} ---")
            try:
                # Mark as read first
                LOG.info("Marking message as read")
                m.UnRead = False
                m.Save()
                
                # Process the email
                if process_email(m, drv):
                    stats.successfully_processed += 1
                    
            except Exception as e:
                LOG.error(f"✗ Failed to process message {msg_num}: {e}")
                continue
        
        LOG.info("\nAll messages processed!")

    except Exception as e:
        LOG.error("✗ Fatal error occurred!")
        LOG.exception(f"Unexpected error: {e}")
    finally:
        if drv:
            try:
                LOG.info("Cleaning up web driver")
                drv.quit()
                LOG.info("Web driver closed\n\n\n")
            except Exception as e:
                LOG.warning(f"Warning during cleanup: {e}")
        
        try:
            pythoncom.CoUninitialize()
        except:
            pass
    
    # Phase 10: Final summary
    stats.log_summary()
    LOG.info("DOWNLOADER FINISHED!")

if __name__ == "__main__":
    main()