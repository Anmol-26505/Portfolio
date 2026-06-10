import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 hover:scale-105 duration-300">
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-fit"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {
            project.tech.map((item, index) => (
              <span
                key={index}
                className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))
          }
        </div>

        <div className="flex gap-4 mt-5">
          <a
            href={project.github}
            className="text-white hover:text-cyan-400"
          >
            GitHub
          </a>

         
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;