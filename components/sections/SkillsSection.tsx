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
      className="bg-white px-6 py-24 sm:py-32 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t("services.subtitle")}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`group relative overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-200 focus-within:-translate-y-1 focus-within:scale-[1.02] focus-within:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-900 ${
                  service.featured
                    ? "border-primary-500 ring-primary-500/20 hover:ring-primary-500/40 focus-within:ring-primary-500/40 border-2 ring-2"
                    : "hover:border-primary-300 dark:hover:border-primary-700 focus-within:border-primary-300 dark:focus-within:border-primary-700 border border-gray-200 dark:border-gray-700"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
              >
                {service.featured && (
                  <div className="bg-primary-500 absolute top-0 right-0 rounded-bl-xl px-3 py-1 text-xs font-semibold text-white">
                    ⭐ Spécialité
                  </div>
                )}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                    service.featured
                      ? "bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                      : "group-hover:bg-primary-100 group-hover:text-primary-600 dark:group-hover:bg-primary-900/30 dark:group-hover:text-primary-400 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    service.featured
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
