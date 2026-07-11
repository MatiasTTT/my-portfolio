import React, { memo } from 'react';
import profile384Avif from '../assets/profile-384.avif';
import profile384Jpg from '../assets/profile-384.jpg';
import profile384Webp from '../assets/profile-384.webp';
import profile768Avif from '../assets/profile-768.avif';
import profile768Jpg from '../assets/profile-768.jpg';
import profile768Webp from '../assets/profile-768.webp';

const profileSizes = '(min-width: 1024px) 18vw, (min-width: 768px) 23vw, 70vw';

const Profile = () => {
  return (
    <div className="text-center">
      <picture>
        <source
          srcSet={`${profile384Avif} 384w, ${profile768Avif} 768w`}
          sizes={profileSizes}
          type="image/avif"
        />
        <source
          srcSet={`${profile384Webp} 384w, ${profile768Webp} 768w`}
          sizes={profileSizes}
          type="image/webp"
        />
        <img
          src={profile768Jpg}
          srcSet={`${profile384Jpg} 384w, ${profile768Jpg} 768w`}
          sizes={profileSizes}
          alt="Profile"
          width="768"
          height="960"
          decoding="async"
          fetchpriority="high"
          className="w-[70%] h-auto mx-auto object-contain rounded-lg border border-white/15 shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
        />
      </picture>
      <h1 className="mt-4 text-xl font-bold tracking-wide text-gray-100">Matias Turpeinen</h1>
      <p className="text-gray-300 mt-2">
      I'm an AI enthusiast with a strong interest in Language Models and their potential, along with a basic understanding of programming. This self-made portfolio page showcases my AI-assisted coding projects, built through curiosity, learning, and plenty of trial and error.
      </p>
    </div>
  );
};

export default memo(Profile);
