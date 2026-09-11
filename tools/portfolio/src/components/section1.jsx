import { useState, useEffect } from "react";
import MainPic from "../assets/mypic.original.PNG";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaCopy,
  FaCheck,
  FaTerminal,
  FaCodeBranch,
} from "react-icons/fa";
import { playClick, playSuccess } from "../utils/sound";
import TiltCard from "./TiltCard";
import ThreeDOrb from "./ThreeDOrb";

const Section1 = ({ onOpenTerminal, onOpenCommandPalette }) => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const email = "anmolchohaan.ac.2001@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-[#050505] bg-grid-pattern flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Lighting & 3D Depth Backdrop */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Floating 3D Geometric Hologram Accent */}
      <div className="hidden xl:block absolute right-8 top-28 z-0 opacity-75">
        <ThreeDOrb size={220} />
      </div>

      {/* Engineering Telemetry HUD Strip */}
      <div className="w-full max-w-6xl mx-auto mb-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-zinc-200">PORTFOLIO KERNEL: ONLINE</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-cyan-400 hidden sm:inline">v2.4.0</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
              <span className="text-emerald-400">●</span>
              <span>RTT: 1.2ms</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
              <span className="text-zinc-500">SYS TIME:</span>
              <span className="text-zinc-200">{currentTime || "12:00:00"}</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-400">
              <FaCodeBranch className="text-cyan-400 text-[10px]" />
              <span>main:7f3b89a</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 z-10">
        {/* Left Column: Hero Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Available for New Opportunities
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              📍 India • Remote Worldwide
            </span>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base font-mono uppercase tracking-widest mb-1">
            Hi, my name is
          </p>

          {/* Heading - Rock solid, no vertical jumping */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Anmol<span className="text-cyan-400">.</span>
          </h1>

          {/* Fixed-height, single-line dynamic typing container with grounded, authentic titles */}
          <div className="h-11 sm:h-14 flex items-center mt-1 overflow-hidden">
            <TypeAnimation
              sequence={[
                "React Developer",
                1600,
                "Frontend Developer",
                1600,
                "Web Developer",
                1600,
                "Problem Solver",
                1600,
                "C++ Programmer",
                1600,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 font-mono whitespace-nowrap"
            />
          </div>

          {/* Tagline */}
          <p className="mt-3 text-base sm:text-lg font-medium text-zinc-300 max-w-xl leading-relaxed">
            Programmer by Passion <span className="text-cyan-400 mx-1">•</span> Traveller by Choice <span className="text-cyan-400 mx-1">•</span> Hustler by Mindset
          </p>

          {/* Bio */}
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            I build responsive, fast, and user-friendly web applications. Combining modern React with solid C++ problem-solving foundations to create clean digital solutions.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={playClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl transition-all duration-200 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer text-sm"
            >
              <span>Explore Work</span>
              <FaArrowRight className="text-xs" />
            </Link>

            {/* Quick Interactive Terminal Trigger */}
            <button
              onClick={() => {
                playClick();
                if (onOpenTerminal) onOpenTerminal();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-700 text-cyan-400 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800 rounded-xl transition-all duration-200 cursor-pointer text-sm font-mono"
              title="Launch Dev Shell"
            >
              <FaTerminal className="text-xs" />
              <span>Launch CLI (~ )</span>
            </button>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-3 bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-zinc-700 rounded-xl transition-all duration-200 text-sm cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-400 text-xs" />
                  <span className="text-xs text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-xs" />
                  <span className="text-xs font-mono">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Metrics Strip */}
          <div className="mt-10 pt-8 border-t border-zinc-800/80 w-full max-w-xl grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">4+</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Projects Built</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">13+</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Core Tech Stack</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">C++ & DSA</p>
              <p className="text-xs text-zinc-400 uppercase tracking-wider mt-0.5">Algorithmic Base</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3.5 text-lg text-zinc-400">
            <a
              href="https://github.com/Anmol-26505"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anmolchauhan84/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/youknow_anmol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-pink-400 hover:border-zinc-700 transition-colors"
            >
              <FaInstagram />
            </a>
            <span className="text-xs text-zinc-400 font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
              Press <kbd className="text-cyan-400">⌘K</kbd> for actions
            </span>
          </div>
        </div>

        {/* Right Column: Seamlessly Blended 3D Portrait */}
        <div className="flex-shrink-0 relative flex items-center justify-center">
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl scale-95 pointer-events-none animate-pulse-glow" />

          <TiltCard
            maxTilt={9}
            perspective={1000}
            className="relative z-10 overflow-hidden cursor-pointer"
          >
            <div className="relative max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]">
              <img
                src={MainPic}
                alt="Anmol - React Developer"
                className="w-full h-auto object-cover object-center select-none"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 76% 76% at 50% 48%, black 42%, transparent 96%)",
                  maskImage:
                    "radial-gradient(ellipse 76% 76% at 50% 48%, black 42%, transparent 96%)",
                }}
                loading="eager"
              />

              {/* Multi-layer Seamless Vignette Fades into #050505 */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] via-[#050505]/65 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] via-[#050505]/65 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] via-[#050505]/65 to-transparent pointer-events-none" />
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Section1;
