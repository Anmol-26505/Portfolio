import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaTerminal } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { playClick } from "../utils/sound";

const Footer = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    playClick();
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <footer className="bg-[#030303] border-t border-zinc-900 text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-zinc-900">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-zinc-400 font-medium">
            {["home", "skills", "journey", "projects", "about", "contact"].map((sec) => (
              <Link
                key={sec}
                to={sec}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={playClick}
                className="cursor-pointer hover:text-cyan-400 capitalize transition-colors"
              >
                {sec}
              </Link>
            ))}
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-3">
            {onOpenTerminal && (
              <button
                onClick={() => {
                  playClick();
                  onOpenTerminal();
                }}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                title="Launch CLI Terminal (~)"
              >
                <FaTerminal className="text-cyan-400" />
                <span className="hidden sm:inline">Terminal</span>
              </button>
            )}

            <a
              href="https://github.com/Anmol-26505"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anmolchauhan84/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/youknow_anmol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-pink-400 transition-colors text-sm"
            >
              <FaInstagram />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-zinc-700 transition-colors text-xs cursor-pointer ml-1"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <p>© 2026 Anmol. Designed & Engineered for High Performance.</p>
          <p className="font-mono text-[11px] text-zinc-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>React 19 • Tailwind CSS v4 • C++ Systems Logic • Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
