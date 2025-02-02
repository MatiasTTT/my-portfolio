import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Import additional Prism languages/components as needed
import 'prismjs/components/prism-python';   // Python support
import 'prismjs/components/prism-markup';     // HTML support (Prism uses "markup" for HTML)
import 'prismjs/components/prism-css';        // CSS support
import 'prismjs/components/prism-jsx';        // JSX support

import { FiExternalLink } from 'react-icons/fi';

const FileViewer = ({ file, project }) => {
  const codeRef = useRef(null);

  // Determine the language based on the file extension.
  const getLanguage = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    switch (ext) {
      case 'js':
        return 'javascript';
      case 'jsx':
        return 'jsx';
      case 'py':
        return 'python';
      case 'html':
        return 'markup'; // Prism uses "markup" for HTML
      case 'css':
        return 'css';
      case 'txt':
        return 'none'; // No syntax highlighting for plain text
      default:
        return 'javascript'; // Fallback language
    }
  };

  const language = getLanguage(file.name);

  useEffect(() => {
    if (codeRef.current && language !== 'none') {
      Prism.highlightElement(codeRef.current);
    }
  }, [file, language]);

  return (
    // Outer container: Fixed styling without vertical scroll.
    <div className="bg-lightgray rounded-md p-4 shadow-lg w-full overflow-hidden min-w-0">
      {/* Header (always visible) */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{file.name}</h2>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:underline"
          >
            View on GitHub <FiExternalLink className="ml-1" />
          </a>
        )}
      </div>

      {/* Code container: Enables both vertical and horizontal scrolling. */}
      <div className="overflow-auto max-h-[calc(100vh-150px)]">
        {language === 'none' ? (
          // Render plain text without syntax highlighting classes.
          <pre className="max-w-full">
            <code ref={codeRef} className="whitespace-pre">
              {file.content}
            </code>
          </pre>
        ) : (
          <pre className={`language-${language} max-w-full`}>
            <code ref={codeRef} className={`language-${language} whitespace-pre`}>
              {file.content}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default FileViewer;
