import { useState, useEffect } from "react";
import { playChirp, playSuccess } from "../utils/sound";
import ThreeDOrb from "./ThreeDOrb";

const Preloader = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);
  const [pulseStage, setPulseStage] = useState(0);

  useEffect(() => {
    // Initial sound chirp
    playChirp();

    // Pulse sequence stages
    const stage1 = setTimeout(() => setPulseStage(1), 400);
    const stage2 = setTimeout(() => setPulseStage(2), 1000);
    const stage3 = setTimeout(() => setPulseStage(3), 1600);

    // Completion & Exit transition
    const exitTimer = setTimeout(() => {
      setIsFading(true);
      playSuccess();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 2200);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsFading(true);
        setTimeout(() => onComplete && onComplete(), 150);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(exitTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => onComplete && onComplete(), 150);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 bg-[#050505] flex items-center justify-center select-none cursor-pointer transition-all duration-700 ease-in-out overflow-hidden ${
        isFading ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Dynamic Ambient Background Pulses */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-teal-400/15 blur-[90px] pointer-events-none" />

      {/* Pure Visual Animation Stage */}
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Expanding Ring 1 */}
        <div
          className={`absolute rounded-full border border-cyan-500/20 transition-all duration-1000 ease-out ${
            pulseStage >= 1 ? "w-80 h-80 opacity-60 scale-100" : "w-20 h-20 opacity-0 scale-50"
          }`}
        />

        {/* Outer Pulsing Expanding Ring 2 (Dashed Orbit) */}
        <div
          className={`absolute rounded-full border border-dashed border-cyan-400/30 transition-all duration-1000 ease-out animate-spin ${
            pulseStage >= 2 ? "w-64 h-64 opacity-80 scale-100" : "w-16 h-16 opacity-0 scale-50"
          }`}
          style={{ animationDuration: "12s" }}
        />

        {/* Inner Counter-Rotating Orbit Ring with Glow Nodes */}
        <div
          className={`absolute rounded-full border border-teal-400/40 transition-all duration-700 ease-out animate-spin ${
            pulseStage >= 1 ? "w-48 h-48 opacity-90 scale-100" : "w-10 h-10 opacity-0 scale-0"
          }`}
          style={{ animationDirection: "reverse", animationDuration: "8s" }}
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-md shadow-cyan-400"></span>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-300 shadow-md shadow-teal-400"></span>
        </div>

        {/* Center 3D Wireframe Kinetic Core */}
        <div
          className={`relative z-10 transition-all duration-700 ease-out transform ${
            pulseStage >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <ThreeDOrb size={180} />
        </div>

        {/* Central Luminous Core Flash on Peak Stage */}
        <div
          className={`absolute w-12 h-12 rounded-full bg-cyan-400 blur-md transition-all duration-500 ${
            pulseStage >= 3 ? "opacity-90 scale-150" : "opacity-30 scale-100"
          }`}
        />

        {/* Minimalist Horizontal High-Speed Energy Beam */}
        <div
          className={`absolute -bottom-24 w-48 sm:w-64 h-[2px] bg-zinc-900 overflow-hidden rounded-full transition-all duration-500 ${
            pulseStage >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 ease-out ${
              pulseStage === 1
                ? "w-1/3 translate-x-0"
                : pulseStage === 2
                ? "w-2/3 translate-x-16"
                : "w-full translate-x-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
