"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    const toggleVisibility = () => {
      // Show button after scrolling past the hero section (approximately 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  const duration = prefersReducedMotion ? 0 : 0.2;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration }}
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 focus-visible:ring-primary-500 dark:shadow-primary-900/20 fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-200 will-change-transform hover:scale-110 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
