"use client";

// 21st.dev WordPullUp
// Each word slides up from below with staggered delay.

import { motion, useReducedMotion } from "framer-motion";

interface WordPullUpProps {
  words: string;
  className?: string;
  wordClassName?: string;
  delayOffset?: number;
}

export function WordPullUp({
  words,
  className,
  wordClassName,
  delayOffset = 0,
}: WordPullUpProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className}>
      {words.split(" ").map((word, i) => (
        <div key={i} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={prefersReducedMotion ? {} : { y: "110%", opacity: 0 }}
            animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 90,
              delay: delayOffset + i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
