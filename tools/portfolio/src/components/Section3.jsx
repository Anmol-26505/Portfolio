import { useState } from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { FaCodeBranch } from "react-icons/fa";

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
    <section className="bg-stone-50/70 dark:bg-zinc-950/60 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-t border-stone-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 text-xs font-mono uppercase tracking-wider mb-3">
              <span>01 // Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-stone-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Production web applications, systems logic, and platforms engineered with performance, clean code, and thoughtful UX.
            </p>
          </div>

          {/* Filter Pills & Interactive Hint */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                    activeCategory === category
                      ? "bg-stone-900 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs"
                      : "bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-400 dark:text-zinc-500">
              <FaCodeBranch className="text-orange-500 text-xs" />
              <span>Toggle "Specs" on any card to view architecture dataflow</span>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={handleInspect}
            />
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectDetailModal
        project={modalProject}
        isOpen={Boolean(modalProject)}
        onClose={closeModal}
      />
    </section>
  );
};

export default Section3;