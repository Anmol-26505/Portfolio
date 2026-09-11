import { useState } from "react";
import { FaCode, FaRocket, FaLaptopCode, FaCheckCircle, FaCodeBranch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { playClick } from "../utils/sound";

const milestones = [
  {
    phase: "Phase 01",
    branch: "feat/core-dsa-cpp",
    commitSha: "c7e2a9b",
    title: "Algorithmic & Systems Foundations",
    subtitle: "C++, OOP Architecture & Data Structures",
    period: "Foundational Era",
    icon: <FaCode />,
    description:
      "Deep-dived into core computer science principles with C++. Mastered object-oriented design, raw memory mechanics, pointer semantics, recursion, and algorithmic problem solving across Trees and Graphs.",
    skills: ["C++20", "OOP Architecture", "DSA & Big-O", "Pointers & Memory"],
    takeaway: "Trained intuition to analyze time/space trade-offs before writing a single line of implementation code.",
  },
  {
    phase: "Phase 02",
    branch: "feat/modern-react-architecture",
    commitSha: "8d4f10e",
    title: "The Web Ecosystem & Frontend Mastery",
    subtitle: "Modern React 19, Component Isolation & Responsive Styling",
    period: "Specialization Era",
    icon: <FaLaptopCode />,
    description:
      "Transferred computational rigor to modern web applications. Mastered modern JavaScript (ESNext), React 19, declarative UI patterns, hook lifecycles, and rapid UI engineering with Tailwind CSS.",
    skills: ["React 19", "JavaScript (ESNext)", "Tailwind CSS v4", "State Management"],
    takeaway: "Mastered building reactive interfaces that feel instantaneous, accessible, and robust on any device.",
  },
  {
    phase: "Phase 03",
    branch: "release/production-applications",
    commitSha: "1b99c4a",
    title: "Shipping Production-Ready Digital Products",
    subtitle: "Healthcare Systems, Service Marketplaces & Accommodation Portals",
    period: "Present & Future",
    icon: <FaRocket />,
    description:
      "Architected, built, and shipped real-world solutions solving everyday tangible pain points: DiagnostiX (diagnostic companion), SwiftNest (on-demand household services), and CheckIn (rental portal).",
    skills: ["System Architecture", "Git & CI/CD", "Responsive UX", "Performance Optimization"],
    takeaway: "Bridging the gap between low-level algorithmic logic and world-class customer-facing software products.",
  },
];

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    playClick();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>02 // Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Git-Log Engineering Journey
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            A version-controlled trajectory from foundational C++ systems to production web engineering.
          </p>
        </div>

        {/* Vertical Git Timeline Track */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-36 space-y-12">
          {milestones.map((m, index) => (
            <div key={index} className="relative pl-7 sm:pl-10 group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-zinc-950 border-2 border-zinc-700 flex items-center justify-center text-xs text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all shadow-lg">
                {m.icon}
              </div>

              {/* Period & Commit SHA on left for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-mono">
                <span className="text-xs text-cyan-400 font-bold uppercase block">
                  {m.phase}
                </span>
                <span className="text-[10px] text-zinc-500 flex items-center justify-end gap-1 mt-0.5">
                  <FaCodeBranch className="text-[9px]" /> {m.commitSha}
                </span>
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 sm:hidden">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                      {m.phase}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      #{m.commitSha}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                    branch: {m.branch}
                  </span>

                  <span className="text-xs font-mono text-zinc-500">
                    {m.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-cyan-400/90 font-mono mt-1">
                  {m.subtitle}
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {m.description}
                </p>

                {/* Key Skills Pills */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-900">
                  {m.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                    >
                      <FaCheckCircle className="text-[10px] text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expandable Engineering Takeaway */}
                <div className="mt-4 pt-3 border-t border-zinc-900/60">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center justify-between w-full text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span>Core Architectural Takeaway</span>
                    {expandedIndex === index ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                  </button>

                  {expandedIndex === index && (
                    <div className="mt-2 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200 font-mono animate-fade-in">
                      💡 {m.takeaway}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
