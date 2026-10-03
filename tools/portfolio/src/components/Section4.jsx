import { FaQuoteLeft, FaCode, FaCompass, FaLightbulb } from "react-icons/fa";

const pillars = [
  {
    icon: <FaCode className="text-orange-600 dark:text-orange-400" />,
    tag: "PRINCIPLE 01",
    title: "Algorithmic Grounding",
    description:
      "Deep roots in C++ and Data Structures instill an enduring habit: analyzing memory layouts and Big-O efficiency upfront, eliminating premature hacks, and designing clean abstractions.",
  },
  {
    icon: <FaCompass className="text-amber-600 dark:text-amber-400" />,
    tag: "PRINCIPLE 02",
    title: "Intuitive & Accessible UI",
    description:
      "Software must feel effortless. I obsess over sub-200ms interactions, clean visual hierarchies, responsive breakpoints that work on any screen, and accessible semantic markup.",
  },
  {
    icon: <FaLightbulb className="text-stone-800 dark:text-zinc-200" />,
    tag: "PRINCIPLE 03",
    title: "Relentless Craft & Delivery",
    description:
      "Theoretical understanding only matters if it ships. I build end-to-end applications, test them against real user edge cases, and continuously raise my bar for engineering craft.",
  },
];

const Section4 = () => {
  return (
    <section className="bg-[#fafaf9] dark:bg-[#09090b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>04 // About & Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Behind the Engineering
          </h2>
          <p className="text-stone-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            Based in Jalandhar, Punjab, with a Computer Science background, I am focused on building scalable frontend systems and resilient software that solves genuine problems.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
            How I Think About Software
          </h3>
          <div className="space-y-4 text-stone-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            <p>
              My journey began in low-level systems programming with C++, where understanding raw pointers, memory structures, and algorithmic complexity is non-negotiable. That discipline completely shaped how I write code today.
            </p>
            <p>
              When I transitioned into modern web engineering with React and Tailwind CSS, I brought that same rigor with me: avoiding bloated dependencies, maintaining lean state architectures, and ensuring every UI component renders predictably and smoothly.
            </p>
            <p>
              I am currently looking for full-time software engineering roles where I can contribute to high-impact products alongside teams that value craft, performance, and clear communication.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-50 dark:bg-zinc-800 border border-stone-200/70 dark:border-zinc-700 flex items-center justify-center text-base">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 dark:text-zinc-500 font-semibold tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-stone-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Quote */}
        <div className="relative rounded-2xl bg-stone-900 dark:bg-zinc-950 text-white p-8 sm:p-12 text-center overflow-hidden shadow-sm border border-stone-800 dark:border-zinc-800">
          <FaQuoteLeft className="text-2xl text-stone-600 dark:text-zinc-600 mx-auto mb-4" />
          <blockquote className="text-base sm:text-xl font-serif text-stone-200 dark:text-zinc-200 italic leading-relaxed max-w-2xl mx-auto">
            "Even if I lose everything, I will take a break, fix my crown, and conquer it once again because it is not me, it is within me."
          </blockquote>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-stone-700 dark:bg-zinc-800"></span>
            <span className="text-orange-400 font-serif font-semibold tracking-wider text-sm sm:text-base">
              Anmol
            </span>
            <span className="w-8 h-px bg-stone-700 dark:bg-zinc-800"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
