"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-10">
        <ProjectCard
          src="/images/confetti.png"
          title="Confetti Game"
          description="An interactive website with playful confetti animations for a joyful and engaging experience.🎊✨"
          githubLink="https://github.com/YogeshBabyOP/Confettii"
          demoLink="https://confettii-op.vercel.app/"
        />
        <ProjectCard
          src="/images/affh.png"
          title="Apes Far From Home"
          description="An adventurous and immersive project featuring apes on a wild journey beyond their home! 🛸🐒"
          githubLink="https://github.com/YogeshBabyOP"
          demoLink="http://www.apesfarfromhome.com/"
        />

        <ProjectCard
          src="/images/aroma3.png"
          title="Aroma Alike"
          description="Find fragrances that match your favorites perfumes and explore the new aromas effortlessly! 🔥🍾"
          githubLink="https://github.com/YogeshBabyOP/aromaalike"
          demoLink="https://aromaalike.vercel.app/"
        />

        <ProjectCard
          src="/images/portyogesh.png"
          title="3D Portfolio"
          description="An interactive 3D portfolio showcasing web development skills. Experience creativity in motion! 👨‍💻 🔯"
          githubLink="https://github.com/YogeshBabyOP/Yogesh_Portfolio"
          demoLink="https://yogeshportfolioop.netlify.app/"
        />

        <ProjectCard
          src="/images/todo.png"
          title="Task Manager"
          description="A simple task manager to stay organized and boost productivity! 🚀🤪"
          githubLink="https://github.com/YogeshBabyOP/Todo-App"
          demoLink="https://github.com/YogeshBabyOP"
        />

        <ProjectCard
          src="/images/sync.png"
          title="Sync The Tunes"
          description="Create or join synced music rooms! 🎧 The host controls the vibe! 💃🎵"
          githubLink="https://github.com/YogeshBabyOP/Musicc"
          demoLink="https://github.com/YogeshBabyOP"
        />
      </div>
    </div>
  );
};

export default Projects;
