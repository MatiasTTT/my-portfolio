import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolderPlus, FiFolderMinus, FiFile } from 'react-icons/fi';

/* ---------- helpers ---------- */
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
        className="group flex items-center rounded-md px-2 py-1.5 cursor-pointer text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        onClick={() => onSelect(fullPath)}
      >
        <FiFile className="mr-2 text-gray-400 group-hover:text-gray-100" />
        <span>{name}</span>
      </li>
    );
  }

  // folder
  return (
    <li>
      <div
        className="group flex items-center rounded-md px-2 py-1.5 cursor-pointer select-none text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="mr-2 text-gray-400 group-hover:text-gray-100">
          {open ? <FiFolderMinus /> : <FiFolderPlus />}
        </div>
        <span className="text-sm font-medium">{name}</span>
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

/* ---------- top-level wrapper ---------- */
const ProjectFolder = ({ project, isOpen, onToggle, onFileSelect }) => {
  const tree = useMemo(() => buildTree(project.files), [project.files]);

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
        className="w-full flex items-center cursor-pointer select-none px-3 py-2 text-left"
        onClick={onToggle}
      >
        <div className="mr-2 text-gray-400 group-hover:text-gray-100">
          {isOpen ? <FiFolderMinus /> : <FiFolderPlus />}
        </div>
        <span className="font-semibold text-gray-100">{project.name}</span>
      </button>

      {/* tree */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-2 px-3 pb-2 overflow-hidden space-y-1 border-l-2 border-white/25 ml-3"
          >
            {Object.entries(tree).map(([k, v]) => (
              <Node
                key={k}
                name={k}
                node={v}
                pathSoFar=""
                onSelect={(filePath) => onFileSelect(project, filePath)}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectFolder;
