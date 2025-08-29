# file_tree_view_clean.py
# Requires: pip install rich

import msvcrt
import os
import sys
import tkinter as tk
from tkinter import filedialog
from typing import Iterable, Optional, Tuple

from rich.console import Console
from rich.text import Text
from rich.theme import Theme

# Folders to skip entirely (not shown, not traversed)
EXCLUDED_FOLDERS = {" ", " ", " ", " ",}

# File-type color mapping (extend as you like). Applied to the EXTENSION ONLY.
EXT_STYLE = {
    ".py": "#dbae5a",
    ".txt": "#b2c7e6",
    ".md": "#b2c7e6",
    ".csv": "#74af4d",
    ".xlsx": "#74af4d",
    ".xls": "#74af4d",
    ".xlsm": "#74af4d",
    ".json": "#dbae5a",
    ".yml": "#dbae5a",
    ".yaml": "#dbae5a",
    ".pdf": "#ce8787",
    ".png": "#917089",
    ".jpg": "#917089",
    ".jpeg": "#917089",
    ".gif": "#917089",
    ".zip": "#918161",
    ".7z": "#918161",
    ".rar": "#918161",
}

FOLDER_ICON = "📂"

theme = Theme(
    {
        "folder": "#ededed",
        "file": "#ededed",   # base filename (extension colored separately)
        "empty": "dim",
        "deny": "bold red",
        "rule": "dim",
    }
)

console = Console(theme=theme)

def choose_folder() -> Optional[str]:
    root = tk.Tk()
    root.withdraw()
    folder = filedialog.askdirectory(title="Select a Folder to Inspect")
    root.destroy()
    return os.path.normpath(folder) if folder else None

def partition_entries(path: str) -> Tuple[Iterable[os.DirEntry], Iterable[os.DirEntry]]:
    with os.scandir(path) as it:
        entries = [e for e in it]
    folders = [e for e in entries if e.is_dir(follow_symlinks=False) and e.name not in EXCLUDED_FOLDERS]
    files = [e for e in entries if not e.is_dir(follow_symlinks=False)]
    folders.sort(key=lambda e: e.name.lower())
    files.sort(key=lambda e: e.name.lower())
    return folders, files

def label_folder(name: str, *, empty: bool = False, deny: bool = False) -> Text:
    t = Text(f"{FOLDER_ICON} {name}", style="folder")
    if deny:
        t.append("  (permission denied)", style="deny")
    elif empty:
        t.append("  (empty)", style="empty")
    return t

def label_file(name: str) -> Text:
    stem, ext = os.path.splitext(name)
    t = Text(f"{stem}", style="file")
    if ext:
        t.append(ext, style=EXT_STYLE.get(ext.lower(), "file"))
    return t

def print_tree(path: str, prefix: str = "", is_last: bool = True, is_root: bool = False) -> None:
    """
    Recursively print a tree with correct guide bars and spacer rows that keep the vertical line.
    prefix: accumulated guides from ancestors (e.g., '│   ' or '    ')
    is_last: whether this node is the last child of its parent
    is_root: whether this node is the root (printed without connector)
    """
    basename = os.path.basename(path) or path

    # Look ahead to determine (empty) / permission
    try:
        folders, files = partition_entries(path)
        visibly_empty = (len(folders) == 0 and len(files) == 0)
        deny = False
    except PermissionError:
        folders, files, visibly_empty, deny = [], [], False, True
    except FileNotFoundError:
        folders, files, visibly_empty, deny = [], [], False, False

    # Print node line
    if is_root:
        console.print(label_folder(basename, empty=visibly_empty, deny=deny))
    else:
        connector = "└── " if is_last else "├── "
        console.print(prefix + connector, end="")
        console.print(label_folder(basename, empty=visibly_empty, deny=deny))

    if deny or visibly_empty:
        return

    # Child prefix for children of *this* node
    child_prefix = prefix + ("    " if is_last else "│   ")

    # 1) Folders
    for i, f in enumerate(folders):
        is_last_folder = (i == len(folders) - 1) and (len(files) == 0)
        print_tree(f.path, prefix=child_prefix, is_last=is_last_folder, is_root=False)

        # Spacer BETWEEN sibling folders — continuous guides at this level
        if i < len(folders) - 1:
            console.print(child_prefix + "│   ")

    # 2) Files
    if files:
        for j, file in enumerate(files):
            is_last_file = (j == len(files) - 1)
            connector = "└── " if is_last_file else "├── "
            console.print(child_prefix + connector, end="")
            console.print(label_file(file.name))

def main():
    console.print("\n[bold]Folder Tree Viewer[/bold]\n")
    folder = choose_folder()
    if not folder:
        console.print("No folder selected. Exiting.\n")
        sys.exit(0)
    console.rule(f"[rule]Structure for {folder}[/rule]")
    print_tree(folder, prefix="", is_last=True, is_root=True)
    console.rule()

if __name__ == "__main__":
    main()
    print("\nPress ESC to exit...")
    while True:
        key = msvcrt.getch()
        if key == b'\x1b':  # ESC key
            break