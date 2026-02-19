import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import FileViewer from './components/FileViewer';
import Profile from './components/Profile';
import { projects } from './data/projects';
import emailIcon from './assets/email.svg';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';

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
      <aside className="md:w-1/3 lg:w-1/4 pearl-panel p-4 md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:self-start md:overflow-y-auto">
        <Profile />
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
            <div className="pearl-panel min-h-[320px] md:h-full p-4 md:p-5">
              <div className="h-full flex flex-col gap-4 md:gap-5">
                <div className="text-center flex justify-center">
                  <p className="text-base md:text-lg text-gray-300">
                    Please select a file from the project folder to view its contents.
                  </p>
                </div>

                <div className="flex-1 min-h-0 flex flex-col gap-3 md:gap-4">
                  <Sidebar
                    projects={projects}
                    onFileSelect={handleFileSelect}
                    className="h-[20rem] md:flex-1 md:h-full"
                  />
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-300 whitespace-nowrap">
                    <span className="font-semibold text-[1.15rem]">Connect with me</span>
                    <a
                      href="mailto:matias.tyot@gmail.com"
                      className="opacity-90 hover:opacity-100 transition-opacity"
                      aria-label="Email"
                    >
                      <img src={emailIcon} alt="" className="w-5 h-5 md:w-6 md:h-6 scale-[1.08]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matias-turpeinen-85a20a1b6/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-90 hover:opacity-100 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <img src={linkedinIcon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a
                      href="https://github.com/MatiasTTT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-90 hover:opacity-100 transition-opacity"
                      aria-label="GitHub"
                    >
                      <img src={githubIcon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
