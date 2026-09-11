import { useEffect, useRef } from "react";

const ThreeDOrb = ({ size = 260, className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const radius = size * 0.38;
    const phi = (1 + Math.sqrt(5)) / 2;

    // 12 vertices of an icosahedron
    const rawVertices = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ].map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    // 30 edges connecting icosahedron vertices
    const edges = [];
    const edgeThreshold = 1.1; // Normalized threshold
    for (let i = 0; i < rawVertices.length; i++) {
      for (let j = i + 1; j < rawVertices.length; j++) {
        const dx = rawVertices[i][0] - rawVertices[j][0];
        const dy = rawVertices[i][1] - rawVertices[j][1];
        const dz = rawVertices[i][2] - rawVertices[j][2];
        const dist = Math.hypot(dx, dy, dz);
        if (dist < edgeThreshold) {
          edges.push([i, j]);
        }
      }
    }

    let rotX = 0.4;
    let rotY = 0.6;
    let rotZ = 0.2;
    let targetSpeedX = 0.004;
    let targetSpeedY = 0.007;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetSpeedY = (x / rect.width) * 0.025;
      targetSpeedX = -(y / rect.height) * 0.025;
    };

    window.addEventListener("mousemove", handlePointerMove);

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      rotX += targetSpeedX;
      rotY += targetSpeedY;
      rotZ += 0.002;

      // 3D Rotation matrices
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      const projected = rawVertices.map(([x, y, z]) => {
        // Rot Y
        let x1 = x * cosY + z * sinY;
        let y1 = y;
        let z1 = -x * sinY + z * cosY;

        // Rot X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rot Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Perspective projection
        const fov = 3.2;
        const scale = fov / (fov + z3);
        const px = size / 2 + x3 * radius * scale;
        const py = size / 2 + y3 * radius * scale;

        return { px, py, z: z3, scale };
      });

      // Draw glowing edges with depth attenuation
      for (const [i, j] of edges) {
        const v1 = projected[i];
        const v2 = projected[j];
        const avgZ = (v1.z + v2.z) / 2;

        // Normalize depth alpha: front is brighter, back is dimmer
        const alpha = Math.max(0.12, Math.min(0.85, (avgZ + 1) * 0.45));

        ctx.beginPath();
        ctx.moveTo(v1.px, v1.py);
        ctx.lineTo(v2.px, v2.py);
        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.lineWidth = 1.2 * ((v1.scale + v2.scale) / 2);
        ctx.stroke();
      }

      // Draw vertex nodes
      for (const v of projected) {
        const alpha = Math.max(0.2, (v.z + 1) * 0.5);
        ctx.beginPath();
        ctx.arc(v.px, v.py, 2.8 * v.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.shadowColor = "#06b6d4";
        ctx.shadowBlur = 8 * v.scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      {/* Subtle ambient core glow */}
      <div className="absolute w-24 h-24 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none"></div>
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="relative z-10"
      />
    </div>
  );
};

export default ThreeDOrb;
