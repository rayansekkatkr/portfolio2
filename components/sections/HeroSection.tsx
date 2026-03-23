"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/magic/ShimmerButton";
import { MagneticButton } from "@/components/ui/magic/MagneticButton";
import { useTranslation } from "@/lib/i18n/useLanguage";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
});

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
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: {}, animate: {} }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { ...spring, delay },
        };

  const slideUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: {}, animate: {} }
      : {
          initial: { y: "110%" },
          animate: { y: 0 },
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-32 lg:px-16 xl:px-24"
    >
      {/* 3D scene */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <HeroScene />
        {/* Left vignette for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #050506 20%, rgba(5,5,6,0.72) 50%, transparent 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #050506 0%, transparent 30%)",
          }}
        />
        {/* Top subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.03) 0%, transparent 50%)",
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
            className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-[10px] font-mono tracking-[0.2em] uppercase backdrop-blur-sm"
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
              className="font-cormorant font-bold leading-[0.82] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(5rem, 15vw, 13rem)" }}
            >
              RAYAN
            </motion.h1>
          </div>

          {/* SEKKAT. */}
          <div className="overflow-hidden" style={{ perspective: "600px" }}>
            <motion.div
              {...charReveal(0.22)}
              className="flex items-baseline gap-0 leading-[0.82]"
            >
              <h1
                className="font-cormorant font-bold tracking-[-0.02em] text-white"
                style={{ fontSize: "clamp(5rem, 15vw, 13rem)" }}
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
          <motion.div
            {...fadeUp(0.5)}
            className="absolute -right-2 bottom-2 hidden lg:block"
          >
            <div
              className="flex items-center gap-3 rounded-full border px-5 py-2.5 backdrop-blur-md"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="h-6 w-px"
                style={{ background: "rgba(0,212,255,0.3)" }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "rgba(0,212,255,0.6)" }}
              >
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
            <p
              className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] lg:hidden"
              style={{ color: "rgba(0,212,255,0.55)" }}
            >
              {t("hero.role")}
            </p>
            <p
              className="max-w-md text-lg leading-relaxed"
              style={{ color: "rgba(240,238,233,0.45)" }}
            >
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <MagneticButton strength={0.15} className="inline-flex">
              <ShimmerButton
                as="a"
                href="#contact"
                background="#00D4FF"
                shimmerColor="rgba(255,255,255,0.2)"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-[#050506] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "rgba(240,238,233,0.55)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)";
                  e.currentTarget.style.color = "rgba(240,238,233,1)";
                  e.currentTarget.style.background = "rgba(0,212,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(240,238,233,0.55)";
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

        {/* Bottom ticker - cinematic lower third */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-24 flex items-center gap-8 border-t pt-6"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="hidden items-center gap-6 lg:flex">
            {["Next.js", "React", "TypeScript", "Python", "AI"].map((tech, i) => (
              <span
                key={tech}
                className="flex items-center gap-4 font-mono text-[11px] tracking-wide"
                style={{ color: "rgba(255,255,255,0.16)" }}
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

          {/* Scroll indicator */}
          <motion.div
            className="ml-auto flex items-center gap-3"
            animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className="font-mono text-[10px] tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.12)" }}
            >
              {t("hero.location")}
            </span>
            <div
              className="h-8 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,212,255,0.3), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
