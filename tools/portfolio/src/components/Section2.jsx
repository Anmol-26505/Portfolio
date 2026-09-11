import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaTerminal,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { TbBinaryTree, TbCpu } from "react-icons/tb";
import { playClick, playKeypress } from "../utils/sound";

const categories = ["All", "Frontend", "Languages", "Tools & Systems"];

const allSkills = [
  { icon: <SiCplusplus />, name: "C++20", category: "Languages", level: "Advanced", mastery: 92 },
  { icon: <SiPython />, name: "Python", category: "Languages", level: "Intermediate", mastery: 78 },
  { icon: <SiJavascript />, name: "JavaScript (ESNext)", category: "Languages", level: "Advanced", mastery: 90 },
  { icon: <FaReact />, name: "React 19", category: "Frontend", level: "Advanced", mastery: 94 },
  { icon: <SiTailwindcss />, name: "Tailwind CSS v4", category: "Frontend", level: "Advanced", mastery: 95 },
  { icon: <FaHtml5 />, name: "HTML5 / Semantic", category: "Frontend", level: "Expert", mastery: 96 },
  { icon: <FaCss3Alt />, name: "CSS3 / Modern Layouts", category: "Frontend", level: "Expert", mastery: 94 },
  { icon: <FaBootstrap />, name: "Bootstrap", category: "Frontend", level: "Intermediate", mastery: 82 },
  { icon: <SiMysql />, name: "MySQL / Relational", category: "Tools & Systems", level: "Intermediate", mastery: 80 },
  { icon: <FaGitAlt />, name: "Git", category: "Tools & Systems", level: "Advanced", mastery: 88 },
  { icon: <FaGithub />, name: "GitHub Workflows", category: "Tools & Systems", level: "Advanced", mastery: 88 },
  { icon: <FaFigma />, name: "Figma UI/UX", category: "Tools & Systems", level: "Design Systems", mastery: 85 },
  { icon: <TbBinaryTree />, name: "DSA & Graph Logic", category: "Tools & Systems", level: "Problem Solving", mastery: 91 },
];

const Section2 = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCodeTab, setActiveCodeTab] = useState("config"); // "config" | "cpp" | "benchmarks"

  // Interactive config toggles
  const [configState, setConfigState] = useState({
    openToRelocate: true,
    hirePriority: "Immediate",
    optimizationPass: true,
  });

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <span>01 // Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technical Arsenal & Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              From low-level systems programming and algorithmic complexity in C++ to high-performance component architecture in React 19.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  playClick();
                  setActiveCategory(category);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
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

        {/* Studio Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Multi-Tab Code Studio */}
          <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800/90 rounded-2xl p-5 sm:p-6 font-mono text-xs flex flex-col justify-between shadow-xl">
            <div>
              {/* Tab Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-4 text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      playClick();
                      setActiveCodeTab("config");
                    }}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                      activeCodeTab === "config"
                        ? "bg-zinc-800 text-cyan-300 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    developer.config.ts
                  </button>
                  <button
                    onClick={() => {
                      playClick();
                      setActiveCodeTab("cpp");
                    }}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                      activeCodeTab === "cpp"
                        ? "bg-zinc-800 text-cyan-300 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    decision_tree.cpp
                  </button>
                  <button
                    onClick={() => {
                      playClick();
                      setActiveCodeTab("benchmarks");
                    }}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer text-[11px] ${
                      activeCodeTab === "benchmarks"
                        ? "bg-zinc-800 text-cyan-300 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    benchmarks.json
                  </button>
                </div>
              </div>

              {/* Code Tab 1: Interactive developer.config.ts */}
              {activeCodeTab === "config" && (
                <div className="space-y-2 text-zinc-300 leading-relaxed overflow-x-auto">
                  <p>
                    <span className="text-cyan-400">export const</span>{" "}
                    <span className="text-yellow-400">developerProfile</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">engineer:</span>{" "}
                    <span className="text-emerald-300">"Anmol"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">specialization:</span>{" "}
                    <span className="text-emerald-300">"Frontend & C++ Systems"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">hirePriority:</span>{" "}
                    <span
                      onClick={() => {
                        playKeypress();
                        setConfigState((prev) => ({
                          ...prev,
                          hirePriority:
                            prev.hirePriority === "Immediate"
                              ? "Q2 2026"
                              : "Immediate",
                        }));
                      }}
                      className="text-emerald-300 cursor-pointer underline decoration-dotted hover:text-cyan-300"
                      title="Click to toggle priority"
                    >
                      "{configState.hirePriority}"
                    </span>
                    , <span className="text-zinc-500 text-[10px]">// click to toggle</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">openToRelocate:</span>{" "}
                    <span
                      onClick={() => {
                        playKeypress();
                        setConfigState((prev) => ({
                          ...prev,
                          openToRelocate: !prev.openToRelocate,
                        }));
                      }}
                      className="text-cyan-400 cursor-pointer underline decoration-dotted hover:text-white"
                      title="Click to toggle boolean"
                    >
                      {configState.openToRelocate ? "true" : "false"}
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">optimizationPass:</span>{" "}
                    <span
                      onClick={() => {
                        playKeypress();
                        setConfigState((prev) => ({
                          ...prev,
                          optimizationPass: !prev.optimizationPass,
                        }));
                      }}
                      className="text-cyan-400 cursor-pointer underline decoration-dotted hover:text-white"
                    >
                      {configState.optimizationPass ? "true" : "false"}
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">coreParadigms:</span> [
                  </p>
                  <p className="pl-8 text-emerald-300">"Component Atomicity",</p>
                  <p className="pl-8 text-emerald-300">"Amortized O(1) State",</p>
                  <p className="pl-8 text-emerald-300">"Deterministic Memory Lifecycles",</p>
                  <p className="pl-8 text-emerald-300">"Accessible Micro-Interactions"</p>
                  <p className="pl-4">]</p>
                  <p>&#125;;</p>
                </div>
              )}

              {/* Code Tab 2: decision_tree.cpp */}
              {activeCodeTab === "cpp" && (
                <div className="space-y-1 text-zinc-300 leading-relaxed overflow-x-auto text-[11px]">
                  <p className="text-zinc-500">// DiagnostiX C++20 Core Decision Node</p>
                  <p>
                    <span className="text-cyan-400">#include</span>{" "}
                    <span className="text-emerald-300">&lt;memory&gt;</span>
                  </p>
                  <p>
                    <span className="text-cyan-400">#include</span>{" "}
                    <span className="text-emerald-300">&lt;vector&gt;</span>
                  </p>
                  <p className="pt-1">
                    <span className="text-cyan-400">struct</span>{" "}
                    <span className="text-yellow-400">DiagnosticNode</span> &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">int</span> symptom_id;
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">double</span> weight_probability;
                  </p>
                  <p className="pl-4">
                    std::unique_ptr&lt;<span className="text-yellow-400">DiagnosticNode</span>&gt; left;
                  </p>
                  <p className="pl-4">
                    std::unique_ptr&lt;<span className="text-yellow-400">DiagnosticNode</span>&gt; right;
                  </p>
                  <p className="pl-4 pt-1">
                    <span className="text-cyan-400">bool</span> is_leaf() <span className="text-cyan-400">const</span> noexcept &#123;
                  </p>
                  <p className="pl-8">return !left && !right;</p>
                  <p className="pl-4">&#125;</p>
                  <p>&#125;;</p>
                </div>
              )}

              {/* Code Tab 3: benchmarks.json */}
              {activeCodeTab === "benchmarks" && (
                <div className="space-y-1 text-zinc-300 leading-relaxed overflow-x-auto text-[11px]">
                  <p>&#123;</p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"lighthouse_score"</span>: <span className="text-yellow-300">99</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"tree_traversal_latency_ms"</span>: <span className="text-yellow-300">0.38</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"memory_allocation_leaks"</span>: <span className="text-emerald-400">0</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"first_contentful_paint_sec"</span>: <span className="text-yellow-300">0.6</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">"bundle_optimization"</span>: <span className="text-emerald-300">"Brotli + Tree Shaken"</span>
                  </p>
                  <p>&#125;</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 text-zinc-400 flex items-center justify-between text-[11px]">
              <span>TypeScript • React 19 • C++20</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Kernel: Synchronized</span>
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Skills Cards Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-cyan-500/60 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-2xl text-zinc-400 group-hover:text-cyan-400 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-cyan-300">
                      {skill.level}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="font-bold text-zinc-200 group-hover:text-white text-xs">
                      {skill.name}
                    </p>
                    
                    {/* Mastery Bar */}
                    <div className="w-full bg-zinc-900 rounded-full h-1 mt-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
