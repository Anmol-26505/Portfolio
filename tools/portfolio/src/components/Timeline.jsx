import { FaCode, FaRocket, FaLaptopCode, FaCheck } from "react-icons/fa";

const milestones = [
  {
    phase: "Phase 01",
    period: "Foundations",
    title: "Algorithmic & Systems Engineering",
    subtitle: "C++, Object-Oriented Architecture & Data Structures",
    icon: <FaCode className="text-orange-600 dark:text-orange-400" />,
    description:
      "Deep-dived into core computer science principles using C++. Mastered object-oriented programming, manual memory management, pointer semantics, recursion, and algorithmic problem solving across Trees and Graphs.",
    skills: ["C++20", "OOP Architecture", "Trees & Graphs", "Memory Mechanics"],
    takeaway: "Trained rigorous mental models to evaluate algorithmic time and space trade-offs before writing code.",
  },
  {
    phase: "Phase 02",
    period: "Frontend Mastery",
    title: "The Modern Web Ecosystem",
    subtitle: "React 19, Component Architecture & Tailwind CSS",
    icon: <FaLaptopCode className="text-amber-600 dark:text-amber-400" />,
    description:
      "Transferred computational rigor to modern browser environments. Mastered modern JavaScript (ESNext), React component lifecycles, state modeling, and rapid UI engineering with Tailwind CSS.",
    skills: ["React 19", "JavaScript (ESNext)", "Tailwind CSS v4", "State Management"],
    takeaway: "Mastered creating reactive interfaces that feel instantaneous, accessible, and resilient on any screen size.",
  },
  {
    phase: "Phase 03",
    period: "Present & Ahead",
    title: "Shipping Production Digital Products",
    subtitle: "DiagnostiX, SwiftNest & CheckIn",
    icon: <FaRocket className="text-emerald-600 dark:text-emerald-400" />,
    description:
      "Architected, built, and shipped real-world web solutions spanning clinical decision support, on-demand home services, and rental housing discovery.",
    skills: ["Full Product Execution", "Git / GitHub", "Responsive UX", "Performance Profiling"],
    takeaway: "Bridging the gap between robust algorithmic backend logic and delightful customer-facing experiences.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-stone-50/70 dark:bg-zinc-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>03 // Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Engineering Journey
          </h2>
          <p className="text-stone-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            A deliberate progression from low-level C++ systems foundations to building modern, production-grade web applications.
          </p>
        </div>

        {/* Minimal Editorial Timeline */}
        <div className="relative border-l border-stone-200 dark:border-zinc-800 ml-4 sm:ml-8 space-y-10">
          {milestones.map((m, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Node Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-stone-300 dark:border-zinc-700 flex items-center justify-center text-xs shadow-xs">
                {m.icon}
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 border border-stone-200 dark:border-zinc-700">
                      {m.phase}
                    </span>
                    <span className="text-xs font-mono text-stone-400 dark:text-zinc-500">
                      {m.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight">
                  {m.title}
                </h3>
                <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mb-3">
                  {m.subtitle}
                </p>

                <p className="text-stone-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {m.description}
                </p>

                {/* Key Takeaway Callout */}
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200/70 dark:border-zinc-700/60 flex items-start gap-2 text-xs text-stone-700 dark:text-zinc-300 mb-4">
                  <FaCheck className="text-emerald-500 text-xs mt-0.5 flex-shrink-0" />
                  <span className="italic">{m.takeaway}</span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {m.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-zinc-800 text-stone-600 dark:text-zinc-300 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
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
