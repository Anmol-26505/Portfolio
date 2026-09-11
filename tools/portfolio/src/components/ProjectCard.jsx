import { FaGithub, FaExternalLinkAlt, FaClock, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";
import { playClick } from "../utils/sound";
import TiltCard from "./TiltCard";

const ProjectCard = ({ project, onInspect }) => {
  const isWIP = !project.github && !project.live;

  return (
    <TiltCard maxTilt={6} scale={1.015} className="h-full">
      <div className="group h-full rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/90 border border-zinc-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-cyan-500/10 backdrop-blur-sm">
        {/* Compact Visual Window */}
        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-black/90">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
          {/* Subtle Cyber Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>

          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{project.category}</span>
            </span>
          </div>

          {/* Top Right Status Badge */}
          <div className="absolute top-3 right-3">
            {isWIP ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-[10px] font-mono text-amber-400">
                <FaClock className="text-[9px]" />
                {project.badge}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                {project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                {project.title}
              </h3>
              <span className="text-[11px] font-mono text-zinc-500">{project.year}</span>
            </div>

            <p className="text-[11px] font-mono text-cyan-400/90 mt-0.5">
              {project.tagline}
            </p>

            <p className="text-zinc-400 text-xs sm:text-[13px] mt-2 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Complexity Indicator */}
            {project.complexity && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono text-cyan-300/90 bg-cyan-950/30 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                <TbBinaryTree className="text-cyan-400 text-xs flex-shrink-0" />
                <span className="truncate">{project.complexity.time}</span>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[10px] font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="space-y-2 mt-5 pt-3.5 border-t border-zinc-900">
            {/* Architecture Inspection Trigger */}
            <button
              onClick={() => {
                playClick();
                if (onInspect) onInspect(project);
              }}
              className="w-full group/btn inline-flex items-center justify-between py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-300 text-[11px] font-mono transition-all cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-1.5">
                <FaLayerGroup size={11} className="text-cyan-400" />
                <span>Inspect Architecture</span>
              </div>
              <FaArrowRight size={9} className="transition-transform group-hover/btn:translate-x-1" />
            </button>

            <div className="flex items-center gap-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-[11px] font-medium transition-colors"
                >
                  <FaGithub size={12} />
                  <span>Code</span>
                </a>
              ) : (
                <div className="flex-1 text-center py-2 px-2 rounded-xl bg-zinc-900/40 border border-zinc-800/40 text-zinc-500 text-[10px] font-mono">
                  In Dev
                </div>
              )}

              {project.live && project.live !== "" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] font-bold transition-all hover:shadow-md hover:shadow-cyan-500/20"
                >
                  <FaExternalLinkAlt size={10} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;