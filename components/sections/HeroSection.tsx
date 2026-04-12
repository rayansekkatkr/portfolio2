"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, FileDown } from "lucide-react";
import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/magic/ShimmerButton";
import { MagneticButton } from "@/components/ui/magic/MagneticButton";
import { DotMatrix } from "@/components/ui/DotMatrix";
import { useTranslation } from "@/lib/i18n/useLanguage";

const spring = { type: "spring" as const, damping: 28, stiffness: 100 };

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: {}, animate: {} }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { ...spring, delay },
        };

  const charReveal = (delay: number) =>
    prefersReducedMotion
      ? { initial: {}, animate: {} }
      : {
          initial: { y: "120%", rotateX: -40 },
          animate: { y: 0, rotateX: 0 },
          transition: {
            type: "spring" as const,
            damping: 30,
            stiffness: 80,
            delay,
          },
        };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero introduction"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-20 md:py-32 lg:px-16 xl:px-24"
    >
      {/* Dot matrix background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <DotMatrix />
        {/* Edge vignettes for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, transparent 40%, var(--page-bg) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, var(--page-bg) 0%, transparent 35%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--page-bg) 0%, transparent 20%)",
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        style={prefersReducedMotion ? {} : { y: textY, opacity }}
      >
        {/* Available badge */}
        <motion.div {...fadeUp(0.05)} className="mb-12 inline-flex">
          <span
            className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2 font-mono text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm"
            style={{
              borderColor: "rgba(52,211,153,0.15)",
              background: "rgba(52,211,153,0.04)",
              color: "rgba(52,211,153,0.9)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {t("hero.available")}
          </span>
        </motion.div>

        {/* Headline - dramatic oversized type */}
        <div className="relative">
          {/* RAYAN */}
          <div className="overflow-hidden" style={{ perspective: "600px" }}>
            <motion.h1
              {...charReveal(0.12)}
              className="font-cormorant leading-[0.82] font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 13vw, 13rem)", color: "var(--t-primary)" }}
            >
              RAYAN
            </motion.h1>
          </div>

          {/* SEKKAT. */}
          <div className="overflow-hidden" style={{ perspective: "600px" }}>
            <motion.div {...charReveal(0.22)} className="flex items-baseline gap-0 leading-[0.82]">
              <h1
                className="font-cormorant font-bold tracking-[-0.02em]"
                style={{ fontSize: "clamp(3rem, 13vw, 13rem)", color: "var(--t-primary)" }}
              >
                SEKKAT
              </h1>
              <motion.span
                className="font-cormorant font-bold"
                style={{
                  fontSize: "clamp(5rem, 15vw, 13rem)",
                  lineHeight: 0.82,
                }}
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.6 }}
              >
                <span style={{ color: "#00D4FF" }}>.</span>
              </motion.span>
            </motion.div>
          </div>

          {/* Floating role label positioned creatively */}
          <motion.div {...fadeUp(0.5)} className="absolute -right-2 bottom-2 hidden lg:block">
            <div
              className="flex items-center gap-3 rounded-full border px-5 py-2.5"
              style={{
                borderColor: "var(--pill-border)",
                background: "var(--nav-bg)",
              }}
            >
              <div className="h-6 w-px" style={{ background: "rgba(0,212,255,0.3)" }} />
              <span className="hero-gradient-text font-mono text-[10px] tracking-[0.25em] uppercase">
                {t("hero.role")}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Divider line - animated beam */}
        <motion.div
          aria-hidden="true"
          initial={prefersReducedMotion ? {} : { scaleX: 0, opacity: 0 }}
          animate={prefersReducedMotion ? {} : { scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(0,212,255,0.4) 25%, rgba(201,165,92,0.2) 60%, transparent 100%)",
          }}
        />

        {/* Role (mobile) + description + CTAs */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div {...fadeUp(0.5)}>
            <p className="hero-gradient-text mb-3 font-mono text-[10px] tracking-[0.25em] uppercase lg:hidden">
              {t("hero.role")}
            </p>
            <p
              className="max-w-md text-base leading-relaxed md:text-lg"
              style={{ color: "var(--t-secondary)" }}
            >
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <MagneticButton strength={0.15} className="inline-flex">
              <ShimmerButton
                as="a"
                href="#contact"
                background="#00D4FF"
                shimmerColor="rgba(255,255,255,0.2)"
                className="group px-8 py-4 text-sm font-bold text-[#050506] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {t("hero.cta.primary")}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </ShimmerButton>
            </MagneticButton>

            <MagneticButton strength={0.15} className="inline-flex">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border px-8 py-4 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: "var(--section-line)",
                  color: "var(--t-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
                  e.currentTarget.style.background = "rgba(0,212,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {t("hero.cta.secondary")}
                <ArrowDown
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* CV Download */}
        <motion.div {...fadeUp(0.65)} className="mt-4 flex">
          <a
            href="/Rayan_Sekkat_CV_2026_english.pdf"
            download
            className="group inline-flex items-center gap-2.5 rounded-full border px-6 py-3 font-mono text-[10px] tracking-[0.15em] uppercase transition-all duration-200"
            style={{
              borderColor: "rgba(0,212,255,0.2)",
              background: "rgba(0,212,255,0.04)",
              color: "rgba(0,212,255,0.8)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
              e.currentTarget.style.background = "rgba(0,212,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
              e.currentTarget.style.background = "rgba(0,212,255,0.04)";
            }}
          >
            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
            {t("hero.downloadCV")}
          </a>
        </motion.div>

        {/* Trust signals — social + production badge */}
        <motion.div {...fadeUp(0.72)} className="mt-10 flex flex-wrap items-center gap-4">
          {/* 3 SaaS badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-[0.15em]"
            style={{
              borderColor: "rgba(0,212,255,0.2)",
              background: "rgba(0,212,255,0.04)",
              color: "rgba(0,212,255,0.8)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#00D4FF" }} />
            {t("hero.saasProduction")}
          </span>

          <div className="hidden h-3 w-px sm:block" style={{ background: "var(--section-line)" }} />

          {/* GitHub */}
          <a
            href="https://github.com/rayansekkatkr"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-wide transition-all duration-200"
            style={{
              borderColor: "var(--pill-border)",
              color: "var(--t-secondary)",
              background: "var(--pill-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rayan-sekkat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-wide transition-all duration-200"
            style={{
              borderColor: "var(--pill-border)",
              color: "var(--t-secondary)",
              background: "var(--pill-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(10,102,194,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>

        {/* Bottom ticker - cinematic lower third */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-10 flex items-center gap-8 border-t pt-6 md:mt-16"
          style={{ borderColor: "var(--section-line)" }}
        >
          <div className="hidden items-center gap-6 lg:flex">
            {["Next.js", "TypeScript", "NestJS", "Python", "Stripe"].map((tech, i) => (
              <span
                key={tech}
                className="flex items-center gap-4 font-mono text-[11px] tracking-wide"
                style={{ color: "var(--t-muted)" }}
              >
                {tech}
                {i < 4 && (
                  <span
                    aria-hidden="true"
                    className="h-3 w-px"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
