import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markup'; // html
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import { FiExternalLink } from 'react-icons/fi';

export default function FileViewer({ file, project }) {
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
    const url = `/code/${project.baseDir}/${file}`;
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
    <div className="bg-lightgray rounded-md p-4 shadow-lg w-full overflow-hidden min-w-0">
      {/* header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{file}</h2>
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

      {/* code block */}
      <div className="overflow-auto max-h-[calc(100vh-150px)]">
        {language === 'none' ? (
          <pre>
            <code ref={codeRef}>{code}</code>
          </pre>
        ) : (
          <pre className={`language-${language}`}>
            <code ref={codeRef} className={`language-${language}`}>
              {code}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
