import React from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with your profile image

const Profile = () => {
  return (
    <div className="mb-8 text-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-[70%] mx-auto object-contain rounded-lg" // 70% width, preserves aspect ratio, and rounded corners
      />
      <h1 className="mt-4 text-xl font-bold">Matias Turpeinen</h1>
      <p className="text-gray-300 mt-2">
      I'm an AI enthusiast with a strong interest in Language Models and their potential, along with a basic understanding of coding. This self-made portfolio page showcases my AI-assisted coding projects, built through curiosity, learning, and plenty of trial and error.
      </p>
      {/* Additional about text can go here */}
    </div>
  );
};

export default Profile;
