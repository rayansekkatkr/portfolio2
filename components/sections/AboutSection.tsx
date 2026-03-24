"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/magic/NumberTicker";
import { GlowCard } from "@/components/ui/magic/GlowCard";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { useTranslation } from "@/lib/i18n/useLanguage";

const STATS_KEYS = [
  { value: 3, suffix: "", key: "about.stats.saas.label" },
  { value: 30, suffix: "+", key: "about.stats.projects.label" },
  { value: 3, suffix: "+", key: "about.stats.years.label" },
  { value: 100, suffix: "%", key: "about.stats.satisfaction.label" },
];

const EXPERTISE_NUMS = ["01", "02", "03"] as const;

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  // Parse headline with <accent> tags
  const rawHeadline = t("about.headline");
  const headlineParts = rawHeadline.split(/<accent>(.*?)<\/accent>/);

  return (
    <section ref={ref} id="about" aria-label="About me" className="px-6 py-28 sm:py-36 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Premium section divider */}
        <SectionDivider className="mb-20" />

        {/* Section label with line accent */}
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: dur(0.4), delay: del(0.1) }}
        >
          <div className="h-px w-8" style={{ background: "rgba(0,212,255,0.4)" }} />
          <p
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(0,212,255,0.55)" }}
          >
            {t("about.label")}
          </p>
        </motion.div>

        {/* Headline + photo — 2 col on desktop */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left: text */}
          <div className="flex-1">
            <motion.h2
              className="font-cormorant mb-6 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: "#F0EEE9" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur(0.5), delay: del(0.05) }}
            >
              {headlineParts.map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} style={{ color: "#00D4FF" }}>
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </motion.h2>

            <motion.p
              className="max-w-xl text-base leading-8"
              style={{ color: "rgba(240,238,233,0.5)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur(0.5), delay: del(0.1) }}
            >
              {t("about.description")}
            </motion.p>
          </div>

          {/* Right: avatar */}
          <motion.div
            className="mt-10 flex-shrink-0 lg:mt-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: dur(0.6), delay: del(0.2) }}
          >
            <div className="relative h-52 w-52 lg:h-60 lg:w-60">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, rgba(0,212,255,0.18) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
              {/* Outer border */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ border: "1px solid rgba(0,212,255,0.18)" }}
              />
              {/* Photo */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/avatar.jpg"
                  alt="Rayan Sekkat"
                  fill
                  className="object-cover object-top"
                  style={{ filter: "contrast(1.05) saturate(0.85)" }}
                  sizes="(max-width: 1024px) 208px, 240px"
                  priority
                />
                {/* Subtle dark overlay on bottom for depth */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(5,5,6,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>
              {/* Name tag */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-widest whitespace-nowrap uppercase"
                style={{
                  background: "rgba(5,5,6,0.9)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  color: "rgba(0,212,255,0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Rayan Sekkat · Full-Stack Engineer
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row - premium card style */}
        <motion.div
          className="mb-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4"
          style={{ background: "rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.15) }}
        >
          {STATS_KEYS.map((stat) => (
            <div
              key={stat.key}
              className="group relative p-8 text-center transition-colors duration-300 sm:p-10"
              style={{ background: "rgba(5,5,6,0.95)" }}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="mb-2 font-mono text-3xl font-bold text-white sm:text-4xl">
                  {isInView ? (
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div
                  className="font-mono text-[10px] tracking-[0.15em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {t(stat.key)}
                </div>
              </div>
              {/* Bottom accent line on hover */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-500 group-hover:w-12"
                style={{ background: "rgba(0,212,255,0.4)" }}
              />
            </div>
          ))}
        </motion.div>

        {/* Expertise areas - premium accordion style */}
        <div className="space-y-0">
          {EXPERTISE_NUMS.map((num, i) => (
            <motion.div
              key={num}
              className="group grid gap-4 border-t py-12 transition-all duration-300 md:grid-cols-[5rem_1fr_2fr] md:items-start md:gap-8"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: dur(0.4),
                delay: del(0.25 + i * 0.08),
              }}
            >
              <span
                className="font-mono text-sm tabular-nums"
                style={{ color: "rgba(0,212,255,0.35)" }}
              >
                {num}
              </span>

              <h3
                className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#00D4FF]"
                style={{ color: "rgba(240,238,233,0.9)" }}
              >
                {t(`about.expertise.${num}.title`)}
              </h3>

              <p
                className="text-sm leading-7 transition-colors duration-300 group-hover:text-white/50"
                style={{ color: "rgba(240,238,233,0.35)" }}
              >
                {t(`about.expertise.${num}.desc`)}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.45) }}
        >
          <p
            className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(0,212,255,0.4)" }}
          >
            <span className="h-px w-6" style={{ background: "rgba(0,212,255,0.3)" }} />
            {t("about.testimonial.label")}
          </p>
          <GlowCard glowColor="rgba(0,212,255,0.06)">
            <div
              className="relative overflow-hidden rounded-2xl p-8 sm:p-10"
              style={{
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.015)",
              }}
            >
              {/* Giant quote mark */}
              <span
                aria-hidden="true"
                className="font-cormorant absolute -top-2 left-6 select-none"
                style={{ fontSize: "6rem", lineHeight: 1, color: "rgba(0,212,255,0.08)" }}
              >
                &ldquo;
              </span>
              <p
                className="relative mb-6 max-w-2xl text-base leading-8 sm:text-lg"
                style={{ color: "rgba(240,238,233,0.65)" }}
              >
                {t("about.testimonial.quote")}
              </p>
              <p
                className="font-mono text-[10px] tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                — {t("about.testimonial.author")}
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
