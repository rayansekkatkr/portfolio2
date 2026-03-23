"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/magic/NumberTicker";
import { BorderBeam } from "@/components/ui/magic/BorderBeam";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { AnimatedBrowser } from "@/components/ui/magic/AnimatedBrowser";
import { FacturxMockup } from "@/components/ui/magic/FacturxMockup";
import { DocExtractMockup } from "@/components/ui/magic/DocExtractMockup";
import { useTranslation } from "@/lib/i18n/useLanguage";

const PROJECTS = [
  {
    num: "01",
    name: "pont-facturx.com",
    url: "https://pont-facturx.com",
    translationKey: "project1",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Stripe", "Prisma"],
    results: [
      { value: 500, suffix: "+", key: "projects.project1.results.users" },
      { value: 98, suffix: "%", key: "projects.project1.results.satisfaction" },
      { value: 60, suffix: "%", key: "projects.project1.results.time" },
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
      { value: 99, suffix: ".2%", key: "projects.project2.results.accuracy" },
      { value: 8, suffix: "%", key: "projects.project2.results.exceptions" },
      { value: 80, suffix: "%", key: "projects.project2.results.time" },
    ],
    accentColor: "#10B981",
    secondaryColor: "#F59E0B",
    Mockup: DocExtractMockup,
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
      className="relative rounded-3xl overflow-hidden"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.015)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: dur(0.6), delay: del(0.15 + index * 0.12) }}
    >
      <BorderBeam
        size={220}
        duration={14 + index * 2}
        colorFrom={project.accentColor}
        colorTo={project.secondaryColor}
      />

      <div className="grid lg:grid-cols-2">
        {/* Left: content */}
        <div className="p-10 sm:p-14 flex flex-col justify-between order-2 lg:order-1">
          <div>
            {/* Project header */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className="font-mono text-[10px] tracking-widest"
                style={{ color: `${project.accentColor}66` }}
              >
                {project.num}
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-white/90 mb-2 break-all sm:break-normal">
              {project.name}
            </h3>

            <p
              className="font-mono text-[10px] uppercase tracking-[0.2em] mb-8"
              style={{ color: `${project.accentColor}88` }}
            >
              {t(`projects.${project.translationKey}.tagline`)}
            </p>

            <p
              className="text-sm leading-7 mb-10 max-w-md"
              style={{ color: "rgba(240,238,233,0.42)" }}
            >
              {t(`projects.${project.translationKey}.description`)}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-12">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-3 py-1.5 rounded-full"
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
            <div className="flex gap-8 sm:gap-10 mb-10 flex-wrap">
              {project.results.map((r) => (
                <div key={r.key}>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-white">
                    {isInView ? (
                      <NumberTicker value={r.value} suffix={r.suffix} />
                    ) : (
                      <span>0{r.suffix}</span>
                    )}
                  </div>
                  <div
                    className="text-[10px] mt-1.5 font-mono uppercase tracking-wide"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    {t(r.key)}
                  </div>
                </div>
              ))}
            </div>

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
          </div>
        </div>

        {/* Right: animated browser mockup */}
        <div
          className="relative h-[360px] lg:h-auto flex items-center justify-center p-10 lg:p-14 order-1 lg:order-2"
          style={{ background: "rgba(255,255,255,0.01)" }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse at 60% 50%, ${project.accentColor}14 0%, transparent 60%)`,
            }}
          />

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
          <div className="flex items-center gap-4 mb-6">
            <div
              className="h-px w-8"
              style={{ background: "rgba(0,212,255,0.4)" }}
            />
            <p
              className="font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ color: "rgba(0,212,255,0.5)" }}
            >
              {t("projects.label")}
            </p>
          </div>
          <h2
            className="font-cormorant font-bold text-4xl sm:text-5xl lg:text-6xl"
            style={{ color: "#F0EEE9" }}
          >
            {t("projects.headline")}
          </h2>
        </motion.div>

        {/* Projects stack */}
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
