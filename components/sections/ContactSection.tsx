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
import { startProgress, doneProgress } from "@/components/ui/ProgressBar";

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
    startProgress(); // Start progress bar

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

      doneProgress(); // Complete progress bar
      setSubmissionState("success");
      reset(); // Clear form on success

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmissionState("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      doneProgress(); // Complete progress bar even on error
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

  return (
    <section
      ref={ref}
      id="contact"
      aria-label="Contact information and form"
      className="bg-charcoal-950 dark:bg-charcoal-950 mx-4 my-24 rounded-[3rem] px-6 py-24 sm:mx-10 sm:px-12 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Title, Description & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            {/* Title with "projet" highlighted */}
            <h2 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
              Démarrons votre <span className="text-primary">projet</span>.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Besoin d&apos;un expert pour votre prochain SaaS ou une intégration IA stratégique ?
              Discutons de vos objectifs.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    EMAIL
                  </div>
                  <a
                    href="mailto:rayan.sekkat@gmail.com"
                    className="hover:text-primary font-medium text-white transition-colors"
                  >
                    rayan.sekkat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    LINKEDIN
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rayan-sekkat-3911a9294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary font-medium text-white transition-colors"
                  >
                    linkedin.com/in/rayan-sekkat
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    GITHUB
                  </div>
                  <a
                    href="https://github.com/rayansekkatkr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary font-medium text-white transition-colors"
                  >
                    github.com/rayansekkatkr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    UPWORK
                  </div>
                  <a
                    href="https://www.upwork.com/freelancers/~01642eb253cc5d3d22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary font-medium text-white transition-colors"
                  >
                    upwork.com/freelancers/rayan-sekkat
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-5.996 4.95c-.71.702-1.74 1.023-2.815.895a4.395 4.395 0 01-3.011-1.762 4.414 4.414 0 01-.671-3.644 4.41 4.41 0 012.446-2.781c1-.474 2.153-.558 3.207-.234.699.214 1.334.623 1.827 1.177l-1.062 1.062a2.514 2.514 0 00-1.808-.81c-1.414-.004-2.557 1.138-2.555 2.553.001 1.415 1.145 2.56 2.56 2.555.832-.003 1.608-.422 2.063-1.114l1.062 1.062a3.895 3.895 0 01-1.243 1.041z" />
                </svg>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    FIVERR
                  </div>
                  <a
                    href="https://www.fiverr.com/s/xXNk57B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary font-medium text-white transition-colors"
                  >
                    fiverr.com/rayandev
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                <svg
                  className="text-primary h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <span className="text-sm text-slate-300">
                Temps de réponse moyen: <span className="font-bold text-white">2-4h</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Success Message */}
              {submissionState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-emerald-100">Message envoyé avec succès!</h4>
                    <p className="mt-1 text-sm text-emerald-200/80">
                      Merci de m&apos;avoir contacté. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submissionState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-red-100">Échec de l&apos;envoi</h4>
                    <p className="mt-1 text-sm text-red-200/80">
                      {errorMessage || "Une erreur s&apos;est produite. Veuillez réessayer."}
                    </p>
                  </div>
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm leading-6 font-medium text-slate-300"
                >
                  Nom complet
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    disabled={submissionState === "loading"}
                    placeholder="Votre nom"
                    className={`focus:ring-primary block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-white/10 transition-all duration-200 ring-inset placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 ${
                      errors.name ? "pr-10 ring-red-500/50 focus:ring-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm leading-6 font-medium text-slate-300"
                >
                  Email professionnel
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    disabled={submissionState === "loading"}
                    placeholder="email@entreprise.com"
                    className={`focus:ring-primary block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-white/10 transition-all duration-200 ring-inset placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 ${
                      errors.email ? "pr-10 ring-red-500/50 focus:ring-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm leading-6 font-medium text-slate-300"
                >
                  Votre besoin
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    {...register("message")}
                    disabled={submissionState === "loading"}
                    rows={5}
                    placeholder="Décrivez brièvement votre projet..."
                    className={`focus:ring-primary block w-full resize-none rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-white/10 transition-all duration-200 ring-inset placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 ${
                      errors.message ? "ring-red-500/50 focus:ring-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <div className="pointer-events-none absolute top-3 right-3">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                  )}
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || !isDirty || submissionState === "loading"}
                className="bg-primary shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/30 focus-visible:outline-primary flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-lg"
              >
                {submissionState === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
