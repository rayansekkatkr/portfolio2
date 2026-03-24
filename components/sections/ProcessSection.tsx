"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { useTranslation, useLanguage } from "@/lib/i18n/useLanguage";
import fr from "@/public/locales/fr/common.json";
import en from "@/public/locales/en/common.json";
import kr from "@/public/locales/kr/common.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RAW: Record<string, any> = { fr, en, kr };

const STEPS = ["brief", "spec", "dev", "deploy", "support"] as const;

const STEP_ICONS = ["01", "02", "03", "04", "05"];

const PRICING = [
  {
    key: "mvp",
    accentColor: "#00D4FF",
    featured: false,
  },
  {
    key: "saas",
    accentColor: "#818cf8",
    featured: true,
  },
  {
    key: "consulting",
    accentColor: "#C9A55C",
    featured: false,
  },
] as const;

export default function ProcessSection() {
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
      id="process"
      aria-label="Process and pricing"
      className="px-6 py-28 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionDivider className="mb-20" />

        {/* Label */}
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: dur(0.4), delay: del(0.05) }}
        >
          <div className="h-px w-8" style={{ background: "rgba(0,212,255,0.4)" }} />
          <p
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(0,212,255,0.55)" }}
          >
            {t("process.label")}
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-cormorant mb-20 max-w-2xl text-4xl font-bold sm:text-5xl lg:text-6xl"
          style={{ color: "#F0EEE9" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.1) }}
        >
          {t("process.headline")}
        </motion.h2>

        {/* Steps */}
        <div className="mb-28 space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step}
              className="group grid gap-4 border-t py-10 transition-all duration-300 md:grid-cols-[5rem_1fr_2fr] md:items-start md:gap-8"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur(0.4), delay: del(0.2 + i * 0.07) }}
            >
              <span
                className="font-mono text-sm tabular-nums"
                style={{ color: "rgba(0,212,255,0.35)" }}
              >
                {STEP_ICONS[i]}
              </span>

              <h3
                className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#00D4FF]"
                style={{ color: "rgba(240,238,233,0.9)" }}
              >
                {t(`process.steps.${step}.title`)}
              </h3>

              <p
                className="text-sm leading-7 transition-colors duration-300 group-hover:text-white/50"
                style={{ color: "rgba(240,238,233,0.35)" }}
              >
                {t(`process.steps.${step}.desc`)}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
        </div>

        {/* Pricing */}
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: dur(0.4), delay: del(0.55) }}
        >
          <div className="h-px w-8" style={{ background: "rgba(0,212,255,0.4)" }} />
          <p
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(0,212,255,0.55)" }}
          >
            {t("process.pricing.label")}
          </p>
        </motion.div>

        <motion.h3
          className="font-cormorant mb-12 text-3xl font-bold sm:text-4xl"
          style={{ color: "#F0EEE9" }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.4), delay: del(0.6) }}
        >
          {t("process.pricing.headline")}
        </motion.h3>

        <div className="grid gap-4 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.key}
              className="relative rounded-2xl p-8"
              style={{
                border: plan.featured
                  ? `1px solid ${plan.accentColor}33`
                  : "1px solid rgba(255,255,255,0.06)",
                background: plan.featured
                  ? `rgba(${plan.accentColor === "#818cf8" ? "129,140,248" : "0,212,255"},0.04)`
                  : "rgba(255,255,255,0.015)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: dur(0.5),
                delay: del(0.65 + i * 0.08),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {plan.featured && (
                <div
                  className="mb-4 inline-block rounded-full px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase"
                  style={{ background: `${plan.accentColor}18`, color: plan.accentColor }}
                >
                  {t("process.pricing.popular")}
                </div>
              )}

              <div
                className="mb-1 font-mono text-[10px] tracking-[0.15em] uppercase"
                style={{ color: `${plan.accentColor}99` }}
              >
                {t(`process.pricing.plans.${plan.key}.name`)}
              </div>

              <div className="font-cormorant mb-1 text-4xl font-bold" style={{ color: "#F0EEE9" }}>
                {t(`process.pricing.plans.${plan.key}.price`)}
              </div>

              <div
                className="mb-6 font-mono text-[10px]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {t(`process.pricing.plans.${plan.key}.duration`)}
              </div>

              <ul className="mb-8 space-y-3">
                {tArray(`process.pricing.plans.${plan.key}.features`).map((f: string) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "rgba(240,238,233,0.5)" }}
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                      style={{ color: plan.accentColor }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-300"
                style={{
                  border: `1px solid ${plan.accentColor}33`,
                  color: plan.featured ? "#050506" : plan.accentColor,
                  background: plan.featured ? plan.accentColor : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!plan.featured) e.currentTarget.style.background = `${plan.accentColor}12`;
                }}
                onMouseLeave={(e) => {
                  if (!plan.featured) e.currentTarget.style.background = "transparent";
                }}
              >
                {t("process.pricing.cta")}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
