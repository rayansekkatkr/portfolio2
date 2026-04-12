"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/magic/NumberTicker";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { AnimatedBrowser } from "@/components/ui/magic/AnimatedBrowser";
import { FacturxMockup } from "@/components/ui/magic/FacturxMockup";
import { DocExtractMockup } from "@/components/ui/magic/DocExtractMockup";
import { Pick4meMockup } from "@/components/ui/magic/Pick4meMockup";
import { StampeoMockup } from "@/components/ui/magic/StampeoMockup";
import { useTranslation } from "@/lib/i18n/useLanguage";

const PROJECTS = [
  {
    num: "01",
    name: "pont-facturx.com",
    url: "https://pont-facturx.com",
    translationKey: "project1",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Stripe", "Prisma"],
    results: [
      { value: 99.9, suffix: "%", decimalPlaces: 1, key: "projects.project1.results.precision" },
      { value: 10, suffix: "s", decimalPlaces: 0, key: "projects.project1.results.speed" },
      { value: 60, suffix: "%", decimalPlaces: 0, key: "projects.project1.results.time" },
    ],
    accentColor: "#8B5CF6",
    secondaryColor: "#06B6D4",
    Mockup: FacturxMockup,
  },
  {
    num: "02",
    name: "getdocextract.com",
    url: "https://www.getdocextract.com",
    translationKey: "project2",
    technologies: ["Next.js", "TypeScript", "Python", "OpenAI", "PostgreSQL", "REST API"],
    results: [
      { value: 99.2, suffix: "%", decimalPlaces: 1, key: "projects.project2.results.accuracy" },
      { value: 8, suffix: "%", decimalPlaces: 0, key: "projects.project2.results.exceptions" },
      { value: 80, suffix: "%", decimalPlaces: 0, key: "projects.project2.results.time" },
    ],
    accentColor: "#10B981",
    secondaryColor: "#F59E0B",
    Mockup: DocExtractMockup,
  },
  {
    num: "03",
    name: "pick4me.be",
    url: "https://pick4me.be",
    demoUrl: "https://pick4me.be",
    translationKey: "project3",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Mapbox",
      "Stripe",
      "Revolut API",
      "Docker",
    ],
    results: [
      { value: 100, suffix: "ms", decimalPlaces: 0, key: "projects.project3.results.latency" },
      { value: 2, suffix: "+", decimalPlaces: 0, key: "projects.project3.results.integrations" },
      { value: 99.9, suffix: "%", decimalPlaces: 1, key: "projects.project3.results.uptime" },
    ],
    accentColor: "#F97316",
    secondaryColor: "#EF4444",
    Mockup: Pick4meMockup,
  },
  {
    num: "04",
    name: "stampeo.app",
    url: "https://stampeo.app",
    demoUrl: "https://stampeo.app",
    translationKey: "project4",
    technologies: [
      "Next.js",
      "TypeScript",
      "Apple Wallet",
      "Google Wallet",
      "Stripe",
      "PostgreSQL",
    ],
    results: [
      { value: 5, suffix: "min", decimalPlaces: 0, key: "projects.project4.results.setup" },
      { value: 2, suffix: "", decimalPlaces: 0, key: "projects.project4.results.wallets" },
      { value: 100, suffix: "%", decimalPlaces: 0, key: "projects.project4.results.wallet" },
    ],
    accentColor: "#F59E0B",
    secondaryColor: "#EF4444",
    Mockup: StampeoMockup,
  },
] as const;

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  isInView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl"
      style={{
        background: "var(--card-bg)",
        backdropFilter: "var(--card-backdrop)",
        WebkitBackdropFilter: "var(--card-backdrop)",
        border: "1px solid var(--card-border)",
        borderTop: "1px solid var(--card-border-top)",
        boxShadow: "var(--card-shadow)",
      }}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 48, scale: 0.97 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: dur(0.65), delay: del(index * 0.1), ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid lg:grid-cols-2">
        {/* Left: content */}
        <div className="relative order-2 flex flex-col justify-between p-10 sm:p-14 lg:order-1">
          <div>
            {/* Project header */}
            <div className="mb-8 flex items-center gap-4">
              <span
                className="font-mono text-[10px] tracking-widest"
                style={{ color: `${project.accentColor}66` }}
              >
                {project.num}
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>

            <h3
              className="mb-2 text-2xl font-semibold break-all sm:text-3xl sm:break-normal"
              style={{ color: "var(--t-primary)" }}
            >
              {project.name}
            </h3>

            <p
              className="mb-8 font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: `${project.accentColor}88` }}
            >
              {t(`projects.${project.translationKey}.tagline`)}
            </p>

            <p className="mb-10 max-w-md text-sm leading-7" style={{ color: "var(--t-secondary)" }}>
              {t(`projects.${project.translationKey}.description`)}
            </p>

            {/* Tech stack pills */}
            <div className="mb-12 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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

          {/* Metrics + CTA */}
          <div>
            <div className="mb-10 flex flex-wrap gap-8 sm:gap-10">
              {project.results.map((r) => (
                <div key={r.key}>
                  <div
                    className="font-mono text-2xl font-bold sm:text-3xl"
                    style={{ color: "var(--t-primary)" }}
                  >
                    {isInView ? (
                      <NumberTicker
                        value={r.value}
                        suffix={r.suffix}
                        decimalPlaces={r.decimalPlaces}
                      />
                    ) : (
                      <span>0{r.suffix}</span>
                    )}
                  </div>
                  <div
                    className="mt-1.5 font-mono text-[10px] tracking-wide uppercase"
                    style={{ color: "var(--t-muted)" }}
                  >
                    {t(r.key)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border px-7 py-3.5 text-sm font-medium transition-all duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "rgba(240,238,233,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.accentColor}4D`;
                  e.currentTarget.style.color = "#F0EEE9";
                  e.currentTarget.style.background = `${project.accentColor}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(240,238,233,0.6)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {t("projects.visitSite")}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              {"demoUrl" in project && (
                <a
                  href={(project as { demoUrl: string }).demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-sm font-medium transition-all duration-300"
                  style={{
                    background: `${project.accentColor}18`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}33`,
                  }}
                >
                  {t("projects.liveDemo")}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: animated browser mockup */}
        <div
          className="relative order-1 flex h-[360px] items-center justify-center p-10 lg:order-2 lg:h-auto lg:p-14"
          style={{ background: "rgba(255,255,255,0.01)" }}
        >
          <div className="relative w-full max-w-lg">
            <AnimatedBrowser
              url={project.url.replace("https://", "").replace("www.", "")}
              accentColor={project.accentColor}
              secondaryColor={project.secondaryColor}
            >
              <project.Mockup />
            </AnimatedBrowser>

            {/* Reflection glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-3xl opacity-20 blur-3xl"
              style={{
                background: `radial-gradient(circle, ${project.accentColor}20 0%, transparent 70%)`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);

  return (
    <section
      ref={ref}
      id="projects"
      aria-label="Featured projects"
      className="px-6 py-28 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section divider */}
        <SectionDivider className="mb-20" />

        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: dur(0.5) }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-8" style={{ background: "rgba(0,212,255,0.4)" }} />
            <p
              className="font-mono text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(0,212,255,0.5)" }}
            >
              {t("projects.label")}
            </p>
          </div>
          <h2
            className="font-cormorant text-4xl font-bold sm:text-5xl lg:text-6xl"
            style={{ color: "var(--t-primary)" }}
          >
            {t("projects.headline")}
          </h2>
        </motion.div>

        {/* Projects stack */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
