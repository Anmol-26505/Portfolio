import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const MatrixRain = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}/*+=~_ANMOL";
    const fontSize = 15;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));

    let animId;

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#06b6d4";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright leading character
        if (Math.random() > 0.85) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = "#22d3ee";
        }

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center animate-fade-in">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* HUD Header */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-auto z-10">
        <div className="px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>SYSTEM_BREACH // MATRIX_MODE_ENGAGED</span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 hover:bg-red-900 border border-red-500/50 text-red-300 font-mono text-xs transition-colors cursor-pointer"
        >
          <FaTimes className="text-xs" />
          <span>Exit (Esc)</span>
        </button>
      </div>

      <div className="relative z-10 text-center pointer-events-none select-none max-w-lg p-6 rounded-2xl bg-zinc-950/80 border border-cyan-500/30 backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider mb-2">
          ARCHITECT LEVEL ACCESS
        </h2>
        <p className="text-xs sm:text-sm font-mono text-cyan-400">
          "The question that drove you here: What makes software extraordinary?"
        </p>
        <p className="text-[11px] font-mono text-zinc-400 mt-4">
          Press [ESC] or click top-right to return to the interface.
        </p>
      </div>
    </div>
  );
};

export default MatrixRain;
