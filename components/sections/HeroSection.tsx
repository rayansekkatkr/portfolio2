"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const duration = prefersReducedMotion ? 0 : 0.5;
  const delay = prefersReducedMotion ? 0 : 0.2;

  return (
    <section
      id="hero"
      className="from-primary-50 flex min-h-screen items-center justify-center bg-gradient-to-br to-white px-6 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="border-primary-600 relative h-48 w-48 overflow-hidden rounded-full border-4 shadow-xl lg:h-64 lg:w-64">
              <Image
                src="/avatar-placeholder.svg"
                alt="Rayan Sekkat - AI-Powered Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
              Rayan Sekkat
            </h1>
            <h2 className="text-primary-600 dark:text-primary-400 mt-4 text-2xl font-semibold sm:text-3xl">
              AI-Powered Full-Stack Developer
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
              Crafting intelligent, scalable web solutions that bridge innovation and functionality.
              Specialized in Next.js, TypeScript, and AI-driven development to transform your ideas
              into powerful digital experiences.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 w-full rounded-md px-8 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="hover:bg-primary-50 dark:hover:bg-primary-900/20 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 w-full rounded-md border-2 px-8 py-3 text-center text-sm font-semibold transition-colors sm:w-auto"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
