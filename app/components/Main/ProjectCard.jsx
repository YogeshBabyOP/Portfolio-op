"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ src, title, description, githubLink, demoLink }) => {
  return (
    <div className="relative w-full max-w-[350px] h-[420px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent flex flex-col">
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
              background: "linear-gradient(45deg,#f06595, #845ef7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h1>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>

        {/* Icon links */}
        <div className="flex items-center justify-center mt-4">
          {/* GitHub link */}
          <a
            href={githubLink}
            target="_blank"
            className="cursor-pointer relative z-10  text-white px-4 py-2 rounded  transition flex items-center justify-center"
          >
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>

          {/* Live site / demo link */}
          <a
            href={demoLink}
            target="_blank"
            className="cursor-pointer relative z-10  text-white px-4 py-2 rounded  transition flex items-center justify-center"
          >
            <FiExternalLink size={20} />
            <span className="sr-only">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
