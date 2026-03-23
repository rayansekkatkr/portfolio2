"use client";

// Mockup fidèle au design réel de getdocextract.com
// Dark background, teal accents, "AP CONTROL SURFACE" dashboard layout

import { motion, useReducedMotion } from "framer-motion";

const FLOW_STEPS = ["Upload", "Extract", "Flag", "Validate", "Export"];

export function DocExtractMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden p-4">
      {/* Subtle diagonal lines texture — like on the real site */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 20px)",
        }}
      />

      {/* AP CONTROL SURFACE card */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(18,22,28,0.95)",
        }}
      >
        {/* Card header */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/40">
            AP Control Surface
          </span>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#10B981" }}
              animate={prefersReducedMotion ? {} : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-mono text-[9px] text-white/30">Live</span>
          </div>
        </div>

        <div className="p-3 space-y-2">
          {/* Metrics row */}
          <div className="grid grid-cols-2 gap-2">
            {/* Auto-processed */}
            <div
              className="rounded-lg p-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="text-[9px] text-white/35 mb-1.5">Auto-processed</div>
              <motion.div
                className="text-xl font-bold font-mono"
                style={{ color: "#10B981" }}
                animate={prefersReducedMotion ? {} : { opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                94%
              </motion.div>
              {/* Progress bar */}
              <div
                className="mt-1.5 h-0.5 rounded-full bg-white/[0.06] overflow-hidden"
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "#10B981", width: "94%" }}
                  initial={prefersReducedMotion ? {} : { width: 0 }}
                  animate={prefersReducedMotion ? {} : { width: "94%" }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Exceptions queued */}
            <div
              className="rounded-lg p-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="text-[9px] text-white/35 mb-1.5">Exceptions queued</div>
              <div
                className="text-xl font-bold font-mono"
                style={{ color: "#F59E0B" }}
              >
                12
              </div>
              {/* Dot indicators */}
              <div className="mt-1.5 flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: i < 3 ? "#F59E0B" : "rgba(255,255,255,0.1)" }}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : { opacity: i < 3 ? [0.6, 1, 0.6] : 1 }
                    }
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Processing flow */}
          <div
            className="rounded-lg p-3"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="text-[9px] text-white/35 mb-2">Processing flow</div>
            <div className="flex items-center gap-1 flex-wrap">
              {FLOW_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <motion.div
                    className="rounded-full px-2 py-0.5 text-[8px] font-mono"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      background:
                        i === 1
                          ? "rgba(16,185,129,0.12)"
                          : "rgba(255,255,255,0.03)",
                      color: i === 1 ? "#10B981" : "rgba(255,255,255,0.4)",
                    }}
                    animate={
                      prefersReducedMotion || i !== 1
                        ? {}
                        : { opacity: [0.7, 1, 0.7] }
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {step}
                  </motion.div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="text-[8px] text-white/15">›</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-2">
            <div
              className="rounded-lg p-2.5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="text-[8px] text-white/30 mb-0.5">Batch validation</div>
              <div className="text-[10px] font-semibold text-white/70">Enabled</div>
            </div>
            <div
              className="rounded-lg p-2.5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="text-[8px] text-white/30 mb-0.5">Audit timeline</div>
              <div className="text-[10px] font-semibold text-white/70">All tracked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
