"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Linkedin, Github, Briefcase, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be fully functional in Epic 3
    alert("Formulaire en cours de développement. Fonctionnalité disponible prochainement!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const professionalLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:rayan.sekkat@example.com",
      label: "rayan.sekkat@example.com",
      color: "text-red-600 dark:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/rayan-sekkat",
      label: "linkedin.com/in/rayan-sekkat",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rayan-sekkat",
      label: "github.com/rayan-sekkat",
      color: "text-gray-900 dark:text-gray-100",
    },
    {
      name: "Upwork",
      icon: Briefcase,
      href: "https://upwork.com/freelancers/rayan-sekkat",
      label: "upwork.com/freelancers/rayan-sekkat",
      color: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <section ref={ref} id="contact" className="bg-white px-6 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Contactez-moi
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Un projet en tête ? Discutons de la manière dont je peux vous aider à le concrétiser.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            className="rounded-2xl bg-gray-50 p-8 shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Envoyer un message
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remplissez le formulaire et je vous répondrai dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm leading-6 font-semibold text-gray-900 dark:text-white"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="focus:ring-primary-600 mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 font-semibold text-gray-900 dark:text-white"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                  className="focus:ring-primary-600 mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm leading-6 font-semibold text-gray-900 dark:text-white"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="focus:ring-primary-600 mt-2 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-700"
                />
              </div>

              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 shadow-primary-600/20 hover:shadow-primary-600/30 flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95"
              >
                <Send className="h-4 w-4" />
                Envoyer le message
              </button>

              <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                ⚠️ Formulaire en développement - Fonctionnel dans Epic 3
              </p>
            </form>
          </motion.div>

          {/* Professional Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.3,
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Autres moyens de contact
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Vous préférez un autre canal ? Contactez-moi directement via ces plateformes.
            </p>

            <div className="mt-8 space-y-4">
              {professionalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:border-primary-500 dark:hover:border-primary-500 focus-visible:border-primary-500 dark:focus-visible:border-primary-500 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md focus-visible:scale-[1.02] focus-visible:shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div
                      className={`group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 transition-all duration-200 group-hover:scale-110 group-focus-visible:scale-110 dark:bg-gray-700`}
                    >
                      <Icon className={`h-6 w-6 ${link.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">{link.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{link.label}</div>
                    </div>
                    <svg
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-primary-50 dark:bg-primary-900/20 mt-8 rounded-lg p-6">
              <h4 className="text-primary-900 dark:text-primary-100 font-semibold">
                💡 Disponibilité
              </h4>
              <p className="text-primary-800 dark:text-primary-200 mt-2 text-sm">
                Actuellement disponible pour de nouveaux projets. Temps de réponse moyen : 24-48h.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
