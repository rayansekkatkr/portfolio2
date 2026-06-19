"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { useTranslation, useLanguage } from "@/lib/i18n/useLanguage";
import fr from "@/public/locales/fr/common.json";
import en from "@/public/locales/en/common.json";
import kr from "@/public/locales/kr/common.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RAW: Record<string, any> = { fr, en, kr };

const JOBS = ["job1", "job2"] as const;

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  const { locale } = useLanguage();

  const tArray = (key: string): string[] => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = RAW[locale] ?? RAW["fr"];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) value = value[k];
      else return [];
    }
    return Array.isArray(value) ? value : [];
  };

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  return (
    <section
      ref={ref}
      id="experience"
      aria-label="Professional experience"
      className="px-6 py-28 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionDivider className="mb-20" />

        {/* Section label */}
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
            {t("experience.label")}
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-cormorant mb-16 text-4xl font-bold sm:text-5xl lg:text-6xl"
          style={{ color: "var(--t-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.05) }}
        >
          {t("experience.headline")}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {JOBS.map((job, i) => (
            <motion.div
              key={job}
              className="relative grid gap-6 border-l pb-14 pl-8 last:pb-0"
              style={{ borderColor: "var(--section-line)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur(0.45), delay: del(0.15 + i * 0.1) }}
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] h-[9px] w-[9px] rounded-full"
                style={{ background: "#00D4FF", boxShadow: "0 0 24px rgba(0,212,255,0.18)" }}
              />
              <span
                aria-hidden="true"
                className="absolute top-3.5 -left-px bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.25), transparent)" }}
              />

              <div>
                {/* Role + company */}
                <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold sm:text-2xl" style={{ color: "var(--t-primary)" }}>
                    {t(`experience.${job}.role`)}
                  </h3>
                  <span className="text-base" style={{ color: "#00D4FF" }}>
                    · {t(`experience.${job}.company`)}
                  </span>
                </div>

                {/* Period + type */}
                <div
                  className="flex flex-wrap gap-3 font-mono text-[10px] tracking-[0.15em] uppercase"
                  style={{ color: "var(--t-muted)" }}
                >
                  <span>{t(`experience.${job}.period`)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t(`experience.${job}.type`)}</span>
                </div>

                {/* Bullet points */}
                <ul className="mt-6 mb-7 flex max-w-2xl flex-col gap-2.5">
                  {tArray(`experience.${job}.points`).map((pt, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-7"
                      style={{ color: "var(--t-secondary)" }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ background: "rgba(0,212,255,0.5)" }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {tArray(`experience.${job}.tech`).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full px-3 py-1.5 font-mono text-[10px]"
                      style={{
                        border: "1px solid rgba(255,255,255,0.06)",
                        background: "rgba(255,255,255,0.02)",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
