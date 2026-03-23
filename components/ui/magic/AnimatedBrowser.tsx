"use client";

// AnimatedBrowser — browser chrome mockup with animated gradient background.
// Pass children to replace the default skeleton with custom content.

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedBrowserProps {
  url: string;
  accentColor?: string;
  secondaryColor?: string;
  children?: React.ReactNode;
}

export function AnimatedBrowser({
  url,
  accentColor = "#00D4FF",
  secondaryColor = "#C9A55C",
  children,
}: AnimatedBrowserProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full">
      {/* Browser frame */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(10,10,12,0.95)",
          boxShadow: `0 20px 40px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)`,
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          {/* URL bar */}
          <div
            className="mx-auto flex items-center gap-2 rounded-md px-3 py-1"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <svg className="h-3 w-3 flex-shrink-0" style={{ color: "rgba(52,211,153,0.5)" }} fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-mono text-[10px] text-white/30">{url}</span>
          </div>
        </div>

        {/* Content area */}
        <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
          {/* Animated gradient mesh background — always present */}
          <div aria-hidden="true" className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 30% 20%, ${accentColor}18 0%, transparent 55%), radial-gradient(ellipse at 75% 80%, ${secondaryColor}12 0%, transparent 50%)`,
              }}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      background: [
                        `radial-gradient(ellipse at 30% 20%, ${accentColor}18 0%, transparent 55%), radial-gradient(ellipse at 75% 80%, ${secondaryColor}12 0%, transparent 50%)`,
                        `radial-gradient(ellipse at 65% 35%, ${accentColor}18 0%, transparent 55%), radial-gradient(ellipse at 25% 75%, ${secondaryColor}12 0%, transparent 50%)`,
                        `radial-gradient(ellipse at 30% 20%, ${accentColor}18 0%, transparent 55%), radial-gradient(ellipse at 75% 80%, ${secondaryColor}12 0%, transparent 50%)`,
                      ],
                    }
              }
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Custom children override OR default skeleton */}
          {children ? (
            <div className="relative h-full">{children}</div>
          ) : (
            /* Default skeleton */
            <div className="relative p-6 space-y-4">
              <div className="flex items-center justify-between">
                <motion.div
                  className="h-4 w-20 rounded"
                  style={{ background: `${accentColor}25` }}
                  animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-3 w-12 rounded bg-white/[0.06]" />
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <motion.div
                  className="h-6 w-3/4 rounded"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="h-4 w-1/2 rounded"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-16 rounded-lg"
                    style={{
                      background: i === 0 ? `${accentColor}10` : "rgba(255,255,255,0.03)",
                      border: `1px solid ${i === 0 ? `${accentColor}20` : "rgba(255,255,255,0.05)"}`,
                    }}
                    animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-3xl opacity-25 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
