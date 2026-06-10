import React from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";

const Section3 = () => {
  return (
    <section className="min-h-screen bg-black px-8 py-20">

      <h1 className="text-5xl font-bold text-cyan-400 text-center">
        The Creations of the Codes
      </h1>

      <p className="text-gray-400 text-center mt-4">
        Turning ideas into real-world applications.
      </p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        }

      </div>

    </section>
  );
};

export default Section3;