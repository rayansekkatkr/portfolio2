"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CardRevealProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export function CardReveal({ children, index = 0, className = "" }: CardRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
