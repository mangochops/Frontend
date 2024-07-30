import React from 'react';
import { Marquee } from 'magic-ui';
import { FaCar, FaCarAlt, FaCarSide } from 'react-icons/fa'; // Replace with actual car brand icons

const BannerSection = () => {
  return (
    <div className="banner-section bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-5">Welcome to Our Car Hire Service</h1>
      <Marquee>
        <div className="flex space-x-10">
          <FaCar className="text-4xl text-blue-500" />
          <FaCarAlt className="text-4xl text-red-500" />
          <FaCarSide className="text-4xl text-green-500" />
          {/* Add more car brand icons here */}
        </div>
      </Marquee>
    </div>
  );
};

export default BannerSection;
