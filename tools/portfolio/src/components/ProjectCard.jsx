import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaArrowRight, FaCodeBranch } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

const categoryStyles = {
  "DiagnostiX": {
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60",
    accentText: "text-emerald-700 dark:text-emerald-400",
  },
  "SwiftNest": {
    badgeBg: "bg-orange-50 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 border-orange-200/80 dark:border-orange-800/60",
    accentText: "text-orange-700 dark:text-orange-400",
  },
  "CheckIn": {
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-800 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60",
    accentText: "text-indigo-700 dark:text-indigo-400",
  },
};

const blueprints = {
  "DiagnostiX": {
    pipeline: [
      { step: "Symptom Vector", detail: "Clinical Input Normalization" },
      { step: "Weighted Graph", detail: "Probability Traversal Engine" },
      { step: "C++ Decision Tree", detail: "O(H + D) Hierarchical Eval" },
      { step: "Diagnostic Report", detail: "Ranked Confidence Matrix" },
    ],
    highlight: "Deterministic medical decision engine built with C++ STL memory safety.",
  },
  "SwiftNest": {
    pipeline: [
      { step: "Geo Radius Query", detail: "User Coordinates & Service Type" },
      { step: "Dispatcher State Machine", detail: "Live Technician Matching" },
      { step: "Pricing Calculator", detail: "Hourly + Material Cost Matrix" },
      { step: "Booking Handshake", detail: "One-Click Confirmation" },
    ],
    highlight: "Real-time dispatch state machine modeling on-demand service logistics.",
  },
  "CheckIn": {
    pipeline: [
      { step: "Spatial Filter", detail: "Destination & Date Clustering" },
      { step: "Price Matrix Engine", detail: "Dynamic Range Slider Index" },
      { step: "Floorplan Drawer", detail: "Interactive Vector Spatial Layout" },
      { step: "Verified Host Engine", detail: "Identity & Trust Verification" },
    ],
    highlight: "Luxury housing marketplace with interactive architectural floorplans.",
  },
};

const ProjectCard = ({ project, onInspect }) => {
  const [viewMode, setViewMode] = useState("preview"); // "preview" | "blueprint"

  const styles = categoryStyles[project.title] || {
    badgeBg: "bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 border-stone-200 dark:border-zinc-700",
    accentText: "text-stone-700 dark:text-zinc-300",
  };

  const blueprint = blueprints[project.title];

  return (
    <div
      id={`project-${project.id}`}
      className="group h-full rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 hover:border-stone-300 dark:hover:border-zinc-700 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
    >
      {/* Window Header & Media/Blueprint Area */}
      <div className="relative w-full overflow-hidden bg-stone-100 dark:bg-zinc-950 border-b border-stone-200/80 dark:border-zinc-800">
        {/* Minimalist Browser Navigation Bar */}
        <div className="px-3.5 py-2 flex items-center justify-between bg-stone-50 dark:bg-zinc-900/90 border-b border-stone-200/60 dark:border-zinc-800 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700"></span>
            <span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700"></span>
            <span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700"></span>
          </div>

          <span className="text-stone-500 dark:text-zinc-400 truncate max-w-[160px] font-medium">
            {project.title.toLowerCase()}.dev
          </span>

          {/* Interactive Mode Toggle: Preview vs Architecture */}
          <div className="flex items-center gap-1 bg-stone-200/70 dark:bg-zinc-800 p-0.5 rounded-md">
            <button
              onClick={() => setViewMode("preview")}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                viewMode === "preview"
                  ? "bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-2xs"
                  : "text-stone-500 dark:text-zinc-400 hover:text-stone-800 dark:hover:text-zinc-200"
              }`}
            >
              UI
            </button>
            <button
              onClick={() => setViewMode("blueprint")}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                viewMode === "blueprint"
                  ? "bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-2xs"
                  : "text-stone-500 dark:text-zinc-400 hover:text-stone-800 dark:hover:text-zinc-200"
              }`}
            >
              Specs
            </button>
          </div>
        </div>

        {/* Media Frame or Blueprint System Diagram */}
        {viewMode === "preview" ? (
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-102"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="h-48 sm:h-52 w-full bg-[#fbfbfa] dark:bg-zinc-950 p-4 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-500 dark:text-zinc-400 font-semibold uppercase">
                <FaCodeBranch className="text-orange-600 dark:text-orange-400 text-xs" />
                <span>Architecture Data Pipeline</span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                {blueprint?.pipeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-1.5 rounded-md bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 shadow-2xs text-[11px]"
                  >
                    <span className="font-semibold text-stone-800 dark:text-zinc-200 truncate">
                      {idx + 1}. {step.step}
                    </span>
                    <span className="text-stone-500 dark:text-zinc-400 text-[10px] truncate ml-2">
                      {step.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] font-mono text-stone-500 dark:text-zinc-400 italic mt-2 border-t border-stone-200/60 dark:border-zinc-800 pt-1.5">
              {blueprint?.highlight}
            </p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Status Pill */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${styles.badgeBg}`}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-stone-400 dark:text-zinc-500 font-medium">
              {project.year}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight">
            {project.title}
          </h3>

          <p className={`text-xs font-semibold mt-0.5 ${styles.accentText}`}>
            {project.tagline}
          </p>

          <p className="text-stone-600 dark:text-zinc-400 text-xs sm:text-[13px] mt-2.5 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Complexity metric snippet */}
          {project.complexity && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-stone-600 dark:text-zinc-300 bg-stone-50 dark:bg-zinc-800/60 px-2.5 py-1.5 rounded-lg border border-stone-200/60 dark:border-zinc-700/60">
              <TbBinaryTree className="text-stone-400 dark:text-zinc-500 text-xs flex-shrink-0" />
              <span className="truncate">{project.complexity.time}</span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 text-[11px] font-mono border border-stone-200/60 dark:border-zinc-700/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="space-y-2 mt-6 pt-4 border-t border-stone-100 dark:border-zinc-800">
          <button
            onClick={() => onInspect && onInspect(project)}
            className="w-full inline-flex items-center justify-between py-2 px-3 rounded-xl bg-stone-50 dark:bg-zinc-800/80 hover:bg-stone-100 dark:hover:bg-zinc-800 border border-stone-200 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <FaLayerGroup size={12} className="text-stone-500 dark:text-zinc-400" />
              <span>Inspect Full Specifications</span>
            </div>
            <FaArrowRight size={10} className="text-stone-400 dark:text-zinc-500" />
          </button>

          <div className="flex items-center gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-zinc-800 hover:bg-stone-50 dark:hover:bg-zinc-700 border border-stone-200 dark:border-zinc-700 text-stone-800 dark:text-zinc-200 text-xs font-medium transition-colors"
              >
                <FaGithub size={13} />
                <span>Code</span>
              </a>
            ) : (
              <div className="flex-1 text-center py-2 px-3 rounded-xl bg-stone-100 dark:bg-zinc-800/50 text-stone-400 dark:text-zinc-500 text-xs font-mono">
                In Development
              </div>
            )}

            {project.live && project.live !== "" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold transition-colors shadow-xs"
              >
                <FaExternalLinkAlt size={10} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;