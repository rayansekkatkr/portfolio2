"use client";

// Premium animated section divider with gradient beam

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  className?: string;
  gradient?: string;
}

export function SectionDivider({
  className = "",
  gradient = "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.4) 30%, rgba(201,165,92,0.3) 70%, transparent 100%)",
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="h-px"
        style={{ background: gradient }}
        initial={prefersReducedMotion ? {} : { scaleX: 0, opacity: 0 }}
        animate={isInView && !prefersReducedMotion ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Center glow dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-1 rounded-full"
        style={{ background: "#00D4FF", boxShadow: "0 0 12px 4px rgba(0,212,255,0.3)" }}
        initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
        animate={isInView && !prefersReducedMotion ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </div>
  );
}
