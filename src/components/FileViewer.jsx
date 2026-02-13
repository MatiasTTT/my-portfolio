import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markup'; // html
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import { FiExternalLink, FiX } from 'react-icons/fi';

export default function FileViewer({ file, project, onClose }) {
  const [code, setCode] = useState('');
  const codeRef = useRef(null);

  // ========= helpers =========
  const ext = file.split('.').pop().toLowerCase();
  const language =
    { js: 'javascript', jsx: 'jsx', py: 'python', html: 'markup', css: 'css' }[
      ext
    ] || 'none';

  // ========= fetch the raw file when file/project changes =========
  useEffect(() => {
    if (!file || !project) return;
    const url = `${import.meta.env.BASE_URL}code/${project.baseDir}/${file}`;
    fetch(url)
      .then((r) => r.text())
      .then(setCode)
      .catch((e) =>
        setCode(`// failed to load ${url}\n// ${e.message || e.toString()}`)
      );
  }, [file, project]);

  // highlight when code or language changes
  useEffect(() => {
    if (codeRef.current && language !== 'none') {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  // ========= render =========
  return (
    <div className="pearl-panel w-full overflow-hidden min-w-0 p-4">
      {/* header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pb-3 border-b border-white/10">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-gray-100 truncate">{file}</h2>
          <p className="mt-1 text-xs text-gray-400 truncate">{project.name}</p>
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pearl-action inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md"
            >
              GitHub <FiExternalLink />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="pearl-action inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md"
            aria-label="Close file viewer"
          >
            Close <FiX />
          </button>
        </div>
      </div>

      {/* code block */}
      <div className="file-code-scroll mt-3 rounded-lg border border-white/10 bg-black/30 overflow-auto max-h-[calc(100vh-220px)]">
        {language === 'none' ? (
          <pre className="m-0 p-4 text-sm leading-6 text-gray-200">
            <code ref={codeRef}>{code}</code>
          </pre>
        ) : (
          <pre className={`language-${language} m-0 p-4 text-sm leading-6`}>
            <code ref={codeRef} className={`language-${language}`}>
              {code}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
