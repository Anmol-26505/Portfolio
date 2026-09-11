import { FaQuoteLeft, FaTerminal, FaEye, FaFire, FaMicrochip, FaShieldAlt } from "react-icons/fa";

const pillars = [
  {
    icon: <FaTerminal />,
    tag: "ETHOS // 01",
    title: "Algorithmic Precision",
    description:
      "Deep roots in C++ and Data Structures instill an unwavering discipline: analyzing time/space complexity before typing, eliminating premature hacks, and engineering cache-conscious solutions.",
  },
  {
    icon: <FaEye />,
    tag: "ETHOS // 02",
    title: "Human-Centric UX & Polish",
    description:
      "Software must feel effortless. I obsess over sub-100ms response targets, intuitive visual hierarchies, fluid responsive breakpoints, and WCAG-compliant accessible interactions.",
  },
  {
    icon: <FaFire />,
    tag: "ETHOS // 03",
    title: "Relentless Ship Mindset",
    description:
      "Theoretical elegance is incomplete without production delivery. I build end-to-end products, test them against real edge cases, and continuously iterate with modern frontend engineering standards.",
  },
];

const Section4 = () => {
  return (
    <section className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>04 // Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Behind the Developer
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            The core principles, systems mindset, and resilient discipline driving my engineering craft.
          </p>
        </div>

        {/* Narrative Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 flex items-center justify-center text-lg transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Quote Callout */}
        <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>

          <FaQuoteLeft className="text-3xl text-cyan-400/40 mx-auto mb-4" />
          <blockquote className="text-lg sm:text-2xl font-serif text-zinc-200 italic leading-relaxed max-w-3xl mx-auto">
            "Even if I lose everything, I will take a break, fix my crown, and conquer it once again because it is not me, it is within me."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-zinc-700"></span>
            <span className="font-serif text-cyan-300 font-semibold tracking-wider text-base sm:text-lg">
              Anmol ❤️
            </span>
            <span className="w-10 h-px bg-zinc-700"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
