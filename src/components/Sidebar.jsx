import React, { useState } from 'react';
import ProjectFolder from './ProjectFolder';

const Sidebar = ({ projects, onFileSelect }) => {
  const [openProjectIds, setOpenProjectIds] = useState(new Set());
  const projectCount = projects.length;

  const handleFolderToggle = (projectId) => {
    setOpenProjectIds((prev) => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  };

  return (
    <div className="mt-6 pearl-subpanel p-3">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
        <h2 className="text-lg font-semibold tracking-wide text-gray-100">Projects</h2>
        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-white/10 border border-white/20 text-gray-100">
          {projectCount}
        </span>
      </div>

      <div className="project-scroll h-80 md:h-[26rem] overflow-y-auto pr-1.5 space-y-2">
        {projects.map((project) => (
          <ProjectFolder
            key={project.id}
            project={project}
            isOpen={openProjectIds.has(project.id)}
            onToggle={() => handleFolderToggle(project.id)}
            onFileSelect={onFileSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
