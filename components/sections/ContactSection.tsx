"use client";

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Briefcase,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

type SubmissionState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // Real-time validation
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setSubmissionState("success");
      reset(); // Clear form on success

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmissionState("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );

      // Reset error state after 5 seconds
      setTimeout(() => {
        setSubmissionState("idle");
      }, 5000);
    }
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
            className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-xl ring-1 ring-gray-200 dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Envoyer un message</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remplissez le formulaire et je vous répondrai dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              {/* Success Message */}
              {submissionState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-lg border border-green-500 bg-green-50 p-4 dark:bg-green-900/20"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-900 dark:text-green-100">
                      Message sent successfully!
                    </h4>
                    <p className="mt-1 text-sm text-green-800 dark:text-green-200">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submissionState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-lg border border-red-500 bg-red-50 p-4 dark:bg-red-900/20"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-red-900 dark:text-red-100">
                      Failed to send message
                    </h4>
                    <p className="mt-1 text-sm text-red-800 dark:text-red-200">
                      {errorMessage || "An error occurred. Please try again later."}
                    </p>
                  </div>
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm leading-6 font-semibold text-gray-900 dark:text-white"
                >
                  Nom complet *
                </label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    disabled={submissionState === "loading"}
                    placeholder="Votre nom"
                    className={`block w-full rounded-lg border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 transition-all duration-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white ${
                      errors.name
                        ? "pr-10 ring-red-500 focus:ring-red-500"
                        : "focus:ring-primary-600 ring-gray-300 dark:ring-gray-700"
                    }`}
                  />
                  {errors.name && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 flex items-center gap-1 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm leading-6 font-semibold text-gray-900 dark:text-white"
                >
                  Email *
                </label>
                <div className="relative mt-2">
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    disabled={submissionState === "loading"}
                    placeholder="votre.email@exemple.com"
                    className={`block w-full rounded-lg border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 transition-all duration-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white ${
                      errors.email
                        ? "pr-10 ring-red-500 focus:ring-red-500"
                        : "focus:ring-primary-600 ring-gray-300 dark:ring-gray-700"
                    }`}
                  />
                  {errors.email && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 flex items-center gap-1 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm leading-6 font-semibold text-gray-900 dark:text-white"
                >
                  Message *
                </label>
                <div className="relative mt-2">
                  <textarea
                    id="message"
                    {...register("message")}
                    disabled={submissionState === "loading"}
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className={`block w-full rounded-lg border-0 px-4 py-3.5 text-gray-900 shadow-sm ring-1 transition-all duration-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white ${
                      errors.message
                        ? "ring-red-500 focus:ring-red-500"
                        : "focus:ring-primary-600 ring-gray-300 dark:ring-gray-700"
                    }`}
                  />
                  {errors.message && (
                    <div className="pointer-events-none absolute top-3 right-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 flex items-center gap-1 text-sm text-red-600 dark:text-red-400"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || !isDirty || submissionState === "loading"}
                className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 shadow-primary-600/30 hover:shadow-primary-600/50 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl focus-visible:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-lg"
              >
                {submissionState === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Envoyer le message
                  </>
                )}
              </button>
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
