import React from 'react';

const Contact = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-lg font-semibold mb-4">Connect with Me</h2>
      <div className="flex justify-center space-x-4">
        <a href="mailto:matias.tyot@gmail.com" className="hover:text-blue-400">
          Email
        </a>
        <a href="https://www.linkedin.com/in/matias-turpeinen-85a20a1b6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          LinkedIn
        </a>
        <a href="https://github.com/MatiasTTT" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
