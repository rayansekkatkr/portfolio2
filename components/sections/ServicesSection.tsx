"use client";

import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/useLanguage";

const FIVERR_GIGS = [
  { key: "fullstack", url: "https://www.fiverr.com/s/XLAXkPm", platform: "Fiverr" },
  { key: "ai", url: "https://www.fiverr.com/s/6YGzdmN", platform: "Fiverr" },
  { key: "saas", url: "https://www.fiverr.com/s/xXNk5YB", platform: "Fiverr" },
];

const UPWORK_SERVICES = [
  {
    key: "stripe",
    url: "https://www.upwork.com/services/product/development-it-integrate-stripe-subscriptions-and-webhooks-in-your-saas-app-2015891536148437221?ref=project_share",
    platform: "Upwork",
  },
  {
    key: "mvp",
    url: "https://www.upwork.com/services/product/development-it-saas-mvp-next-js-fastapi-postgresql-with-auth-deployment-2015567721947838393?ref=project_share",
    platform: "Upwork",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
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

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  return (
    <section
      ref={ref}
      id="services"
      aria-label="Professional Services"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: dur(0.5) }}
        >
          <h2 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            {t("services_pro.title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">{t("services_pro.subtitle")}</p>
        </motion.div>

        {/* Fiverr */}
        <div className="mb-16">
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: dur(0.5), delay: del(0.1) }}
          >
            <svg className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-5.996 4.95c-.71.702-1.74 1.023-2.815.895a4.395 4.395 0 01-3.011-1.762 4.414 4.414 0 01-.671-3.644 4.41 4.41 0 012.446-2.781c1-.474 2.153-.558 3.207-.234.699.214 1.334.623 1.827 1.177l-1.062 1.062a2.514 2.514 0 00-1.808-.81c-1.414-.004-2.557 1.138-2.555 2.553.001 1.415 1.145 2.56 2.56 2.555.832-.003 1.608-.422 2.063-1.114l1.062 1.062a3.895 3.895 0 01-1.243 1.041z" />
            </svg>
            <h3 className="text-foreground text-2xl font-bold">
              {t("services_pro.fiverrSection")}
            </h3>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FIVERR_GIGS.map((gig, index) => (
              <motion.a
                key={gig.url}
                href={gig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border bg-card hover:border-primary relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: dur(0.5), delay: del(0.1 + index * 0.1) }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                    {gig.platform}
                  </span>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
                </div>
                <h4 className="text-foreground group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                  {t(`services_pro.gigs.${gig.key}.title`)}
                </h4>
                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                  {t(`services_pro.gigs.${gig.key}.description`)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-medium">
                    {t(`services_pro.gigs.${gig.key}.price`)}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground text-xs transition-colors">
                    {t("services_pro.viewDetails")}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Upwork */}
        <div>
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: dur(0.5), delay: del(0.4) }}
          >
            <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
            <h3 className="text-foreground text-2xl font-bold">
              {t("services_pro.upworkSection")}
            </h3>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {UPWORK_SERVICES.map((service, index) => (
              <motion.a
                key={service.url}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border bg-card hover:border-primary relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: dur(0.5), delay: del(0.5 + index * 0.1) }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="inline-flex items-center rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium text-green-600">
                    {service.platform}
                  </span>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
                </div>
                <h4 className="text-foreground group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                  {t(`services_pro.gigs.${service.key}.title`)}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t(`services_pro.gigs.${service.key}.description`)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-medium">
                    {t(`services_pro.gigs.${service.key}.price`)}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground text-xs transition-colors">
                    {t("services_pro.viewDetails")}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
