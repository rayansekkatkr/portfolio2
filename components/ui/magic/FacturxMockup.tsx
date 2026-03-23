"use client";

// Mockup fidèle au design réel de pont-facturx.com
// Dark background, violet/purple gradient text, floating metric badges

import { motion, useReducedMotion } from "framer-motion";

export function FacturxMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden p-5">
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Nav */}
      <div className="relative flex items-center justify-between mb-5">
        <div className="flex items-center gap-1.5">
          <div
            className="h-3 w-3 rounded"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
          />
          <div className="h-2.5 w-16 rounded bg-white/20" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-10 rounded bg-white/[0.08]" />
          <div className="h-2 w-10 rounded bg-white/[0.08]" />
          <div
            className="h-5 w-14 rounded-full"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          />
        </div>
      </div>

      {/* Hero text */}
      <div className="relative space-y-1.5 mb-4">
        <div className="h-4 w-44 rounded bg-white/80" />
        <motion.div
          className="h-4 w-36 rounded"
          style={{
            background: "linear-gradient(90deg, #8B5CF6, #06B6D4)",
          }}
          animate={prefersReducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <div className="h-4 w-40 rounded bg-white/80" />
      </div>

      {/* Subtext */}
      <div className="relative space-y-1 mb-5">
        <div className="h-2 w-48 rounded bg-white/20" />
        <div className="h-2 w-40 rounded bg-white/15" />
      </div>

      {/* CTAs */}
      <div className="relative flex gap-2 mb-5">
        <div
          className="h-6 w-28 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)" }}
        >
          <div className="h-1.5 w-16 rounded bg-white/60" />
        </div>
        <div
          className="h-6 w-24 rounded-full border border-white/20 flex items-center justify-center"
        >
          <div className="h-1.5 w-14 rounded bg-white/30" />
        </div>
      </div>

      {/* Trust badges */}
      <div className="relative flex gap-3">
        {["Sans carte", "EN 16931", "Chorus Pro"].map((label) => (
          <div key={label} className="flex items-center gap-1">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "#10B981" }}
            />
            <div className="h-1.5 w-10 rounded bg-white/15" />
          </div>
        ))}
      </div>

      {/* Floating metric badges — top right area */}
      <motion.div
        className="absolute right-4 top-8 rounded-lg px-3 py-2"
        style={{
          background: "rgba(15,15,20,0.9)",
          border: "1px solid rgba(139,92,246,0.25)",
          backdropFilter: "blur(8px)",
        }}
        animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[9px] font-mono text-white/40 mb-0.5">Précision OCR</div>
        <div
          className="text-sm font-bold font-mono"
          style={{ color: "#10B981" }}
        >
          99.9%
        </div>
      </motion.div>

      <motion.div
        className="absolute right-4 bottom-10 rounded-lg px-3 py-2"
        style={{
          background: "rgba(15,15,20,0.9)",
          border: "1px solid rgba(6,182,212,0.25)",
          backdropFilter: "blur(8px)",
        }}
        animate={prefersReducedMotion ? {} : { y: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="text-[9px] font-mono text-white/40 mb-0.5">Conformité</div>
        <div
          className="text-sm font-bold font-mono"
          style={{ color: "#06B6D4" }}
        >
          100%
        </div>
      </motion.div>

      <motion.div
        className="absolute left-4 bottom-6 rounded-lg px-3 py-1.5"
        style={{
          background: "rgba(245,158,11,0.12)",
          border: "1px solid rgba(245,158,11,0.3)",
          backdropFilter: "blur(8px)",
        }}
        animate={prefersReducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      >
        <div className="text-[9px] font-mono text-white/40">Conversion</div>
        <div
          className="text-sm font-bold font-mono"
          style={{ color: "#F59E0B" }}
        >
          &lt; 10s
        </div>
      </motion.div>
    </div>
  );
}
