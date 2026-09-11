import { useState, useRef, useEffect } from "react";
import { FaTerminal, FaTimes, FaWindowMinimize, FaExpand, FaCompress } from "react-icons/fa";
import { playClick, playKeypress, playSuccess, playChirp } from "../utils/sound";

const banner = [
  "┌─────────────────────────────────────────────────────────────┐",
  "│  ANMOL DEV KERNEL v2.4.0 (x86_64-pc-none-elf)               │",
  "│  Interactive Developer Shell • Type 'help' for commands.    │",
  "└─────────────────────────────────────────────────────────────┘",
];

const InteractiveTerminal = ({ isOpen, onClose, onOpenMatrix }) => {
  const [history, setHistory] = useState([
    { type: "banner", lines: banner },
    { type: "output", text: "Welcome to Anmol's workstation terminal. Type 'help' to see what's possible." },
  ]);
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      playChirp();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    const outputLines = [];

    switch (cmd) {
      case "help":
      case "?":
        outputLines.push(
          "Available Commands:",
          "  help           - Display this list of available commands",
          "  bio            - Output developer background and core mission",
          "  skills         - List technical arsenal and proficiencies",
          "  projects       - List featured engineering works",
          "  dsa            - Overview of algorithmic strengths & problem solving",
          "  matrix         - Engage Matrix digital glyph rain mode",
          "  sudo hire      - Unlock executive hiring credentials",
          "  contact        - Display direct communication channels",
          "  ping           - Measure simulated connection latency",
          "  date           - Print current system timestamp",
          "  clear          - Clear terminal history"
        );
        break;

      case "bio":
      case "cat":
        if (cmd === "cat" && arg !== "bio.md" && arg !== "bio") {
          outputLines.push(`cat: ${arg || "missing argument"}: No such file or directory. Try 'cat bio.md'`);
        } else {
          outputLines.push(
            "NAME: Anmol",
            "ROLE: Frontend & React Engineer | C++ & DSA Specialist",
            "LOCATION: India • Open to Global & Remote Roles",
            "MISSION: Crafting hyper-responsive, resilient digital architectures grounded in rigorous computer science principles."
          );
        }
        break;

      case "skills":
        outputLines.push(
          "TECHNICAL ARSENAL:",
          "  • Languages:      C++20, Python, JavaScript (ESNext)",
          "  • Frontend:       React 19, Tailwind CSS v4, HTML5/CSS3, Vite",
          "  • Architecture:   DSA, OOP Design, Component Systems, State Machines",
          "  • Tooling:        Git, GitHub, Linux, Bash, Figma, MySQL"
        );
        break;

      case "projects":
        outputLines.push(
          "FEATURED CREATIONS:",
          "  [1] DiagnostiX    - Clinical diagnostic companion in C++ with decision tree heuristics",
          "  [2] SwiftNest     - On-demand service platform built with React 19 & Tailwind",
          "  [3] CheckIn       - Digital accommodation portal optimized for zero-overhead load times",
          "  [4] Stay Updated  - Next-gen modular design token system"
        );
        break;

      case "dsa":
        outputLines.push(
          "ALGORITHMIC FOUNDATIONS:",
          "  Extensive problem solving in C++ across Trees, Graphs, Dynamic Programming, and Recursion.",
          "  Focus on amortized time complexities, optimal space allocation, and cache-conscious data layout."
        );
        break;

      case "matrix":
        outputLines.push("Breaching mainframe... Engaging Matrix rain protocol.");
        playSuccess();
        setTimeout(() => {
          if (onOpenMatrix) onOpenMatrix();
        }, 400);
        break;

      case "sudo":
        if (arg.toLowerCase() === "hire") {
          outputLines.push(
            "ACCESS GRANTED // HIGH-PRIORITY RECRUITER CLEARANCE",
            "Status: Candidate status verified extraordinary.",
            "Action: Launching direct transmission to anmolchohaan.ac.2001@gmail.com"
          );
          playSuccess();
          setTimeout(() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 800);
        } else {
          outputLines.push(`sudo: command not allowed: ${arg}. Try 'sudo hire'`);
        }
        break;

      case "contact":
        outputLines.push(
          "COMMUNICATION CHANNELS:",
          "  Email:      anmolchohaan.ac.2001@gmail.com",
          "  GitHub:     https://github.com/Anmol-26505",
          "  LinkedIn:   https://www.linkedin.com/in/anmolchauhan84/",
          "  Instagram:  https://www.instagram.com/youknow_anmol/"
        );
        break;

      case "ping":
        outputLines.push("PING workstation (127.0.0.1): 56 data bytes");
        outputLines.push("64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=1.42 ms");
        outputLines.push("64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.98 ms");
        outputLines.push("--- workstation ping statistics ---");
        outputLines.push("2 packets transmitted, 2 packets received, 0.0% packet loss");
        break;

      case "date":
        outputLines.push(new Date().toString());
        break;

      case "clear":
      case "cls":
        setHistory([]);
        return;

      default:
        outputLines.push(`command not found: '${trimmed}'. Type 'help' for available commands.`);
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: trimmed },
      { type: "outputLines", lines: outputLines },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      playKeypress();
      handleCommand(commandInput);
      setCommandInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setCommandInput(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setCommandInput("");
      } else {
        setHistoryIndex(nextIdx);
        setCommandInput(commandHistory[nextIdx]);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-200 flex flex-col font-mono text-xs ${
        isMaximized
          ? "inset-4 sm:inset-10 rounded-2xl bg-zinc-950/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl"
          : "bottom-6 right-4 sm:right-6 w-[94vw] sm:w-[580px] h-[440px] rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 rounded-t-2xl select-none">
        <div className="flex items-center gap-2 text-zinc-300">
          <FaTerminal className="text-cyan-400 text-xs" />
          <span className="font-semibold text-xs tracking-wider">anmol@workstation:~</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playClick();
              setIsMaximized(!isMaximized);
            }}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title={isMaximized ? "Restore Window" : "Maximize Window"}
          >
            {isMaximized ? <FaCompress size={12} /> : <FaExpand size={12} />}
          </button>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Close Terminal (Esc)"
          >
            <FaTimes size={13} />
          </button>
        </div>
      </div>

      {/* Terminal Scroll View */}
      <div
        className="flex-1 p-4 overflow-y-auto space-y-2 text-zinc-300 selection:bg-cyan-500 selection:text-black cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => {
          if (item.type === "banner") {
            return (
              <div key={idx} className="text-cyan-400/90 whitespace-pre font-mono leading-tight">
                {item.lines.map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
            );
          }
          if (item.type === "input") {
            return (
              <div key={idx} className="flex items-center gap-2 text-white">
                <span className="text-cyan-400 font-bold">anmol@workstation:~$</span>
                <span>{item.text}</span>
              </div>
            );
          }
          if (item.type === "output") {
            return (
              <div key={idx} className="text-zinc-400 pl-4 border-l border-zinc-800">
                {item.text}
              </div>
            );
          }
          if (item.type === "outputLines") {
            return (
              <div key={idx} className="space-y-1 text-zinc-300 pl-4 border-l border-cyan-500/30">
                {item.lines.map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })}

        {/* Active Command Input Line */}
        <div className="flex items-center gap-2 pt-1 text-white">
          <span className="text-cyan-400 font-bold">anmol@workstation:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-cyan-300 caret-cyan-400 font-mono"
            autoFocus
            spellCheck="false"
          />
        </div>

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-900 rounded-b-2xl flex items-center justify-between text-[11px] text-zinc-400 select-none">
        <span>Press [Tab] for autocomplete • [↑/↓] for history</span>
        <span className="text-emerald-400">● Interactive CLI Online</span>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
