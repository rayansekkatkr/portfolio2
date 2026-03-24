"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const GAP = 28;
    type Dot = { x: number; y: number; phase: number; speed: number };
    let dots: Dot[] = [];

    function build(w: number, h: number) {
      dots = [];
      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;
      const offX = (w - (cols - 1) * GAP) / 2;
      const offY = (h - (rows - 1) * GAP) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: offX + c * GAP,
            y: offY + r * GAP,
            phase: Math.random() * Math.PI * 2,
            speed: 0.6 + Math.random() * 1.2,
          });
        }
      }
    }

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build(canvas.width, canvas.height);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw() {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const maxDist = Math.hypot(cx, cy);

      // Center radial glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxDist * 0.7);
      grd.addColorStop(0, "rgba(0,212,255,0.06)");
      grd.addColorStop(0.45, "rgba(94,58,238,0.03)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      dots.forEach((d) => {
        const dist = Math.hypot(d.x - cx, d.y - cy) / maxDist; // 0..1
        const wave = prefersReducedMotion ? 0 : Math.sin(t * d.speed + d.phase) * 0.5 + 0.5;
        const pulse = prefersReducedMotion ? 0 : Math.sin(t * 0.7 - dist * 5) * 0.5 + 0.5;

        const size = 1.2 + wave * 0.7 + pulse * (1 - dist) * 1.4;
        const baseAlpha = 0.06 + (1 - dist) * 0.14;
        const alpha = baseAlpha + pulse * (1 - dist) * 0.28 + wave * 0.06;

        // Color: cyan near center, indigo mid, white edges
        const r = dist < 0.35 ? 0 : dist < 0.65 ? Math.round(((dist - 0.35) / 0.3) * 94) : 94;
        const g = dist < 0.35 ? 212 : Math.round(212 * (1 - (dist - 0.35) / 0.65));
        const b =
          dist < 0.35 ? 255 : dist < 0.65 ? 255 : Math.round(255 * (1 - (dist - 0.65) / 0.35));

        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      });

      t += prefersReducedMotion ? 0 : 0.022;
      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full"
      style={{ display: "block" }}
    />
  );
}
