import React, { useCallback, useMemo, useState } from 'react';
import ProjectFolder from './ProjectFolder';

const Sidebar = ({ projects, onFileSelect, className = '' }) => {
  const [openProjectIds, setOpenProjectIds] = useState(new Set());
  const projectCount = projects.length;
  const projectGroups = useMemo(() => {
    const sortedProjects = [...projects].sort((a, b) => {
      const yearA = Number(a.createdYear) || 0;
      const yearB = Number(b.createdYear) || 0;
      const monthA = Number(a.createdMonth) || 0;
      const monthB = Number(b.createdMonth) || 0;
      return yearB - yearA || monthB - monthA || a.id - b.id;
    });

    return sortedProjects.reduce((groups, project) => {
      const key = project.createdYear ? String(project.createdYear) : 'unknown';
      const label = project.createdYear
        ? `Created in ${project.createdYear}:`
        : 'Creation year pending:';
      const lastGroup = groups[groups.length - 1];

      if (!lastGroup || lastGroup.key !== key) {
        groups.push({ key, label, projects: [] });
      }

      groups[groups.length - 1].projects.push(project);
      return groups;
    }, []);
  }, [projects]);

  const handleFolderToggle = useCallback((projectId) => {
    setOpenProjectIds((prev) => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  }, []);

  return (
    <div
      className={`pearl-subpanel p-3 h-[20rem] md:h-[clamp(18rem,42vh,26rem)] flex flex-col min-h-0 ${className}`}
    >
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
        <h2 className="text-lg font-semibold tracking-wide text-gray-100">My projects</h2>
        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-white/10 border border-white/20 text-gray-100">
          {projectCount}
        </span>
      </div>

      <div className="project-scroll flex-1 min-h-0 overflow-y-auto pr-1.5 space-y-3">
        {projectGroups.map((group) => (
          <section key={group.key} className="space-y-2">
            <div className="flex justify-start px-1">
              <span className="text-xs font-semibold leading-5 text-gray-300">
                {group.label}
              </span>
            </div>
            {group.projects.map((project) => (
              <ProjectFolder
                key={project.id}
                project={project}
                isOpen={openProjectIds.has(project.id)}
                onToggle={handleFolderToggle}
                onFileSelect={onFileSelect}
              />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
