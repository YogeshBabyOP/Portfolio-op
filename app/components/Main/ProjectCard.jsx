"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ src, title, description, githubLink, demoLink }) => {
  return (
    <div className="neon-container">
      <div className="inner-card relative w-full max-w-[350px] h-[420px] overflow-hidden rounded-lg shadow-lg flex flex-col">
        {/* Top: Image section */}
        <div className="relative w-full h-[200px] bg-[#1F1F2E]">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Bottom: Text & icons */}
        <div className="flex flex-col justify-between flex-1 p-4">
          <div>
            <h1
              className="text-xl font-semibold"
              style={{
                background: "linear-gradient(45deg,  #f06595, #845ef7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h1>
            <p className="text-gray-300 mt-2 text-[17px] py-4">{description}</p>
          </div>

          {/* Icon links */}
          <div className="flex items-center justify-center mt-4">
            {/* GitHub link */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer relative z-10 text-white px-4 py-2 rounded transition flex items-center justify-center"
            >
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </a>

            {/* Live site / demo link */}
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer relative z-10 text-white px-4 py-2 rounded transition flex items-center justify-center"
            >
              <FiExternalLink size={20} />
              <span className="sr-only">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Outer neon container for the border */
        .neon-container {
          display: inline-block;
          padding: 2px; /* Thickness of the neon border */
          border-radius: 0.5rem; /* Matches inner card's rounded corners */
           background: linear-gradient(
            45deg,
            #00ff00,  /* Green */
            #9b59b6,  /* Purple */
            #ffcc99   /* Light Peach (as "leach") */
          );
          background-size: 400% 400%;
          animation: neonBorderAnimation 3s linear infinite;
        }
        /* Animation for the neon border */
        @keyframes neonBorderAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        /* Inner card background to cover the neon inside area */
        .inner-card {
          background: #111;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
