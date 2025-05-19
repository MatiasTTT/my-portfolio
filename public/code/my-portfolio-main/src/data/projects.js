// src/data/projects.js
// A light‑weight catalogue: real source sits in /public/code/<baseDir>/…
export const projects = [
	{
	  id: 1,
	  name: 'PDF_to_Excel',
	  baseDir: 'PDF_to_Excel', // folder under /public/code/
	  githubUrl:
		'https://github.com/MatiasTTT/My-projects/tree/main/PDF_to_Excel',
	  files: ['gui.py', 'logic.py', 'main.py', 'phase1.py', 'phase2.py'],
	},
	{
	  id: 2,
	  name: 'Website',
	  baseDir: 'Website', // exact folder name
	  githubUrl: 'https://github.com/MatiasTTT/My-projects/tree/main/Website',
	  files: [
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
		'index.html',
		'package.json',
		'package-lock.json',
		'postcss.config.js',
		'tailwind.config.js',
		'vite.config.js',
		'src/App.jsx',
		'src/index.css',
		'src/main.jsx',
		// images are binary, so skip profile.jpg for now
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
  