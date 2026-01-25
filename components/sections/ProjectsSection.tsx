"use client";

import { ExternalLink, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguageContext } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function ProjectsSection() {
  const { t } = useLanguageContext();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  const project = {
    name: t("projects.featured.title"),
    tagline: t("projects.subtitle"),
    description: t("projects.featured.description"),
    technologies: [
      {
        name: "Python",
        color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      },
      { name: "React", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
      {
        name: "FastAPI",
        color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      },
      {
        name: "PostgreSQL",
        color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
      },
      { name: "Docker", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
    ],
    features: [
      t("projects.featured.featureList.invoicing"),
      t("projects.featured.featureList.dashboard"),
      t("projects.featured.featureList.integration"),
      t("projects.featured.featureList.automation"),
      t("projects.featured.featureList.responsive"),
    ],
    results: [
      {
        label: t("projects.featured.resultList.time.label"),
        value: t("projects.featured.resultList.time.value"),
      },
      {
        label: t("projects.featured.resultList.users.label"),
        value: t("projects.featured.resultList.users.value"),
      },
      {
        label: t("projects.featured.resultList.satisfaction.label"),
        value: t("projects.featured.resultList.satisfaction.value"),
      },
    ],
    liveUrl: "https://pont-facturx.com",
    image: "/images/facturx-screenshot.png",
  };

  return (
    <section
      ref={ref}
      id="projects"
      aria-label="Projects and work"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("projects.subtitle")}</p>
        </motion.div>

        <motion.div
          className="group mt-16 overflow-hidden rounded-[3rem] border border-slate-100 bg-background shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-charcoal-800"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.2,
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-foreground">{project.name}</h3>
                <p className="mt-2 text-lg text-primary">{project.tagline}</p>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t("projects.featured.technologies")}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t("projects.featured.features")}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats + CTA */}
              <div className="mt-10">
                {/* Results Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-border bg-background/50 p-4 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-primary">{result.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-hover inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-charcoal-950 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-charcoal-900"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("projects.featured.cta")}
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[500px] lg:h-auto overflow-hidden bg-gradient-to-br from-primary/5 to-indigo-100/40 dark:from-primary/5 dark:to-indigo-900/20">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                  <div className="overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                    <Image
                      src={project.image}
                      alt={`${project.name} - ${project.tagline}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl dark:bg-indigo-600/20"></div>
                </div>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
