"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { damping: 30, stiffness: 250, restDelta: 0.001 });

  return (
    /* Thin vertical bar on the left edge — cinematic lower-third feel */
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9990] h-full w-[2px]"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <motion.div
        className="w-full origin-top"
        style={{
          scaleY,
          height: "100%",
          background:
            "linear-gradient(to bottom, #00D4FF 0%, rgba(0,212,255,0.4) 60%, rgba(94,58,238,0.3) 100%)",
        }}
      />
    </div>
  );
}
