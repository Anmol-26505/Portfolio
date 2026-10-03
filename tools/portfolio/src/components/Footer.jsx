import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
  };

  return (
    <footer className="bg-[#fafaf9] dark:bg-[#09090b] border-t border-stone-200/80 dark:border-zinc-800/80 py-12 px-4 sm:px-6 lg:px-8 text-stone-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Links */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href="https://github.com/Anmol-26505"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-950 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anmolchauhan84/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:anmolchauhan.ac.26@gmail.com"
            className="hover:text-stone-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="/Anmol_CV.pdf"
            download="Anmol_CV.pdf"
            className="hover:text-stone-950 dark:hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-zinc-800 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <FaArrowUp className="text-[10px]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
