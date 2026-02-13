import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import FileViewer from './components/FileViewer';
import Profile from './components/Profile';
import Contact from './components/Contact';
import { projects } from './data/projects';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Callback when a file is selected from a project folder
  const handleFileSelect = (project, file) => {
    setSelectedProject(project);
    setSelectedFile(file);
  };

  const handleFileClose = () => {
    setSelectedFile(null);
    setSelectedProject(null);
  };

  return (
    <div className="black-pearl-bg min-h-screen flex flex-col md:flex-row gap-3 md:gap-4 p-3 md:p-4 text-gray-100">
      {/* Left Sidebar */}
      <aside className="md:w-1/3 lg:w-1/4 pearl-panel p-4 md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:self-start">
        <div className="md:h-full md:pr-1 flex flex-col gap-6">
          {/* Profile section at the top */}
          <Profile />

          {/* Project folders and socials with matching spacing */}
          <div className="flex-1 min-h-0 flex flex-col gap-6">
            <Sidebar projects={projects} onFileSelect={handleFileSelect} />
            <Contact />
          </div>
        </div>
      </aside>

      {/* Right Section - File Viewer */}
      <main className="flex-1 p-1 md:p-0 min-w-0">
        <div className="md:sticky md:top-4 md:h-[calc(100vh-2rem)]">
          {selectedFile ? (
            <FileViewer
              file={selectedFile}
              project={selectedProject}
              onClose={handleFileClose}
            />
          ) : (
            <div className="pearl-panel min-h-[320px] md:h-full flex items-center justify-center text-center p-6">
              <p className="text-lg text-gray-300">
                Please select a file from the project folder to view its contents.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;

