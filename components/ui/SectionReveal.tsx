"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

export function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Section content — fades up */}
      <motion.div
        initial={{ opacity: 0, y: 56, scale: 0.985 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      {/* Left edge flash — cyan vertical bar that fades in then out */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full w-[2px]"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isInView ? { scaleY: [0, 1, 1, 0], opacity: [0, 1, 0.6, 0] } : {}}
        transition={{ duration: 1.1, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
        style={{
          background:
            "linear-gradient(to bottom, transparent, #00D4FF 30%, rgba(0,212,255,0.4) 70%, transparent)",
          transformOrigin: "top",
        }}
      />

      {/* Horizontal scan line — sweeps top → bottom */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 w-full"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.6) 20%, rgba(0,212,255,0.9) 50%, rgba(0,212,255,0.6) 80%, transparent 100%)",
          boxShadow: "0 0 12px 2px rgba(0,212,255,0.3)",
          top: 0,
        }}
        initial={{ y: 0, opacity: 0 }}
        animate={isInView ? { y: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
        transition={{ duration: 0.9, ease: "easeIn", times: [0, 0.1, 0.85, 1], delay: 0.05 }}
      />
    </div>
  );
}
