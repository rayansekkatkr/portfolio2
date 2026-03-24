"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const isTouch = window.matchMedia("(hover: none)").matches;

    let raf: number;
    let t = 0;
    let scrollY = 0;
    let targetScrollY = 0;
    let frameCount = 0;

    function onScroll() {
      targetScrollY = window.scrollY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Blobs: each has independent 3D trajectory + parallax depth factor
    const blobs = [
      {
        // Cyan — top right, fast parallax
        x: 0.75,
        y: 0.05,
        z: 1.0,
        vx: 0.00014,
        vy: 0.0001,
        r: 0,
        g: 212,
        b: 255,
        radius: 0.55,
        baseOpacity: 0.18,
        phaseX: 0,
        phaseY: 1.2,
        speedMul: 1.0,
        parallaxFactor: 0.25, // moves 25% of scroll speed
      },
      {
        // Indigo — bottom left, slow parallax
        x: 0.1,
        y: 0.8,
        z: 0.5,
        vx: -0.0001,
        vy: -0.00008,
        r: 94,
        g: 58,
        b: 238,
        radius: 0.6,
        baseOpacity: 0.15,
        phaseX: 2.1,
        phaseY: 0.5,
        speedMul: 0.8,
        parallaxFactor: 0.12,
      },
      {
        // Gold — mid right
        x: 0.85,
        y: 0.5,
        z: 0.8,
        vx: 0.00008,
        vy: 0.00012,
        r: 201,
        g: 165,
        b: 92,
        radius: 0.4,
        baseOpacity: 0.1,
        phaseX: 4.2,
        phaseY: 3.1,
        speedMul: 1.2,
        parallaxFactor: 0.18,
      },
      {
        // Deep violet — center, very slow
        x: 0.45,
        y: 0.45,
        z: 0.3,
        vx: -0.00005,
        vy: 0.00007,
        r: 120,
        g: 40,
        b: 220,
        radius: 0.7,
        baseOpacity: 0.09,
        phaseX: 1.5,
        phaseY: 4.8,
        speedMul: 0.6,
        parallaxFactor: 0.06,
      },
      {
        // Cyan accent — lower center
        x: 0.5,
        y: 0.9,
        z: 1.2,
        vx: 0.00006,
        vy: -0.00005,
        r: 0,
        g: 200,
        b: 255,
        radius: 0.45,
        baseOpacity: 0.13,
        phaseX: 3.0,
        phaseY: 2.0,
        speedMul: 1.4,
        parallaxFactor: 0.3,
      },
    ];

    // On mobile use only first 3 blobs
    const activeBlobs = isTouch ? blobs.slice(0, 3) : blobs;

    function draw() {
      frameCount++;
      // Mobile: draw every 3rd frame (~20fps) to save battery
      if (isTouch && frameCount % 3 !== 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const W = canvas.width;
      const H = canvas.height;

      scrollY += (targetScrollY - scrollY) * 0.06;

      ctx.clearRect(0, 0, W, H);

      activeBlobs.forEach((b) => {
        if (!prefersReducedMotion) {
          // Drift in XY
          b.x += b.vx + Math.sin(t * 0.4 * b.speedMul + b.phaseX) * 0.00018;
          b.y += b.vy + Math.cos(t * 0.3 * b.speedMul + b.phaseY) * 0.00014;

          // Bounce
          if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
          if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;
        }

        // Scroll parallax: deeper blobs (higher z) move more
        const parallaxOffsetY = (scrollY * b.parallaxFactor * b.z) / H;

        const screenX = b.x * W;
        const screenY = b.y * H - scrollY * b.parallaxFactor * b.z;

        // 3D depth pulsing: z oscillates slightly
        const zPulse = prefersReducedMotion
          ? b.z
          : b.z + Math.sin(t * 0.5 * b.speedMul + b.phaseX) * 0.25;
        const depthScale = 0.6 + zPulse * 0.35; // 0.6..1.3

        const screenR = b.radius * Math.min(W, H) * depthScale;
        const opacity =
          b.baseOpacity *
          depthScale *
          (prefersReducedMotion ? 1 : 0.85 + Math.sin(t * 0.6 + b.phaseY) * 0.15);

        // Slight skew on the ellipse as if seen in 3D perspective
        const tiltAngle = prefersReducedMotion ? 0 : t * 0.03 * b.speedMul + b.phaseX * 0.1;
        const yRatio = 0.55 + Math.sin(t * 0.25 + b.phaseY) * 0.12;

        ctx.save();
        ctx.translate(screenX, screenY);
        ctx.rotate(tiltAngle);

        const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, screenR);
        grd.addColorStop(0, `rgba(${b.r},${b.g},${b.b},${opacity.toFixed(3)})`);
        grd.addColorStop(0.4, `rgba(${b.r},${b.g},${b.b},${(opacity * 0.45).toFixed(3)})`);
        grd.addColorStop(1, `rgba(${b.r},${b.g},${b.b},0)`);

        ctx.scale(1, yRatio);
        ctx.beginPath();
        ctx.arc(0, 0, screenR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.restore();

        // Suppress unused variable warning
        void parallaxOffsetY;
      });

      // Light sweep — desktop only (too expensive on mobile)
      if (!prefersReducedMotion && !isTouch) {
        const sweepAngle = t * 0.08;
        const sweepX = W / 2 + Math.cos(sweepAngle) * W * 0.6;
        const sweepY = H / 2 + Math.sin(sweepAngle * 0.7) * H * 0.4;
        const sweepGrd = ctx.createRadialGradient(sweepX, sweepY, 0, sweepX, sweepY, W * 0.35);
        sweepGrd.addColorStop(0, "rgba(0,212,255,0.025)");
        sweepGrd.addColorStop(1, "transparent");
        ctx.fillStyle = sweepGrd;
        ctx.fillRect(0, 0, W, H);
      }

      t += prefersReducedMotion ? 0 : 0.015;
      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
