"use client";

import { useState, useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { startProgress, doneProgress } from "@/components/ui/ProgressBar";
import { ShimmerButton } from "@/components/ui/magic/ShimmerButton";
import { SectionDivider } from "@/components/ui/magic/SectionDivider";
import { useTranslation } from "@/lib/i18n/useLanguage";

type SubmissionState = "idle" | "loading" | "success" | "error";

const LINKS = [
  {
    icon: Mail,
    key: "contact.links.email",
    value: "rayan.sekkat@gmail.com",
    href: "mailto:rayan.sekkat@gmail.com",
  },
  {
    icon: Linkedin,
    key: "contact.links.linkedin",
    value: "rayan-sekkat",
    href: "https://www.linkedin.com/in/rayan-sekkat-3911a9294",
  },
  {
    icon: Github,
    key: "contact.links.github",
    value: "rayansekkatkr",
    href: "https://github.com/rayansekkatkr",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState("loading");
    setErrorMessage("");
    startProgress();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Failed to send message");

      doneProgress();
      setSubmissionState("success");
      reset();
      setTimeout(() => setSubmissionState("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      doneProgress();
      setSubmissionState("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
      setTimeout(() => setSubmissionState("idle"), 5000);
    }
  };

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  // Parse headline with <accent> tags
  const rawHeadline = t("contact.headline");
  const headlineParts = rawHeadline.split(/<accent>(.*?)<\/accent>/);

  return (
    <section ref={ref} id="contact" aria-label="Contact" className="px-6 py-28 sm:py-36 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Premium divider */}
        <SectionDivider className="mb-20" />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: heading + contact links */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: dur(0.5), delay: del(0.1) }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8" style={{ background: "rgba(0,212,255,0.4)" }} />
              <p
                className="font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(0,212,255,0.55)" }}
              >
                {t("contact.label")}
              </p>
            </div>

            <h2
              className="font-cormorant mb-6 text-4xl leading-tight font-bold sm:text-5xl"
              style={{ color: "var(--t-primary)" }}
            >
              {headlineParts.map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} style={{ color: "#00D4FF" }}>
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>

            <p
              className="mb-14 max-w-md text-base leading-relaxed"
              style={{ color: "var(--t-muted)" }}
            >
              {t("contact.description")}
            </p>

            {/* Links - premium style */}
            <div className="space-y-5">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group -mx-4 flex items-center gap-5 rounded-xl p-4 transition-all duration-300"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-[#00D4FF]/25 group-hover:bg-[rgba(0,212,255,0.04)]"
                      style={{
                        borderColor: "var(--card-border)",
                        background: "var(--pill-bg)",
                      }}
                    >
                      <Icon
                        className="h-4 w-4 transition-colors duration-300 group-hover:text-[#00D4FF]"
                        style={{ color: "var(--t-muted)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className="mb-0.5 block font-mono text-[9px] tracking-[0.2em] uppercase"
                        style={{ color: "var(--t-muted)" }}
                      >
                        {t(link.key)}
                      </span>
                      <span
                        className="font-mono text-sm transition-colors duration-300 group-hover:text-[#00D4FF]"
                        style={{ color: "var(--t-secondary)" }}
                      >
                        {link.value}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/30" />
                  </a>
                );
              })}
            </div>

            {/* Response time indicator */}
            <div className="mt-12 inline-flex items-center gap-3">
              <div className="relative h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>
                {t("contact.responseTime")}{" "}
                <span style={{ color: "var(--t-secondary)" }}>{t("contact.responseValue")}</span>
              </span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: dur(0.5), delay: del(0.2) }}
          >
            <div
              className="relative overflow-hidden rounded-2xl p-8 transition-all duration-500 sm:p-10"
              style={{
                background:
                  submissionState === "success"
                    ? "rgba(4,14,8,0.78)"
                    : submissionState === "error"
                      ? "rgba(14,4,4,0.78)"
                      : "var(--card-bg)",
                backdropFilter: "var(--card-backdrop)",
                WebkitBackdropFilter: "var(--card-backdrop)",
                border:
                  submissionState === "success"
                    ? "1px solid rgba(52,211,153,0.18)"
                    : submissionState === "error"
                      ? "1px solid rgba(239,68,68,0.18)"
                      : "1px solid var(--card-border)",
                borderTop:
                  submissionState === "success"
                    ? "1px solid rgba(52,211,153,0.3)"
                    : submissionState === "error"
                      ? "1px solid rgba(239,68,68,0.3)"
                      : "1px solid var(--card-border-top)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Top reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, transparent 100%)",
                }}
              />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Success */}
                {submissionState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <div>
                      <h4 className="font-semibold text-emerald-100">
                        {t("contact.success.title")}
                      </h4>
                      <p className="mt-1 text-sm text-emerald-200/80">
                        {t("contact.success.description")}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error */}
                {submissionState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                    <div>
                      <h4 className="font-semibold text-red-100">{t("contact.error.title")}</h4>
                      <p className="mt-1 text-sm text-red-200/80">
                        {errorMessage || t("contact.error.description")}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2.5 block font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "var(--t-muted)" }}
                  >
                    {t("contact.form.name.label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    disabled={submissionState === "loading"}
                    placeholder={t("contact.form.name.placeholder")}
                    className={`contact-input block w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 outline-none focus:border-[#00D4FF]/30 focus:ring-0 disabled:opacity-50 ${
                      errors.name ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
                    style={{
                      background: "var(--pill-bg)",
                      color: "var(--t-primary)",
                      borderColor: errors.name ? undefined : "var(--card-border)",
                    }}
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2.5 block font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "var(--t-muted)" }}
                  >
                    {t("contact.form.email.label")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    disabled={submissionState === "loading"}
                    placeholder={t("contact.form.email.placeholder")}
                    className={`contact-input block w-full rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 outline-none focus:border-[#00D4FF]/30 focus:ring-0 disabled:opacity-50 ${
                      errors.email ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
                    style={{
                      background: "var(--pill-bg)",
                      color: "var(--t-primary)",
                      borderColor: errors.email ? undefined : "var(--card-border)",
                    }}
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "var(--t-muted)" }}
                  >
                    {t("contact.form.message.label")}
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    disabled={submissionState === "loading"}
                    rows={5}
                    placeholder={t("contact.form.message.placeholder")}
                    className={`contact-input block w-full resize-none rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 outline-none focus:border-[#00D4FF]/30 focus:ring-0 disabled:opacity-50 ${
                      errors.message ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
                    style={{
                      background: "var(--pill-bg)",
                      color: "var(--t-primary)",
                      borderColor: errors.message ? undefined : "var(--card-border)",
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <ShimmerButton
                  type="submit"
                  disabled={!isValid || !isDirty || submissionState === "loading"}
                  background="#00D4FF"
                  shimmerColor="rgba(255,255,255,0.15)"
                  className="flex w-full items-center justify-center gap-2 py-4 text-sm font-bold text-[#050506] disabled:cursor-not-allowed disabled:opacity-35"
                  borderRadius="0.75rem"
                >
                  {submissionState === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.form.submit")}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </ShimmerButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
