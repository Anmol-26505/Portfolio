import { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCheckCircle, FaChartLine } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { playChirp, playClick } from "../utils/sound";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      playChirp();
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl text-zinc-100 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Status and Close Button */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              ID // 0{project.id} • {project.year}
            </span>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Header Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-mono text-cyan-400 mt-1">
            {project.tagline}
          </p>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Benchmarks Strip if available */}
        {project.architecture?.metrics && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            {project.architecture.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-lg sm:text-xl font-bold font-mono text-white">
                  {m.value}
                </p>
                <p className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Algorithmic Complexity Specification */}
        {project.complexity && (
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/25 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <TbBinaryTree size={16} />
              <span>Computational Complexity Profile</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-black/40 p-2.5 rounded-lg border border-cyan-500/20">
                <span className="text-zinc-400">Time Complexity: </span>
                <span className="text-cyan-300 font-semibold">{project.complexity.time}</span>
              </div>
              <div className="bg-black/40 p-2.5 rounded-lg border border-cyan-500/20">
                <span className="text-zinc-400">Space Complexity: </span>
                <span className="text-cyan-300 font-semibold">{project.complexity.space}</span>
              </div>
            </div>
          </div>
        )}

        {/* Architecture Overview */}
        {project.architecture && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 mb-2">
                <FaLayerGroup className="text-cyan-400" />
                <span>System Architecture & Pipeline</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/60">
                {project.architecture.overview}
              </p>
            </div>

            {/* Subsystems */}
            {project.architecture.components && (
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">
                  Key Subsystems
                </h4>
                <div className="space-y-1.5">
                  {project.architecture.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono"
                    >
                      <span className="text-cyan-400 font-bold mt-0.5">▸</span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Challenges Solved */}
            {project.architecture.engineeringChallenges && (
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">
                  Engineering Breakthroughs & Trade-offs
                </h4>
                <div className="space-y-2">
                  {project.architecture.engineeringChallenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-3 rounded-lg border border-zinc-900"
                    >
                      <FaCheckCircle className="text-emerald-400 flex-shrink-0 mt-1 text-xs" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              <FaGithub />
              <span>Inspect Repository</span>
            </a>
          ) : (
            <div className="flex-1 text-center py-3 px-4 rounded-xl bg-zinc-900/40 border border-zinc-800/40 text-zinc-400 text-xs font-mono">
              Proprietary / In Development
            </div>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Launch Live System</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
