"use client";

import { Sparkles, Code2, Database, Brain, Rocket, Users, Award, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AboutSection() {
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
    { label: "Années d'expérience", value: "5+", icon: Clock },
    { label: "Projets livrés", value: "10+", icon: Rocket },
    { label: "Clients satisfaits", value: "8+", icon: Users },
    { label: "Technologies maîtrisées", value: "15+", icon: Award },
  ];

  const technologies = [
    { name: "React & Next.js", icon: Code2, color: "text-blue-600 dark:text-blue-400" },
    { name: "TypeScript", icon: Code2, color: "text-blue-600 dark:text-blue-400" },
    { name: "Node.js", icon: Code2, color: "text-green-600 dark:text-green-400" },
    { name: "Python", icon: Brain, color: "text-yellow-600 dark:text-yellow-400" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-700 dark:text-blue-300" },
    { name: "Docker & AWS", icon: Sparkles, color: "text-orange-600 dark:text-orange-400" },
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
          À Propos
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
            <p>
              <strong className="text-primary-600 dark:text-primary-400">
                Développeur Full-Stack propulsé par l&apos;IA
              </strong>
              , je combine expertise technique traditionnelle et intelligence artificielle pour
              créer des solutions web innovantes et performantes. Ma spécialité : transformer des
              idées complexes en applications élégantes et scalables.
            </p>
            <p>
              Avec une maîtrise approfondie de <strong>Next.js, TypeScript et Node.js</strong>, et
              une expertise unique en <strong>intégration d&apos;IA</strong>, je développe des
              applications qui non seulement répondent aux besoins actuels, mais anticipent les
              défis de demain. Mon approche allie rigueur technique, design centré utilisateur et
              automatisation intelligente.
            </p>
            <p>
              Passionné par l&apos;innovation et l&apos;apprentissage continu, je m&apos;engage à
              livrer du code propre, maintenable et documenté. Chaque projet est une opportunité de
              repousser les limites du possible grâce à la synergie entre développement moderne et
              intelligence artificielle.
            </p>
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
                Stack Technique Principal
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
