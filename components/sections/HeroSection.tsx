"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguageContext } from "@/lib/i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguageContext();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullTitle = t("hero.title");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (prefersReducedMotion || !fullTitle) {
      setDisplayedTitle(fullTitle);
      setIsTypingComplete(true);
      return;
    }

    setDisplayedTitle("");
    setIsTypingComplete(false);
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50); // 50ms per character for natural typing speed

    return () => clearInterval(typingInterval);
  }, [fullTitle, prefersReducedMotion]);

  const duration = prefersReducedMotion ? 0 : 0.5;
  const delay = prefersReducedMotion ? 0 : 0.2;

  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Gradient blur backgrounds */}
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-indigo-200/40 blur-[120px] dark:bg-indigo-900/20" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Profile Image with glass badge */}
          <motion.div
            className="group relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-[2.5rem] border-6 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105 dark:border-charcoal-800 lg:h-80 lg:w-80">
              <Image
                src="/images/profile.jpg"
                alt="Rayan Sekkat - AI-Powered Full-Stack Developer"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
            {/* Glass badge overlay */}
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground">Expertise</p>
                  <p className="text-sm font-bold text-foreground">Next.js & OpenAI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Availability badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              DISPONIBLE
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t("hero.name")}
            </h1>
            <h2 className="mt-4 bg-gradient-to-r from-primary via-indigo-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl dark:from-primary dark:via-indigo-400 dark:to-purple-400">
              <span className="sr-only">{fullTitle}</span>
              <span aria-hidden="true">
                {displayedTitle}
                {!isTypingComplete && (
                  <motion.span
                    className="ml-1 inline-block h-8 w-0.5 bg-primary"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="glow-hover group w-full rounded-2xl bg-primary px-8 py-4 text-center text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
              >
                {t("hero.cta.contact")}
              </a>
              <a
                href="#projects"
                className="group w-full rounded-2xl border-2 border-border bg-background/50 px-8 py-4 text-center text-sm font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
              >
                {t("hero.cta.projects")}
              </a>
            </div>

            {/* Social proof badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2 grayscale transition-all duration-300 hover:grayscale-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground">Top Rated</p>
                  <p className="text-sm font-bold text-foreground">5.0 ★★★★★</p>
                </div>
              </div>
              <div className="flex items-center gap-2 grayscale transition-all duration-300 hover:grayscale-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                  <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-muted-foreground">Verified</p>
                  <p className="text-sm font-bold text-foreground">Expert-Vetted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
