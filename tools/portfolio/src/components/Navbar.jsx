import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const navLinks = [
  { name: "Work", to: "projects", offset: -90 },
  { name: "Stack", to: "skills", offset: -90 },
  { name: "Journey", to: "journey", offset: -90 },
  { name: "About", to: "about", offset: -90 },
  { name: "Contact", to: "contact", offset: -90 },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-4xl mx-auto pt-3 sm:pt-4 pointer-events-auto">
        <div
          className={`flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-stone-200 dark:border-zinc-800 shadow-sm"
              : "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-sm border-stone-200/70 dark:border-zinc-800/70"
          }`}
        >
          {/* Home Link Indicator */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="flex items-center p-1.5 rounded-full hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer group"
            aria-label="Home"
            title="Home"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100/80 dark:ring-emerald-950/60 group-hover:ring-emerald-200 dark:group-hover:ring-emerald-900 transition-all" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-xs">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={item.offset}
                activeClass="nav-link active"
                className="px-3 py-1.5 rounded-full text-stone-600 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-zinc-800 transition-all duration-150 cursor-pointer font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: Theme Switcher & Resume */}
          <div className="flex items-center gap-2">
            {/* Day and Night Theme Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-stone-200 dark:border-zinc-800 bg-stone-100/80 dark:bg-zinc-900 text-stone-700 dark:text-amber-400 hover:bg-stone-200/70 dark:hover:bg-zinc-800 transition-all cursor-pointer shadow-2xs flex items-center justify-center"
              title={theme === "dark" ? "Switch to Day Mode" : "Switch to Night Mode"}
              aria-label="Toggle Day and Night mode"
            >
              {theme === "dark" ? (
                <FaSun className="text-xs text-amber-400" />
              ) : (
                <FaMoon className="text-xs text-stone-600" />
              )}
            </button>

            <a
              href="/Anmol_CV.pdf"
              download="Anmol_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:bg-stone-800 dark:hover:bg-zinc-200 transition-colors duration-150 shadow-xs"
              aria-label="Download Resume"
            >
              <FaDownload className="text-[10px]" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-stone-600 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-zinc-800 md:hidden transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 p-3 rounded-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-stone-200 dark:border-zinc-800 md:hidden pointer-events-auto shadow-lg">
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  activeClass="bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-white font-semibold"
                  onClick={closeMobileMenu}
                  className="px-4 py-2 rounded-xl text-stone-600 dark:text-zinc-400 hover:text-stone-950 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-zinc-900 transition-colors font-medium text-xs text-center cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-stone-100 dark:border-zinc-800">
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-xs font-semibold text-stone-800 dark:text-zinc-200"
                >
                  {theme === "dark" ? (
                    <>
                      <FaSun className="text-amber-400" />
                      <span>Day Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="text-stone-600" />
                      <span>Night Mode</span>
                    </>
                  )}
                </button>

                <a
                  href="/Anmol_CV.pdf"
                  download="Anmol_CV.pdf"
                  onClick={closeMobileMenu}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold"
                >
                  <FaDownload className="text-xs" />
                  <span>Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
