import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaBars, FaTimes, FaTerminal, FaSearch, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { playClick, toggleSound, getSoundStatus } from "../utils/sound";

const navLinks = [
  { name: "Home", to: "home", offset: -100 },
  { name: "Skills", to: "skills", offset: -100 },
  { name: "Journey", to: "journey", offset: -100 },
  { name: "Projects", to: "projects", offset: -100 },
  { name: "About", to: "about", offset: -100 },
  { name: "Contact", to: "contact", offset: -100 },
];

const Navbar = ({ onOpenTerminal, onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const state = toggleSound();
    setSoundActive(state);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-5xl mx-auto pt-3 sm:pt-4 pointer-events-auto">
        <div
          className={`flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-2 rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-zinc-950/90 backdrop-blur-md border-cyan-500/20 shadow-2xl shadow-cyan-950/20"
              : "bg-zinc-950/75 backdrop-blur-sm border-white/10"
          }`}
        >
          {/* Quick Terminal Launcher Pill */}
          <button
            onClick={() => {
              playClick();
              if (onOpenTerminal) onOpenTerminal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-zinc-700 transition-colors cursor-pointer text-xs font-mono"
            title="Open Interactive Terminal (~)"
          >
            <FaTerminal className="text-[11px] text-cyan-400" />
            <span className="hidden sm:inline">CLI</span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-zinc-800 text-zinc-400">~</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={item.offset}
                activeClass="active"
                onClick={playClick}
                className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer font-medium text-xs sm:text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Tools Cluster */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                playClick();
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer text-xs font-mono"
              title="Command Palette (Ctrl+K or Cmd+K)"
            >
              <FaSearch className="text-[11px] text-cyan-400" />
              <span className="hidden sm:inline text-zinc-300">Search</span>
              <kbd className="text-[10px] px-1 py-0.2 rounded bg-zinc-800 border border-zinc-700 text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Audio Feedback Synthesizer Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                soundActive
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-sm shadow-cyan-500/30"
                  : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300"
              }`}
              title={soundActive ? "Synthesized Sound: Active" : "Synthesized Sound: Muted (Click to enable)"}
              aria-label="Toggle synthesized audio"
            >
              {soundActive ? <FaVolumeUp size={13} /> : <FaVolumeMute size={13} />}
            </button>

            {/* Resume Download CTA */}
            <a
              href="/Anmol_CV.pdf"
              download="Anmol_CV.pdf"
              onClick={playClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-bold hover:bg-cyan-400 transition-colors duration-200"
              aria-label="Download Resume"
            >
              <FaDownload className="text-[10px]" />
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 lg:hidden transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mt-2 p-4 rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 lg:hidden pointer-events-auto shadow-2xl">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  activeClass="active"
                  onClick={() => {
                    playClick();
                    closeMobileMenu();
                  }}
                  className="px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm text-center cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}

              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-zinc-900">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    if (onOpenTerminal) onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-mono"
                >
                  <FaTerminal className="text-cyan-400" /> CLI Shell
                </button>
                <button
                  onClick={() => {
                    closeMobileMenu();
                    if (onOpenCommandPalette) onOpenCommandPalette();
                  }}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-mono"
                >
                  <FaSearch className="text-cyan-400" /> Cmd Palette
                </button>
              </div>

              <a
                href="/Anmol_CV.pdf"
                download="Anmol_CV.pdf"
                onClick={() => {
                  playClick();
                  closeMobileMenu();
                }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition-colors"
              >
                <FaDownload className="text-xs" />
                <span>Download Resume</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
