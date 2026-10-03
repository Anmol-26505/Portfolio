import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaStethoscope,
  FaTools,
  FaHome,
} from "react-icons/fa";

const projectQuickJumps = [
  { name: "DiagnostiX", icon: <FaStethoscope className="text-emerald-500" />, to: "projects", offset: -90 },
  { name: "SwiftNest", icon: <FaTools className="text-orange-500" />, to: "projects", offset: -90 },
  { name: "CheckIn", icon: <FaHome className="text-indigo-400" />, to: "projects", offset: -90 },
];

const Section1 = () => {
  const [copied, setCopied] = useState(false);
  const email = "anmolchauhan.ac.26@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-gradient-to-b from-orange-100/50 dark:from-amber-950/20 via-amber-50/40 dark:via-orange-950/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-start max-w-3xl">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-800 text-stone-700 dark:text-zinc-300 text-xs font-medium mb-8 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-stone-800 dark:text-zinc-200">Available for Opportunities</span>
          <span className="text-stone-300 dark:text-zinc-700">•</span>
          <span className="text-stone-500 dark:text-zinc-400 font-mono text-[11px]">Jalandhar, Punjab, IN</span>
        </div>

        {/* Editorial Headline with High-End Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-[1.08] mb-6">
          Designing & building{" "}
          <span className="font-serif italic font-normal text-stone-800 dark:text-zinc-300">
            enduring
          </span>{" "}
          digital products.
        </h1>

        {/* Articulate Biography / Positioning */}
        <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 leading-relaxed font-normal mb-8 max-w-2xl">
          Hi, I’m <span className="text-stone-900 dark:text-zinc-100 font-semibold">Anmol Chauhan</span>. I engineer fast, resilient web applications with <span className="text-stone-900 dark:text-zinc-200 font-medium">React</span> and <span className="text-stone-900 dark:text-zinc-200 font-medium">Tailwind CSS</span>, grounded in algorithmic memory discipline and systems architecture from <span className="text-stone-900 dark:text-zinc-200 font-medium">C++</span>.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-stone-800 dark:hover:bg-zinc-200 transition-all shadow-xs cursor-pointer group"
          >
            <span>Explore Selected Work</span>
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 text-xs sm:text-sm font-semibold border border-stone-300 dark:border-zinc-700 hover:border-stone-400 dark:hover:border-zinc-600 hover:bg-stone-50 dark:hover:bg-zinc-800 transition-all shadow-xs cursor-pointer"
          >
            <span>Get in Touch</span>
          </Link>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 text-xs sm:text-sm font-mono border border-stone-200 dark:border-zinc-800 hover:bg-stone-200/70 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Copy email address"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-600 dark:text-emerald-400 text-xs" />
                <span className="text-emerald-700 dark:text-emerald-300">Copied to clipboard</span>
              </>
            ) : (
              <>
                <FaCopy className="text-stone-400 dark:text-zinc-500 text-xs" />
                <span>anmolchauhan.ac.26@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Project Quick Jump Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 w-full">
          <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-zinc-500 mr-1">
            Jump to:
          </span>
          {projectQuickJumps.map((p, idx) => (
            <Link
              key={idx}
              to={p.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={p.offset}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 hover:border-stone-300 dark:hover:border-zinc-700 text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <span className="text-xs">{p.icon}</span>
              <span>{p.name}</span>
            </Link>
          ))}
        </div>

        {/* Social & Professional Links */}
        <div className="flex items-center gap-6 text-stone-400 dark:text-zinc-500 pb-12 border-b border-stone-200/80 dark:border-zinc-800 w-full text-xs font-mono">
          <span className="text-stone-500 dark:text-zinc-400 uppercase tracking-wider text-[11px]">Connect</span>
          <a
            href="https://github.com/Anmol-26505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-stone-600 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white transition-colors"
          >
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anmolchauhan84/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-stone-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <FaLinkedin className="text-sm" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:anmolchauhan.ac.26@gmail.com"
            className="flex items-center gap-1.5 text-stone-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            <FaEnvelope className="text-sm" />
            <span>Email</span>
          </a>
        </div>

        {/* Minimalist 3-Column Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 w-full">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 shadow-xs hover:border-stone-300 dark:hover:border-zinc-700 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white font-mono block mb-1">
              03
            </span>
            <p className="text-xs font-bold text-stone-900 dark:text-zinc-100">Shipped Projects</p>
            <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1 leading-normal">
              DiagnostiX, SwiftNest & CheckIn.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 shadow-xs hover:border-stone-300 dark:hover:border-zinc-700 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 font-mono block mb-1">
              C++ & React
            </span>
            <p className="text-xs font-bold text-stone-900 dark:text-zinc-100">Systems & Frontend</p>
            <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1 leading-normal">
              Low-level algorithmic discipline meets reactive UI design.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 shadow-xs hover:border-stone-300 dark:hover:border-zinc-700 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 font-mono block mb-1">
              100%
            </span>
            <p className="text-xs font-bold text-stone-900 dark:text-zinc-100">Commitment to Craft</p>
            <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1 leading-normal">
              Clean architecture, accessibility, and high performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
