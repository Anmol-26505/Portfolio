import { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/60 dark:bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 shadow-2xl text-stone-900 dark:text-zinc-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 border border-orange-200/70 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 font-mono text-xs uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-stone-400 dark:text-zinc-500">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-stone-600 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes size={15} />
          </button>
        </div>

        {/* Title & Tagline */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-medium text-orange-600 dark:text-orange-400 mt-1">
            {project.tagline}
          </p>
          <p className="text-stone-600 dark:text-zinc-400 text-sm mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Complexity Profile */}
        {project.complexity && (
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-800 dark:text-zinc-200 font-semibold mb-2">
              <TbBinaryTree className="text-orange-600 dark:text-orange-400 text-base" />
              <span>Computational Complexity Profile</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-white dark:bg-zinc-950 p-2.5 rounded-lg border border-stone-200/60 dark:border-zinc-800">
                <span className="text-stone-400 dark:text-zinc-500 block text-[10px] uppercase">Time Complexity</span>
                <span className="text-stone-800 dark:text-zinc-200 font-medium">{project.complexity.time}</span>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-2.5 rounded-lg border border-stone-200/60 dark:border-zinc-800">
                <span className="text-stone-400 dark:text-zinc-500 block text-[10px] uppercase">Space Complexity</span>
                <span className="text-stone-800 dark:text-zinc-200 font-medium">{project.complexity.space}</span>
              </div>
            </div>
          </div>
        )}

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-mono text-stone-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                System Architecture Overview
              </h4>
              <p className="text-stone-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed bg-stone-50 dark:bg-zinc-900 p-3.5 rounded-xl border border-stone-200/70 dark:border-zinc-800">
                {project.architecture.overview}
              </p>
            </div>

            {/* Core Subsystems */}
            <div>
              <h4 className="text-xs font-mono text-stone-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Core Subsystems & Implementation
              </h4>
              <div className="space-y-1.5">
                {project.architecture.components.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-zinc-300">
                    <FaCheckCircle className="text-emerald-500 text-xs mt-1 flex-shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Metrics */}
            {project.architecture.metrics && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {project.architecture.metrics.map((m, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-stone-50 dark:bg-zinc-900 border border-stone-200/70 dark:border-zinc-800">
                    <span className="block text-base sm:text-xl font-bold font-mono text-stone-900 dark:text-white">
                      {m.value}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-stone-500 dark:text-zinc-400 uppercase mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div>
          <h4 className="text-xs font-mono text-stone-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-stone-800 dark:text-zinc-200 text-xs font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-end gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 dark:bg-zinc-900 hover:bg-stone-200 dark:hover:bg-zinc-800 text-stone-800 dark:text-zinc-200 text-xs font-medium transition-colors"
            >
              <FaGithub size={14} />
              <span>View Source Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-colors shadow-xs"
            >
              <FaExternalLinkAlt size={12} />
              <span>Launch Live App</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
