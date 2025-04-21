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
        className="flex items-center cursor-pointer hover:text-blue-400"
        onClick={() => onSelect(fullPath)}
      >
        <FiFile className="mr-2" />
        <span>{name}</span>
      </li>
    );
  }

  // folder
  return (
    <li>
      <div
        className="flex items-center cursor-pointer select-none hover:text-blue-400"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="mr-2">{open ? <FiFolderMinus /> : <FiFolderPlus />}</div>
        <span className="font-medium">{name}</span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pl-6 space-y-1 overflow-hidden"
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

/* ---------- top‑level wrapper ---------- */
const ProjectFolder = ({ project, isOpen, onToggle, onFileSelect }) => {
  const tree = useMemo(() => buildTree(project.files), [project.files]);

  return (
    <div className="bg-lightgray rounded-md p-2 transition-colors">
      {/* project header */}
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={onToggle}
      >
        <div className="mr-2">
          {isOpen ? <FiFolderMinus /> : <FiFolderPlus />}
        </div>
        <span className="font-medium">{project.name}</span>
      </div>

      {/* tree */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 pl-4 overflow-hidden space-y-1"
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
