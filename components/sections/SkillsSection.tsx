"use client";

import {
  Brain,
  Code2,
  Database,
  Lock,
  ShoppingCart,
  Wrench,
  Cloud,
  Layers,
  Bot,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguageContext } from "@/lib/i18n/LanguageContext";

export default function SkillsSection() {
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
  const services = [
    {
      icon: Brain,
      title: t("services.items.ai.title"),
      description: t("services.items.ai.description"),
      featured: true,
    },
    {
      icon: Code2,
      title: t("services.items.backend.title"),
      description: t("services.items.backend.description"),
      featured: false,
    },
    {
      icon: Layers,
      title: t("services.items.saas.title"),
      description: t("services.items.saas.description"),
      featured: false,
    },
    {
      icon: Wrench,
      title: t("services.items.refactoring.title"),
      description: t("services.items.refactoring.description"),
      featured: false,
    },
    {
      icon: Database,
      title: t("services.items.database.title"),
      description: t("services.items.database.description"),
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: t("services.items.payment.title"),
      description: t("services.items.payment.description"),
      featured: false,
    },
    {
      icon: Cloud,
      title: t("services.items.devops.title"),
      description: t("services.items.devops.description"),
      featured: false,
    },
    {
      icon: Lock,
      title: t("services.items.security.title"),
      description: t("services.items.security.description"),
      featured: false,
    },
    {
      icon: Bot,
      title: t("services.items.frontend.title"),
      description: t("services.items.frontend.description"),
      featured: false,
    },
    {
      icon: Zap,
      title: t("services.items.optimization.title"),
      description: t("services.items.optimization.description"),
      featured: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      aria-label="Skills and services"
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
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const iconColors = [
              "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              "bg-purple-500/10 text-purple-600 dark:text-purple-400",
              "bg-amber-500/10 text-amber-600 dark:text-amber-400",
              "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
              "bg-rose-500/10 text-rose-600 dark:text-rose-400",
              "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
              "bg-violet-500/10 text-violet-600 dark:text-violet-400",
              "bg-orange-500/10 text-orange-600 dark:text-orange-400",
              "bg-teal-500/10 text-teal-600 dark:text-teal-400",
              "bg-pink-500/10 text-pink-600 dark:text-pink-400",
            ];

            return (
              <motion.div
                key={service.title}
                className={`group relative overflow-hidden rounded-[2rem] border bg-background/50 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? "lg:col-span-2 border-primary bg-charcoal-950 text-white dark:bg-charcoal-950"
                    : "border-slate-200 hover:border-primary/30 dark:border-charcoal-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
              >
                {service.featured && (
                  <div className="absolute top-6 right-6 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold tracking-wide text-primary backdrop-blur-sm">
                    SPÉCIALITÉ ⭐
                  </div>
                )}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    service.featured
                      ? "bg-primary/20 text-primary"
                      : iconColors[index % iconColors.length]
                  }`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    service.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-4 text-base leading-relaxed ${
                    service.featured ? "text-gray-900 dark:text-slate-300" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
