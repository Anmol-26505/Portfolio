import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

const skillClusters = [
  {
    title: "Core & Systems Logic",
    icon: <FaCode className="text-orange-600 dark:text-orange-400" />,
    description: "Computational foundations, pointer semantics, and algorithmic trade-offs.",
    skills: [
      { name: "C++ (C++20)", note: "Pointers, OOP, STL", icon: <SiCplusplus /> },
      { name: "Data Structures & Algorithms", note: "Trees, Graphs, Big-O", icon: <TbBinaryTree /> },
      { name: "Python", note: "Scripting & Automation", icon: <SiPython /> },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: <FaLaptopCode className="text-amber-600 dark:text-amber-400" />,
    description: "High-performance reactive user interfaces with modern declarative patterns.",
    skills: [
      { name: "React 19", note: "Component Architecture", icon: <FaReact /> },
      { name: "JavaScript (ESNext)", note: "Async, Closures, DOM", icon: <SiJavascript /> },
      { name: "Tailwind CSS v4", note: "Modern Utility Layouts", icon: <SiTailwindcss /> },
      { name: "HTML5 & Modern CSS", note: "Semantic, Accessible", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Data & Systems Services",
    icon: <FaDatabase className="text-emerald-600 dark:text-emerald-400" />,
    description: "API integrations, state caching pipelines, and structured relational persistence.",
    skills: [
      { name: "RESTful Web APIs", note: "TMDB, JSON, Fetch/Axios", icon: <FaTools /> },
      { name: "MySQL / Relational", note: "Schema & Queries", icon: <SiMysql /> },
      { name: "Client-Side Caching", note: "LocalStorage, LRU", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Tooling & Workflow",
    icon: <FaTools className="text-stone-700 dark:text-zinc-400" />,
    description: "Version-controlled development pipelines, responsive testing, and UI craft.",
    skills: [
      { name: "Git & GitHub", note: "Branching, PRs, CI/CD", icon: <FaGitAlt /> },
      { name: "Vite & Toolchains", note: "Fast HMR, Bundling", icon: <FaGithub /> },
      { name: "Figma to Code", note: "Pixel-Accurate UI", icon: <FaFigma /> },
    ],
  },
];

const Section2 = () => {
  return (
    <section className="bg-[#fafaf9] dark:bg-[#09090b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>02 // Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Technical Stack & Toolkit
          </h2>
          <p className="text-stone-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            A balanced skill set combining algorithmic depth in C++ with modern full-stack web engineering in React and Tailwind CSS.
          </p>
        </div>

        {/* Bento Grid of Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillClusters.map((cluster, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-stone-50 dark:bg-zinc-800 border border-stone-200/60 dark:border-zinc-700 text-base">
                    {cluster.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white tracking-tight">
                    {cluster.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 mb-5 leading-relaxed">
                  {cluster.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {cluster.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200/60 dark:border-zinc-700/60 flex items-center gap-2.5 hover:bg-stone-100/70 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <span className="text-stone-600 dark:text-zinc-400 text-sm">{skill.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-stone-800 dark:text-zinc-200 truncate">
                        {skill.name}
                      </p>
                      <p className="text-[11px] font-mono text-stone-500 dark:text-zinc-400 truncate">
                        {skill.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
