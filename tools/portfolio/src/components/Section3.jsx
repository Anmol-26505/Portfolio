import { useState } from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { playClick } from "../utils/sound";

const projectCategories = ["All", "Web Applications", "Systems & DSA"];

const Section3 = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleInspect = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="bg-[#050505] px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2.5">
              <span>03 // Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Creations & Systems
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              Production apps, systems logic, and web applications engineered with clean component architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  playClick();
                  setActiveCategory(category);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Responsive Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={handleInspect}
            />
          ))}
        </div>
      </div>

      {/* Deep-Dive Architecture Case Study Modal */}
      <ProjectDetailModal
        project={modalProject}
        isOpen={Boolean(modalProject)}
        onClose={closeModal}
      />
    </section>
  );
};

export default Section3;