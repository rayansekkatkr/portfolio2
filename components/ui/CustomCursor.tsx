"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Lazy initializer — runs once on client, avoids setState-in-effect lint error
function detectTouchDevice() {
  if (typeof window === "undefined") return true;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(detectTouchDevice);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ring follows with spring lag — the "premium" feel
  const ringX = useSpring(mouseX, { damping: 26, stiffness: 160 });
  const ringY = useSpring(mouseY, { damping: 26, stiffness: 160 });

  // Dot snaps instantly
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600 });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], label, input, textarea, select")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setIsHovering(true));
          el.addEventListener("mouseleave", () => setIsHovering(false));
        });
    };
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      observer.disconnect();
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring — spring lagged */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
        animate={{
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            border: isHovering ? "1px solid rgba(0,212,255,0.7)" : "1px solid rgba(0,212,255,0.3)",
            background: isHovering ? "rgba(0,212,255,0.07)" : "transparent",
            transition: "border-color 0.25s, background 0.25s",
          }}
        />
        {isHovering && (
          <div
            className="absolute rounded-full"
            style={{
              inset: "-10px",
              background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.div>

      {/* Inner dot — snaps to cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 5 : 4,
          height: isHovering ? 5 : 4,
          background: isHovering ? "#00D4FF" : "rgba(255,255,255,0.9)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, background 0.2s, opacity 0.3s",
        }}
      />
    </>
  );
}
