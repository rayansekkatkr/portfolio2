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
import { useLanguageContext } from "@/lib/i18n/LanguageContext";

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
      className="mx-4 sm:mx-10 my-24 rounded-[3rem] bg-charcoal-950 dark:bg-charcoal-950 px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-7xl relative">
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
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Démarrons votre{" "}
              <span className="text-primary">projet</span>.
            </h2>
            
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Besoin d&apos;un expert pour votre prochain SaaS ou une intégration IA stratégique ? Discutons de vos objectifs.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">EMAIL</div>
                  <a href="mailto:rayan.sekkat@gmail.com" className="text-white font-medium hover:text-primary transition-colors">
                    rayan.sekkat@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">LINKEDIN</div>
                  <a 
                    href="https://www.linkedin.com/in/rayan-sekkat-3911a9294" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/rayan-sekkat
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">GITHUB</div>
                  <a 
                    href="https://github.com/rayansekkatkr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary transition-colors"
                  >
                    github.com/rayansekkatkr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-slate-400" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">UPWORK</div>
                  <a 
                    href="https://www.upwork.com/freelancers/~01642eb253cc5d3d22" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary transition-colors"
                  >
                    upwork.com/freelancers/rayan-sekkat
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-sm text-slate-300">
                Temps de réponse moyen: <span className="font-bold text-white">2-4h</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="rounded-3xl bg-slate-900/50 border border-white/10 p-8 backdrop-blur-sm"
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
                    <h4 className="font-semibold text-emerald-100">
                      Message envoyé avec succès!
                    </h4>
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
                    <h4 className="font-semibold text-red-100">
                      Échec de l'envoi
                    </h4>
                    <p className="mt-1 text-sm text-red-200/80">
                      {errorMessage || "Une erreur s&apos;est produite. Veuillez réessayer."}
                    </p>
                  </div>
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-slate-300 mb-2"
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
                    className={`block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all duration-200 placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 ${
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
                  className="block text-sm font-medium leading-6 text-slate-300 mb-2"
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
                    className={`block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all duration-200 placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 ${
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
                  className="block text-sm font-medium leading-6 text-slate-300 mb-2"
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
                    className={`block w-full rounded-xl border-0 bg-white/5 px-4 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 transition-all duration-200 placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6 resize-none ${
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
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-lg"
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
