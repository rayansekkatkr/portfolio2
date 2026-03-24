"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const FOV = 400;
const RADIUS = 130;

export function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    // Detect touch/mobile — fewer dots, no tilt, no sort
    const isTouch = window.matchMedia("(hover: none)").matches;
    const GAP = isTouch ? 44 : 30;

    let raf: number;
    let t = 0;
    let frameCount = 0;

    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };

    // Mouse (desktop)
    function onMouseMove(e: MouseEvent) {
      const el = canvasRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (!prefersReducedMotion && !isTouch) {
        tilt.tx = ((mouse.y - rect.height / 2) / rect.height) * 0.18;
        tilt.ty = (-(mouse.x - rect.width / 2) / rect.width) * 0.22;
      }
    }
    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
      tilt.tx = 0;
      tilt.ty = 0;
    }

    // Touch (mobile) — magnetic effect follows finger
    function onTouchMove(e: TouchEvent) {
      const el = canvasRef.current;
      if (!el || !e.touches[0]) return;
      const rect = el.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    }
    function onTouchEnd() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    type Dot = { gx: number; gy: number; phase: number; speed: number; zAmp: number };
    let dots: Dot[] = [];

    function build(W: number, H: number) {
      dots = [];
      const cols = Math.ceil(W / GAP) + 2;
      const rows = Math.ceil(H / GAP) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            gx: (c - cols / 2) * GAP,
            gy: (r - rows / 2) * GAP,
            phase: Math.random() * Math.PI * 2,
            speed: 0.5 + Math.random() * 1.0,
            zAmp: 40 + Math.random() * 60,
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
      frameCount++;
      // On mobile skip every other frame to halve GPU load
      if (isTouch && frameCount % 2 !== 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      if (!isTouch) {
        tilt.x += (tilt.tx - tilt.x) * 0.05;
        tilt.y += (tilt.ty - tilt.y) * 0.05;
      }

      const cx = W / 2;
      const cy = H / 2;
      const maxGridDist = Math.hypot(
        (Math.ceil(W / GAP) / 2) * GAP,
        (Math.ceil(H / GAP) / 2) * GAP
      );

      // Center ambient glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.6);
      grd.addColorStop(0, "rgba(0,212,255,0.055)");
      grd.addColorStop(0.5, "rgba(94,58,238,0.025)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      const projected = dots.map((d) => {
        const z = prefersReducedMotion ? 0 : Math.sin(t * d.speed + d.phase) * d.zAmp;

        let rx = d.gx,
          ry = d.gy,
          rz = z;
        if (!isTouch) {
          rx = d.gx * Math.cos(tilt.y) - z * Math.sin(tilt.y);
          ry = d.gy * Math.cos(tilt.x) + z * Math.sin(tilt.x);
          rz = d.gx * Math.sin(tilt.y) + z * Math.cos(tilt.y) + d.gy * -Math.sin(tilt.x);
        }

        const scale = FOV / (FOV + rz + 200);
        const sx = cx + rx * scale;
        const sy = cy + ry * scale;

        const depth = Math.max(0, Math.min(1, (rz + d.zAmp + 200) / (d.zAmp * 2 + 400)));
        const gridDist = Math.hypot(d.gx, d.gy) / maxGridDist;

        const mouseDist = Math.hypot(sx - smooth.x, sy - smooth.y);
        const p = smooth.x > 0 && !prefersReducedMotion ? Math.max(0, 1 - mouseDist / RADIUS) : 0;
        const magnetism = p * p * (3 - 2 * p);

        const size = Math.max(0.4, scale * (1.0 + depth * 1.2 + magnetism * 4));
        const alpha = Math.min(
          0.95,
          0.04 + (1 - gridDist) * 0.16 + depth * 0.15 + magnetism * 0.55
        );

        const baseCyan = Math.max(0, 1 - gridDist * 1.4) * depth;
        const r = Math.round(94 * (1 - baseCyan) * (1 - magnetism));
        const g = Math.round(
          (58 * (1 - baseCyan) + 212 * baseCyan) * (1 - magnetism) + 212 * magnetism
        );
        const b = Math.round(
          (238 * (1 - baseCyan) + 255 * baseCyan) * (1 - magnetism) + 255 * magnetism
        );

        return { sx, sy, size, alpha, r, g, b, rz };
      });

      // Skip expensive sort on mobile
      if (!isTouch) projected.sort((a, b) => a.rz - b.rz);

      projected.forEach(({ sx, sy, size, alpha, r, g, b }) => {
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      });

      t += prefersReducedMotion ? 0 : 0.018;
      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full touch-none"
      style={{ display: "block" }}
    />
  );
}
