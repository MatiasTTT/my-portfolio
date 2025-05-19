import React, { useState } from 'react';
import ProjectFolder from './ProjectFolder';

const Sidebar = ({ projects, onFileSelect }) => {
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleFolderToggle = (projectId) => {
    setOpenProjectId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>

      <div className="space-y-2">
        {projects.map((project) => (
          <ProjectFolder
            key={project.id}
            project={project}
            isOpen={openProjectId === project.id}
            onToggle={() => handleFolderToggle(project.id)}
            onFileSelect={onFileSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
