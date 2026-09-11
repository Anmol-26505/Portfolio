import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaTerminal,
  FaVolumeUp,
  FaVolumeMute,
  FaDownload,
  FaCopy,
  FaCode,
  FaHome,
  FaLayerGroup,
  FaUserTie,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa";
import { scroller } from "react-scroll";
import { playClick, playKeypress, playSuccess, playChirp, toggleSound, getSoundStatus } from "../utils/sound";

const CommandPalette = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenMatrix,
  onSelectProject,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(getSoundStatus());
  const inputRef = useRef(null);

  const actions = [
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: <FaHome />,
      handler: () => scroller.scrollTo("home", { smooth: true, duration: 500, offset: -100 }),
    },
    {
      id: "nav-skills",
      title: "Explore Technical Arsenal & Skills",
      category: "Navigation",
      icon: <FaCode />,
      handler: () => scroller.scrollTo("skills", { smooth: true, duration: 500, offset: -100 }),
    },
    {
      id: "nav-journey",
      title: "View Career Progression & Timeline",
      category: "Navigation",
      icon: <FaLayerGroup />,
      handler: () => scroller.scrollTo("journey", { smooth: true, duration: 500, offset: -100 }),
    },
    {
      id: "nav-projects",
      title: "Browse Featured Project Creations",
      category: "Navigation",
      icon: <FaRocket />,
      handler: () => scroller.scrollTo("projects", { smooth: true, duration: 500, offset: -100 }),
    },
    {
      id: "nav-contact",
      title: "Send Transmission / Contact",
      category: "Navigation",
      icon: <FaEnvelope />,
      handler: () => scroller.scrollTo("contact", { smooth: true, duration: 500, offset: -100 }),
    },
    {
      id: "act-terminal",
      title: "Launch Interactive Developer CLI Terminal",
      category: "Developer Tools",
      shortcut: "~",
      icon: <FaTerminal />,
      handler: () => {
        if (onOpenTerminal) onOpenTerminal();
      },
    },
    {
      id: "act-audio",
      title: soundEnabled ? "Disable Synthesized Sound Effects" : "Enable Synthesized Sound Effects",
      category: "Preferences",
      icon: soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />,
      handler: () => {
        const next = toggleSound();
        setSoundEnabled(next);
      },
    },
    {
      id: "act-resume",
      title: "Download Verified Resume (Anmol_CV.pdf)",
      category: "Actions",
      icon: <FaDownload />,
      handler: () => {
        const link = document.createElement("a");
        link.href = "/Anmol_CV.pdf";
        link.download = "Anmol_CV.pdf";
        link.click();
      },
    },
    {
      id: "act-copy-email",
      title: "Copy Direct Email Address",
      category: "Actions",
      icon: <FaCopy />,
      handler: () => {
        navigator.clipboard.writeText("anmolchohaan.ac.2001@gmail.com");
        playSuccess();
      },
    },
    {
      id: "act-matrix",
      title: "Engage Matrix Digital Glyphs Rain",
      category: "Easter Eggs",
      icon: <FaCode />,
      handler: () => {
        if (onOpenMatrix) onOpenMatrix();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      playChirp();
      setQuery("");
      setSelectedIndex(0);
      setSoundEnabled(getSoundStatus());
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  const executeAction = (action) => {
    playClick();
    onClose();
    setTimeout(() => {
      action.handler();
    }, 150);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      playKeypress();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      playKeypress();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      executeAction(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800/80 bg-zinc-900/50">
          <FaSearch className="text-zinc-500 text-sm mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search (e.g. 'skills', 'terminal', 'resume')..."
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder-zinc-500 font-sans"
          />
          <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-xs">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-zinc-500">
              No matching commands or destinations found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => executeAction(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                  selectedIndex === idx
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                    : "text-zinc-300 hover:bg-zinc-900 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-cyan-400">{item.icon}</span>
                  <span className="font-sans font-medium text-sm">{item.title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.shortcut && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                      {item.shortcut}
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info strip */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/40 border-t border-zinc-900 text-[11px] text-zinc-400">
          <div className="flex items-center gap-3">
            <span>[↑↓] Navigate</span>
            <span>[↵] Execute</span>
          </div>
          <span className="text-cyan-400 font-semibold">Command Palette v2</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
