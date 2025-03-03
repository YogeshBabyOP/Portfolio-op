"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mb-3 sm:mb-0 justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        <FaGithub className="mr-2" />
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mb-3 sm:mb-0 justify-center bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        <FaLinkedin className="mr-2" />
        LinkedIn
      </a>

      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        <FaTwitter className="mr-2" />
        Twitter
      </a>
    </div>
  );
};

export default SocialLinks;
