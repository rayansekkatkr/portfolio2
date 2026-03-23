"use client";

import { Brain, Code2, Layers, Wrench, Database, Cloud, Zap, Lock, ShoppingCart } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/magic/Marquee";
import { GlowCard } from "@/components/ui/magic/GlowCard";
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
    <section
      ref={ref}
      id="skills"
      aria-label="Skills and services"
      className="py-28 sm:py-36"
    >
      {/* Tech marquee - cinematic ticker */}
      <div
        className="border-y py-4 overflow-hidden mb-24"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <Marquee className="[--gap:3rem] [--duration:25s]" pauseOnHover>
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] uppercase tracking-[0.2em] px-6 select-none flex items-center gap-4"
              style={{ color: "rgba(255,255,255,0.12)" }}
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

      <div className="px-6 lg:px-16 mx-auto max-w-6xl">
        {/* Section label with line */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur(0.4) }}
        >
          <div
            className="h-px w-8"
            style={{ background: "rgba(0,212,255,0.4)" }}
          />
          <p
            className="font-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "rgba(0,212,255,0.55)" }}
          >
            {t("skills.label")}
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-cormorant font-bold text-4xl sm:text-5xl lg:text-6xl mb-20"
          style={{ color: "#F0EEE9" }}
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
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: dur(0.35),
                  delay: del(0.1 + index * 0.04),
                }}
                className={service.featured ? "lg:col-span-2" : ""}
              >
                <GlowCard
                  className={`rounded-2xl transition-all duration-300 ${
                    service.featured ? "" : ""
                  }`}
                  glowColor={
                    service.featured
                      ? "rgba(0,212,255,0.12)"
                      : "rgba(0,212,255,0.08)"
                  }
                >
                  <div
                    className="relative p-8 sm:p-9 rounded-2xl h-full"
                    style={{
                      border: service.featured
                        ? "1px solid rgba(0,212,255,0.15)"
                        : "1px solid rgba(255,255,255,0.05)",
                      background: service.featured
                        ? "rgba(0,212,255,0.02)"
                        : "rgba(255,255,255,0.015)",
                    }}
                  >
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
                          color: service.featured
                            ? "rgba(0,212,255,0.7)"
                            : "rgba(255,255,255,0.3)",
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
                      className="text-lg font-semibold mb-2"
                      style={{ color: "rgba(255,255,255,0.88)" }}
                    >
                      {t(`skills.services.${service.key}.title`)}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {t(`skills.services.${service.key}.desc`)}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
