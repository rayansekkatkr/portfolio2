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
              style={{ color: "var(--t-primary)" }}
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
              style={{ color: "var(--t-secondary)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur(0.5), delay: del(0.1) }}
            >
              {t("about.description")}
            </motion.p>
          </div>

          {/* Right: avatar glass card */}
          <motion.div
            className="mt-10 flex-shrink-0 lg:mt-0"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: dur(0.65), delay: del(0.2) }}
            whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.01 }}
          >
            {/* Ambient glow blob behind card */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.18) 0%, rgba(94,58,238,0.1) 50%, transparent 75%)",
                filter: "blur(20px)",
              }}
            />

            {/* Glass card */}
            <div
              className="relative h-56 w-52 overflow-hidden rounded-3xl lg:h-64 lg:w-60"
              style={{
                backdropFilter: "blur(28px) saturate(160%)",
                WebkitBackdropFilter: "blur(28px) saturate(160%)",
                background: "var(--card-bg)",
                boxShadow: "var(--card-shadow)",
                border: "1px solid var(--card-border)",
                borderTop: "1px solid var(--card-border-top)",
              }}
            >
              {/* Top-left reflection — glass catching light */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 rounded-t-3xl"
                style={{
                  background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
                }}
              />

              {/* Photo — PNG with transparent background */}
              <Image
                src="/images/profile.png"
                alt="Rayan Sekkat"
                fill
                className="object-cover object-top"
                style={{ filter: "contrast(1.02) saturate(0.92)" }}
                sizes="(max-width: 1024px) 208px, 240px"
                priority
              />

              {/* Bottom gradient fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-20"
                style={{
                  background: "linear-gradient(to top, rgba(5,5,6,0.55) 0%, transparent 100%)",
                }}
              />

              {/* Name badge inside card at bottom */}
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 font-mono text-[9px] tracking-widest whitespace-nowrap uppercase"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderTop: "1px solid var(--card-border-top)",
                  color: "var(--t-secondary)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                Rayan Sekkat · Full-Stack
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row - premium card style */}
        <motion.div
          className="mb-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4"
          style={{ background: "var(--stats-gap)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.15) }}
        >
          {STATS_KEYS.map((stat) => (
            <div
              key={stat.key}
              className="group relative p-8 text-center transition-colors duration-300 sm:p-10"
              style={{ background: "var(--stats-bg)" }}
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
                <div
                  className="mb-2 font-mono text-3xl font-bold sm:text-4xl"
                  style={{ color: "var(--t-primary)" }}
                >
                  {isInView ? (
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div
                  className="font-mono text-[10px] tracking-[0.15em] uppercase"
                  style={{ color: "var(--t-secondary)" }}
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
              style={{ borderColor: "var(--section-line)" }}
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
                style={{ color: "var(--t-primary)" }}
              >
                {t(`about.expertise.${num}.title`)}
              </h3>

              <p
                className="text-sm leading-7 transition-colors duration-300 group-hover:text-white/60"
                style={{ color: "var(--t-secondary)" }}
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
                border: "1px solid var(--section-line)",
                background: "var(--pill-bg)",
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
                style={{ color: "var(--t-primary)" }}
              >
                {t("about.testimonial.quote")}
              </p>
              <p
                className="font-mono text-[10px] tracking-widest uppercase"
                style={{ color: "var(--t-muted)" }}
              >
                {t("about.testimonial.author")}
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
