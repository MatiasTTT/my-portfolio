// src/data/projects.js
// A light‑weight catalogue: real source sits in /public/code/<baseDir>/…
export const projects = [
	{
	  id: 1,
	  name: 'Simple Order Ledger',
	  baseDir: 'Order_ledger',
	  githubUrl:
		'https://github.com/MatiasTTT/Simple-Order-Ledger/tree/main/Order_ledger',
	  files: [
		'README.txt',
		'gui.py',
		'logic.py',
		'main.py',
		'phase1.py',
		'phase2.py',
		'updates/2025/README.txt',
		'updates/2025/updated_extraction_logic.py',
	  ],
	},
	{
	  id: 2,
	  name: 'PDF Data Extractor',
	  baseDir: 'PDF_data_extractor',
	  githubUrl:
		'https://github.com/MatiasTTT/PDF-Data-Extractor/tree/main/PDF_data_extractor',
	  files: [
		'README.txt',
		'PDF_Data_Extractor.py',
	  ],
	},
	{
	  id: 3,
	  name: 'Simple HTML Website',
	  baseDir: 'Simple_Website',
	  githubUrl: 'https://github.com/MatiasTTT/Simple-HTML-Website/tree/main/Simple_Website',
	  files: [
		'README.txt',
		'about.html',
		'blog.html',
		'contact.html',
		'index.html',
		'Sservices.html',
		'style.css',
	  ],
	},
	{
	  id: 4,
	  name: 'My Personal Portfolio Website',
	  baseDir: 'my-portfolio-main',
	  githubUrl: 'https://github.com/MatiasTTT/my-portfolio',
	  files: [
		'README.txt',
		'index.html',
		'package.json',
		'package-lock.json',
		'postcss.config.js',
		'tailwind.config.js',
		'vite.config.js',
		'src/App.jsx',
		'src/index.css',
		'src/main.jsx',
		'src/components/Contact.jsx',
		'src/components/FileViewer.jsx',
		'src/components/Profile.jsx',
		'src/components/ProjectFolder.jsx',
		'src/components/Sidebar.jsx',
		'src/data/projects.js',
	  ],
	},
	{
	  id: 5,
	  name: 'Email Workflow Automation Tool',
	  baseDir: 'Email_PDF_automation',
	  githubUrl: 'https://github.com/MatiasTTT/Email-Workflow-Automation-Tool/tree/main/Email_PDF_automation',
	  files: [
		'README.txt',
		'OutlookTool1.py',
	  ],
	},
	{
	  id: 6,
	  name: 'PDF Attachment Downloader',
	  baseDir: 'PDF_attachment_downloader',
	  githubUrl: 'https://github.com/MatiasTTT/PDF-Attachment-Downloader/tree/main/PDF_attachment_downloader',
	  files: [
		'README.txt',
		'OutlookTool2.py',
	  ],
	},
	{
	  id: 7,
	  name: 'Simple file viewer',
	  baseDir: 'File_viewer',
	  githubUrl: 'https://github.com/MatiasTTT/Simple-file-viewer/tree/main/File_viewer',
	  files: [
		'README.txt',
		'FileViewer.py',
	  ],
	},
	// ➜ Add new projects by dropping a folder in /public/code/
	//     and listing its files here.
  ];
  