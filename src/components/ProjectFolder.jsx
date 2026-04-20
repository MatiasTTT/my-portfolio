import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolderPlus, FiFolderMinus, FiFile } from 'react-icons/fi';

/* ---------- helpers ---------- */
function isReadmeFile(path) {
  return path.split('/').pop().toLowerCase() === 'readme.txt';
}

function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
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
const Node = ({ name, node, pathSoFar, onSelect }) => {
  const [open, setOpen] = useState(false);
  const fullPath = pathSoFar ? `${pathSoFar}/${name}` : name;

  // file
  if (node._isFile) {
    return (
      <li
        className="group flex min-w-0 items-center rounded-md px-2 py-1.5 cursor-pointer text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        onClick={() => onSelect(fullPath)}
      >
        <FiFile className="mr-2 shrink-0 text-gray-400 group-hover:text-gray-100" />
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
          {open ? <FiFolderMinus /> : <FiFolderPlus />}
        </div>
        <span className="min-w-0 break-words text-sm font-medium">{name}</span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pl-4 mt-1 space-y-1 overflow-hidden border-l border-white/10"
          >
            {Object.entries(node).map(
              ([child, sub]) =>
                child !== '_isFile' && (
                  <Node
                    key={child}
                    name={child}
                    node={sub}
                    pathSoFar={fullPath}
                    onSelect={onSelect}
                  />
                )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
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
const ProjectFolder = ({ project, isOpen, onToggle, onFileSelect }) => {
  const visibleFiles = useMemo(
    () => project.files.filter((file) => !isReadmeFile(file)),
    [project.files]
  );
  const tree = useMemo(() => buildTree(visibleFiles), [visibleFiles]);
  const [summary, setSummary] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [hasLoadedSummary, setHasLoadedSummary] = useState(false);

  useEffect(() => {
    if (!isOpen || hasLoadedSummary) return undefined;

    let isCurrent = true;
    const readmeUrl = `${import.meta.env.BASE_URL}code/${encodePath(project.baseDir)}/README.txt`;

    setIsSummaryLoading(true);
    fetch(readmeUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${readmeUrl}`);
        return response.text();
      })
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
        onClick={onToggle}
      >
        <div className="mr-2 shrink-0 text-gray-400 group-hover:text-gray-100">
          {isOpen ? <FiFolderMinus /> : <FiFolderPlus />}
        </div>
        <span className="min-w-0 break-words font-semibold text-gray-100">{project.name}</span>
      </button>

      {/* tree */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ProjectSummary summary={summary} isLoading={isSummaryLoading} />
            <ul className="mb-2 px-3 pb-2 space-y-1 border-l-2 border-white/25 ml-3">
              {Object.entries(tree).map(([k, v]) => (
                <Node
                  key={k}
                  name={k}
                  node={v}
                  pathSoFar=""
                  onSelect={(filePath) => onFileSelect(project, filePath)}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectFolder;
