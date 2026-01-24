"use client";

import { ExternalLink, CheckCircle2, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ProjectsSection() {
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
    name: "pont-facturx.com",
    tagline: "Plateforme de Facturation Électronique B2B",
    description:
      "Développement d'une plateforme web complète permettant aux entreprises de générer, envoyer et gérer leurs factures électroniques conformément aux normes françaises. Solution conçue pour simplifier la transition vers la facturation électronique obligatoire.",
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
      "Génération automatique de factures au format Factur-X (PDF/XML)",
      "Interface d'administration intuitive avec tableau de bord analytique",
      "Validation automatique de conformité aux normes françaises",
      "Système de notifications et suivi des paiements",
      "API REST sécurisée pour intégration avec systèmes existants",
    ],
    results: [
      { label: "Réduction du temps de traitement", value: "40%" },
      { label: "Factures générées par mois", value: "500+" },
      { label: "Taux de conformité", value: "100%" },
    ],
    liveUrl: "https://pont-facturx.com",
    image: "/projects/pont-facturx-preview.jpg",
  };

  return (
    <section ref={ref} id="projects" className="bg-white px-6 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Projet Phare
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Une solution complète développée de A à Z
          </p>
        </motion.div>

        <motion.div
          className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.2,
          }}
        >
          {/* Project Image */}
          <div className="from-primary-500 to-primary-700 relative h-64 w-full overflow-hidden bg-gradient-to-br sm:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white opacity-20">pont-facturx</div>
                <div className="mt-4 text-xl text-white/80">Facturation Électronique</div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 mt-2 text-lg">
                  {project.tagline}
                </p>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-500 shadow-primary-600/20 hover:shadow-primary-600/30 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:scale-105 active:scale-95"
              >
                <ExternalLink className="h-4 w-4" />
                Voir le site
              </a>
            </div>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Technologies Utilisées
              </h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Fonctionnalités Clés
              </h4>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mt-10">
              <h4 className="mb-6 flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                <TrendingUp className="h-5 w-5" />
                Résultats Mesurables
              </h4>
              <div className="grid gap-6 sm:grid-cols-3">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800"
                  >
                    <div className="text-primary-600 dark:text-primary-400 text-3xl font-bold">
                      {result.value}
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
