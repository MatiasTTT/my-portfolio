import React, { useEffect, useMemo, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import { loadCodeFile } from '../codeFiles';
import { CloseIcon, ExternalLinkIcon } from './icons';

const languagesByExtension = {
  css: 'css',
  html: 'markup',
  js: 'javascript',
  jsx: 'jsx',
  py: 'python',
};

export default function FileViewer({ file, project, onClose }) {
  const [code, setCode] = useState('');
  const [highlightedCode, setHighlightedCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const ext = file.split('.').pop().toLowerCase();
  const language = languagesByExtension[ext] || 'none';

  useEffect(() => {
    let isCurrent = true;

    loadCodeFile(project, file)
      .then((text) => {
        if (isCurrent) setCode(text);
      })
      .catch((error) => {
        if (isCurrent) {
          setCode(`// failed to load file\n// ${error.message || error.toString()}`);
        }
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [file, project]);

  const grammar = useMemo(() => Prism.languages[language], [language]);

  useEffect(() => {
    if (!grammar || !code) {
      setHighlightedCode('');
      return undefined;
    }

    const highlight = () => {
      setHighlightedCode(Prism.highlight(code, grammar, language));
    };

    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(highlight, { timeout: 100 });
      return () => window.cancelIdleCallback(idleCallbackId);
    }

    const timeoutId = window.setTimeout(highlight, 0);
    return () => window.clearTimeout(timeoutId);
  }, [code, grammar, language]);

  const displayedCode = useMemo(() => {
    if (isLoading) return 'Loading file...';
    return code;
  }, [code, isLoading]);

  const highlightedMarkup = grammar && highlightedCode ? highlightedCode : null;

  return (
    <div className="pearl-panel w-full h-full overflow-hidden min-w-0 p-4 flex flex-col">
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
              GitHub <ExternalLinkIcon />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="pearl-action inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md"
            aria-label="Close file viewer"
          >
            Close <CloseIcon />
          </button>
        </div>
      </div>

      {/* code block */}
      <div className="file-code-scroll mt-3 rounded-lg border border-white/10 bg-black/30 overflow-auto flex-1 min-h-0">
        {language === 'none' ? (
          <pre className="m-0 p-4 text-base leading-6 text-gray-200">
            <code>{displayedCode}</code>
          </pre>
        ) : (
          <pre className={`language-${language} m-0 p-4 text-base leading-6`}>
            {highlightedMarkup ? (
              <code
                className={`language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlightedMarkup }}
              />
            ) : (
              <code className={`language-${language}`}>{displayedCode}</code>
            )}
          </pre>
        )}
      </div>
    </div>
  );
}

