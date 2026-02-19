import React from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with your profile image

const Profile = () => {
  return (
    <div className="text-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-[70%] mx-auto object-contain rounded-lg border border-white/15 shadow-[0_10px_24px_rgba(0,0,0,0.35)]" // 70% width, preserves aspect ratio, and rounded corners
      />
      <h1 className="mt-4 text-xl font-bold tracking-wide text-gray-100">Matias Turpeinen</h1>
      <p className="text-gray-300 mt-2">
      I'm an AI enthusiast with a strong interest in Language Models and their potential, along with a basic understanding of programming. This self-made portfolio page showcases my AI-assisted coding projects, built through curiosity, learning, and plenty of trial and error.
      </p>
      {/* Additional about text can go here */}
    </div>
  );
};

export default Profile;

