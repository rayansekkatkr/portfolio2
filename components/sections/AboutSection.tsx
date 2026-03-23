"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/magic/NumberTicker";
import { GlowCard } from "@/components/ui/magic/GlowCard";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { useTranslation } from "@/lib/i18n/useLanguage";

const STATS_KEYS = [
  { value: 3, suffix: "+", key: "about.stats.years.label" },
  { value: 30, suffix: "+", key: "about.stats.projects.label" },
  { value: 15, suffix: "+", key: "about.stats.technologies.label" },
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
    <section
      ref={ref}
      id="about"
      aria-label="About me"
      className="px-6 py-28 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Premium section divider */}
        <SectionDivider className="mb-20" />

        {/* Section label with line accent */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: dur(0.4), delay: del(0.1) }}
        >
          <div
            className="h-px w-8"
            style={{ background: "rgba(0,212,255,0.4)" }}
          />
          <p
            className="font-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "rgba(0,212,255,0.55)" }}
          >
            {t("about.label")}
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-cormorant font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-3xl"
          style={{ color: "#F0EEE9" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.05) }}
        >
          {headlineParts.map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} style={{ color: "#00D4FF" }}>{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h2>

        {/* Short positioning paragraph */}
        <motion.p
          className="max-w-2xl text-base leading-8 mb-20"
          style={{ color: "rgba(240,238,233,0.45)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.1) }}
        >
          {t("about.description")}
        </motion.p>

        {/* Stats row - premium card style */}
        <motion.div
          className="grid grid-cols-2 gap-px lg:grid-cols-4 mb-24 rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.15) }}
        >
          {STATS_KEYS.map((stat, i) => (
            <div
              key={stat.key}
              className="group relative p-8 sm:p-10 text-center transition-colors duration-300"
              style={{ background: "rgba(5,5,6,0.95)" }}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="font-mono text-3xl sm:text-4xl font-bold text-white mb-2">
                  {isInView ? (
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.15em]"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {t(stat.key)}
                </div>
              </div>
              {/* Bottom accent line on hover */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-12 transition-all duration-500"
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
              className="group grid gap-4 border-t py-12 md:grid-cols-[5rem_1fr_2fr] md:gap-8 md:items-start transition-all duration-300"
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
      </div>
    </section>
  );
}
