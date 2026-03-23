"use client";

// Cinematic text reveal - characters animate in with stagger
// Creates dramatic entrance for headlines

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  className = "",
  style,
  delay = 0,
  staggerChildren = 0.03,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={className} style={style}>
        {children}
      </span>
    );
  }

  const words = children.split(" ");

  return (
    <motion.span
      ref={ref}
      className={`inline ${className}`}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 100,
                },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
