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

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="md:w-1/3 lg:w-1/4 border-r border-gray-700 p-4 flex flex-col justify-between min-h-screen">
        {/* Profile section at the top */}
        <Profile />

        {/* Project folders and socials pushed further toward the bottom */}
        <div className="pt-8">
          <Sidebar projects={projects} onFileSelect={handleFileSelect} />
          <Contact />
        </div>
      </aside>

      {/* Right Section - File Viewer */}
      <main className="flex-1 p-4 relative min-w-0">
        {selectedFile ? (
          <FileViewer file={selectedFile} project={selectedProject} />
        ) : (
          <div className="h-full flex items-center justify-center text-center">
            <p className="text-lg text-gray-500">
              Select a file from a project folder to view its content.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
