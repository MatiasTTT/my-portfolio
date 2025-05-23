// src/data/projects.js
// A light‑weight catalogue: real source sits in /public/code/<baseDir>/…
export const projects = [
	{
	  id: 1,
	  name: 'PDF Data Extractor',
	  baseDir: 'PDF_to_Excel',
	  githubUrl:
		'https://github.com/MatiasTTT/My-projects/tree/main/PDF_to_Excel',
	  files: ['README.txt', 'gui.py', 'logic.py', 'main.py', 'phase1.py', 'phase2.py',],
	},
	{
	  id: 2,
	  name: 'Simple HTML Website',
	  baseDir: 'Website',
	  githubUrl: 'https://github.com/MatiasTTT/My-projects/tree/main/Website',
	  files: [
		'README.txt',
		'about.html',
		'blog.html',
		'contact.html',
		'index.html',
		'services.html',
		'style.css',
	  ],
	},
	{
	  id: 3,
	  name: 'This portfolio website',
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
	// ➜ Add new projects by dropping a folder in /public/code/
	//     and listing its files here.
  ];
  