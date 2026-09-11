import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/section1";
import Section2 from "./components/Section2";
import Timeline from "./components/Timeline";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import CommandPalette from "./components/CommandPalette";
import InteractiveTerminal from "./components/InteractiveTerminal";
import MatrixRain from "./components/MatrixRain";
import Preloader from "./components/Preloader";
import { Element } from "react-scroll";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [matrixOpen, setMatrixOpen] = useState(false);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K and backtick ~)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K for Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      // Backtick ` or ~ to toggle Interactive Terminal (only if not currently typing in an input/textarea)
      else if (
        (e.key === "`" || e.key === "~") &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5] selection:bg-cyan-500 selection:text-black relative">
      {/* High-Impact Opening Preloader Sequence */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Dynamic Reactive Particle Canvas */}
      <ParticleBackground />

      {/* Futuristic Floating Command Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenMatrix={() => setMatrixOpen(true)}
      />

      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenMatrix={() => setMatrixOpen(true)}
      />

      <MatrixRain
        isOpen={matrixOpen}
        onClose={() => setMatrixOpen(false)}
      />

      {/* Top Navbar Navigation & HUD Controls */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      <main className="relative z-10">
        <Element name="home">
          <Section1
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          />
        </Element>

        <Element name="skills">
          <Section2 />
        </Element>

        <Element name="journey">
          <Timeline />
        </Element>

        <Element name="projects">
          <Section3 />
        </Element>

        <Element name="about">
          <Section4 />
        </Element>

        <Element name="contact">
          <Contact onOpenTerminal={() => setTerminalOpen(true)} />
        </Element>
      </main>

      <Footer onOpenTerminal={() => setTerminalOpen(true)} />
    </div>
  );
};

export default App;
