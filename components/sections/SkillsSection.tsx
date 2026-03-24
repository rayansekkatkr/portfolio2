"use client";

import {
  Brain,
  Code2,
  Layers,
  Wrench,
  Database,
  Cloud,
  Zap,
  Lock,
  ShoppingCart,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/magic/Marquee";
import { GlowCard } from "@/components/ui/magic/GlowCard";
import { CardReveal } from "@/components/ui/CardReveal";
import { useTranslation } from "@/lib/i18n/useLanguage";

const SERVICES = [
  { icon: Brain, key: "ai", featured: true },
  { icon: Code2, key: "backend" },
  { icon: Layers, key: "saas" },
  { icon: Wrench, key: "modernization" },
  { icon: Database, key: "database" },
  { icon: ShoppingCart, key: "payments" },
  { icon: Cloud, key: "devops" },
  { icon: Lock, key: "security" },
  { icon: Zap, key: "performance" },
];

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Supabase",
  "OpenAI",
  "LangChain",
  "Stripe",
  "Vercel",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  return (
    <section ref={ref} id="skills" aria-label="Skills and services" className="py-28 sm:py-36">
      {/* Tech marquee - cinematic ticker */}
      <div
        className="mb-24 overflow-hidden border-y py-4"
        style={{ borderColor: "var(--marquee-border)" }}
      >
        <Marquee className="[--duration:25s] [--gap:3rem]" pauseOnHover>
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-4 px-6 font-mono text-[11px] tracking-[0.2em] uppercase select-none"
              style={{ color: "var(--marquee-text)" }}
            >
              <span>{tech}</span>
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full"
                style={{ background: "rgba(0,212,255,0.25)" }}
              />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* Section label with line */}
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.4) }}
        >
          <div className="h-px w-8" style={{ background: "rgba(0,212,255,0.4)" }} />
          <p
            className="font-mono text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(0,212,255,0.55)" }}
          >
            {t("skills.label")}
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-cormorant mb-20 text-4xl font-bold sm:text-5xl lg:text-6xl"
          style={{ color: "var(--t-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.5), delay: del(0.05) }}
        >
          {t("skills.headline")}
        </motion.h2>

        {/* Bento grid service cards */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <CardReveal
                key={service.key}
                index={index}
                className={service.featured ? "lg:col-span-2" : ""}
              >
                <GlowCard
                  className={`rounded-2xl transition-all duration-300 ${
                    service.featured ? "" : ""
                  }`}
                  glowColor={service.featured ? "rgba(0,212,255,0.12)" : "rgba(0,212,255,0.08)"}
                >
                  <div
                    className="relative h-full overflow-hidden rounded-2xl p-8 sm:p-9"
                    style={{
                      background: "var(--card-bg)",
                      backdropFilter: "var(--card-backdrop)",
                      WebkitBackdropFilter: "var(--card-backdrop)",
                      border: "1px solid var(--card-border)",
                      borderTop: service.featured
                        ? "1px solid rgba(0,212,255,0.28)"
                        : "1px solid var(--card-border-top)",
                      boxShadow: "var(--card-shadow)",
                    }}
                  >
                    {/* Top reflection gradient — simulates glass catching light */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-2xl"
                      style={{
                        background: service.featured
                          ? "linear-gradient(to bottom, rgba(0,212,255,0.04) 0%, transparent 100%)"
                          : "linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, transparent 100%)",
                      }}
                    />
                    {/* Featured badge */}
                    {service.featured && (
                      <span
                        className="mb-6 inline-block font-mono text-[9px] tracking-[0.2em] uppercase"
                        style={{ color: "rgba(0,212,255,0.55)" }}
                      >
                        {t("skills.coreExpertise")}
                      </span>
                    )}

                    {/* Icon with glow */}
                    <div className="relative mb-6 inline-flex">
                      <Icon
                        className="h-7 w-7"
                        style={{
                          color: service.featured ? "rgba(0,212,255,0.85)" : "var(--t-secondary)",
                        }}
                        strokeWidth={1.5}
                      />
                      {service.featured && (
                        <div
                          aria-hidden="true"
                          className="absolute -inset-3 rounded-full opacity-40 blur-xl"
                          style={{ background: "rgba(0,212,255,0.2)" }}
                        />
                      )}
                    </div>

                    <h3
                      className="mb-2 text-lg font-semibold"
                      style={{ color: "var(--t-primary)" }}
                    >
                      {t(`skills.services.${service.key}.title`)}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--t-secondary)" }}>
                      {t(`skills.services.${service.key}.desc`)}
                    </p>
                  </div>
                </GlowCard>
              </CardReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
