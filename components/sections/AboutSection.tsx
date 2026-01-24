"use client";

import { Sparkles, Code2, Database, Brain, Rocket, Users, Award, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguageContext } from "@/lib/i18n/LanguageContext";

export default function AboutSection() {
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
  const stats = [
    {
      label: t("about.stats.experience.label"),
      value: t("about.stats.experience.value"),
      icon: Clock,
    },
    {
      label: t("about.stats.projects.label"),
      value: t("about.stats.projects.value"),
      icon: Rocket,
    },
    { label: t("about.stats.clients.label"), value: t("about.stats.clients.value"), icon: Users },
    {
      label: t("about.stats.technologies.label"),
      value: t("about.stats.technologies.value"),
      icon: Award,
    },
  ];

  const technologies = [
    {
      name: t("about.techStack.items.react"),
      icon: Code2,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: t("about.techStack.items.typescript"),
      icon: Code2,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: t("about.techStack.items.nodejs"),
      icon: Code2,
      color: "text-green-600 dark:text-green-400",
    },
    {
      name: t("about.techStack.items.python"),
      icon: Brain,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      name: t("about.techStack.items.postgresql"),
      icon: Database,
      color: "text-blue-700 dark:text-blue-300",
    },
    {
      name: t("about.techStack.items.docker"),
      icon: Sparkles,
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section ref={ref} id="about" className="bg-white px-6 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          {t("about.title")}
        </motion.h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Biography */}
          <motion.div
            className="space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <p>{t("about.biography.intro")}</p>
            <p>{t("about.biography.expertise")}</p>
            <p>{t("about.biography.passion")}</p>
          </motion.div>

          {/* Stats & Technologies */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.3,
            }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800"
                  >
                    <Icon className="text-primary-600 dark:text-primary-400 mx-auto mb-3 h-8 w-8" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                {t("about.techStack.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 rounded-lg bg-gray-50 p-4 transition-shadow hover:shadow-md dark:bg-gray-800"
                    >
                      <Icon className={`h-6 w-6 ${tech.color}`} />
                      <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
