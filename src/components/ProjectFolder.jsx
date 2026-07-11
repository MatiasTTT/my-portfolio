import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { loadCodeFile, preloadCodeFile } from '../codeFiles';
import { FileIcon, FolderMinusIcon, FolderPlusIcon } from './icons';

const collapseDurationMs = 180;

const Collapsible = ({ children, isOpen }) => {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    let frameId;
    let timeoutId;

    if (isOpen) {
      setIsMounted(true);
      frameId = requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      timeoutId = window.setTimeout(() => setIsMounted(false), collapseDurationMs);
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div className={`folder-reveal ${isVisible ? 'is-open' : ''}`}>
      <div className="folder-reveal__inner">{children}</div>
    </div>
  );
};

/* ---------- helpers ---------- */
function isReadmeFile(path) {
  return path.split('/').pop().toLowerCase() === 'readme.txt';
}

function buildTree(paths) {
  const root = {};
  paths.forEach((p) => {
    const parts = p.split('/');
    let cur = root;
    parts.forEach((part, idx) => {
      if (!cur[part]) cur[part] = {};
      if (idx === parts.length - 1) cur[part]._isFile = true;
      cur = cur[part];
    });
  });
  return root;
}

/* ---------- recursive item ---------- */
const Node = ({ name, node, pathSoFar, onPreload, onSelect }) => {
  const [open, setOpen] = useState(false);
  const fullPath = pathSoFar ? `${pathSoFar}/${name}` : name;

  // file
  if (node._isFile) {
    return (
      <li
        className="group flex min-w-0 items-center rounded-md px-2 py-1.5 cursor-pointer text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        onClick={() => onSelect(fullPath)}
        onPointerDown={() => onPreload(fullPath)}
        onPointerEnter={() => onPreload(fullPath)}
      >
        <FileIcon className="mr-2 shrink-0 text-gray-400 group-hover:text-gray-100" />
        <span className="min-w-0 break-words">{name}</span>
      </li>
    );
  }

  // folder
  return (
    <li>
      <div
        className="group flex min-w-0 items-center rounded-md px-2 py-1.5 cursor-pointer select-none text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="mr-2 shrink-0 text-gray-400 group-hover:text-gray-100">
          {open ? <FolderMinusIcon /> : <FolderPlusIcon />}
        </div>
        <span className="min-w-0 break-words text-sm font-medium">{name}</span>
      </div>

      <Collapsible isOpen={open}>
        <ul className="pl-4 mt-1 space-y-1 border-l border-white/10">
          {Object.entries(node).map(
            ([child, sub]) =>
              child !== '_isFile' && (
                <Node
                  key={child}
                  name={child}
                  node={sub}
                  pathSoFar={fullPath}
                  onPreload={onPreload}
                  onSelect={onSelect}
                />
              )
          )}
        </ul>
      </Collapsible>
    </li>
  );
};

const ProjectSummary = ({ summary, isLoading }) => {
  if (!isLoading && !summary) return null;

  return (
    <div className="mx-3 mb-2 rounded-md border border-white/10 bg-black/20 px-3 py-2.5 shadow-inner">
      <p className="mb-1 text-xs font-semibold text-gray-200">Project overview</p>
      <p className="project-scroll max-h-36 overflow-y-auto pr-1 text-sm leading-relaxed text-gray-300 whitespace-pre-line break-words sm:max-h-32">
        {isLoading ? 'Loading project overview...' : summary}
      </p>
    </div>
  );
};

/* ---------- top-level wrapper ---------- */
const ProjectFolder = ({ project, isOpen, onToggle, onFilePreload, onFileSelect }) => {
  const visibleFiles = useMemo(
    () => project.files.filter((file) => !isReadmeFile(file)),
    [project.files]
  );
  const tree = useMemo(() => buildTree(visibleFiles), [visibleFiles]);
  const [summary, setSummary] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [hasLoadedSummary, setHasLoadedSummary] = useState(false);
  const handleFileSelect = useCallback(
    (filePath) => onFileSelect(project, filePath),
    [onFileSelect, project]
  );
  const handleFilePreload = useCallback(
    (filePath) => onFilePreload(project, filePath),
    [onFilePreload, project]
  );
  const handleSummaryPreload = useCallback(
    () => preloadCodeFile(project, 'README.txt'),
    [project]
  );

  useEffect(() => {
    if (!isOpen || hasLoadedSummary) return undefined;

    let isCurrent = true;
    setIsSummaryLoading(true);
    loadCodeFile(project, 'README.txt')
      .then((text) => {
        if (isCurrent) setSummary(text.trim());
      })
      .catch(() => {
        if (isCurrent) setSummary('');
      })
      .finally(() => {
        if (isCurrent) {
          setHasLoadedSummary(true);
          setIsSummaryLoading(false);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [hasLoadedSummary, isOpen, project.baseDir]);

  return (
    <div
      className={`group rounded-lg border transition-colors ${
        isOpen
          ? 'border-white/30 bg-white/10'
          : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      {/* project header */}
      <button
        type="button"
        className="w-full flex min-w-0 items-center cursor-pointer select-none px-3 py-2 text-left"
        onClick={() => onToggle(project.id)}
        onFocus={handleSummaryPreload}
        onPointerDown={handleSummaryPreload}
        onPointerEnter={handleSummaryPreload}
        aria-expanded={isOpen}
      >
        <div className="mr-2 shrink-0 text-gray-400 group-hover:text-gray-100">
          {isOpen ? <FolderMinusIcon /> : <FolderPlusIcon />}
        </div>
        <span className="min-w-0 break-words font-semibold text-gray-100">{project.name}</span>
      </button>

      <Collapsible isOpen={isOpen}>
        <ProjectSummary summary={summary} isLoading={isSummaryLoading} />
        <ul className="mb-2 px-3 pb-2 space-y-1 border-l-2 border-white/25 ml-3">
          {Object.entries(tree).map(([k, v]) => (
            <Node
              key={k}
              name={k}
              node={v}
              pathSoFar=""
              onPreload={handleFilePreload}
              onSelect={handleFileSelect}
            />
          ))}
        </ul>
      </Collapsible>
    </div>
  );
};

export default memo(ProjectFolder);
