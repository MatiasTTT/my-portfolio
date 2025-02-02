import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolderPlus, FiFolderMinus, FiFile } from 'react-icons/fi';

const ProjectFolder = ({ project, isOpen, onToggle, onFileSelect }) => {
  return (
    <div className="bg-lightgray rounded-md p-2 cursor-pointer hover:bg-hoverovercolor transition-colors">
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={onToggle}
      >
        <div className="mr-2">
          {isOpen ? <FiFolderMinus /> : <FiFolderPlus />}
        </div>
        <span className="font-medium">{project.name}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 pl-6 space-y-1 overflow-hidden"
          >
            {project.files.map((file, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer hover:text-blue-400"
                onClick={() => onFileSelect(project, file)}
              >
                <FiFile className="mr-2" />
                <span>{file.name}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectFolder;
