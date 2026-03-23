"use client";

import { useState, useRef } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { startProgress, doneProgress } from "@/components/ui/ProgressBar";
import { BorderBeam } from "@/components/ui/magic/BorderBeam";
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
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
      setTimeout(() => setSubmissionState("idle"), 5000);
    }
  };

  const dur = (v: number) => (prefersReducedMotion ? 0 : v);
  const del = (v: number) => (prefersReducedMotion ? 0 : v);

  // Parse headline with <accent> tags
  const rawHeadline = t("contact.headline");
  const headlineParts = rawHeadline.split(/<accent>(.*?)<\/accent>/);

  return (
    <section
      ref={ref}
      id="contact"
      aria-label="Contact"
      className="py-28 sm:py-36 px-6 lg:px-16"
    >
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
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px w-8"
                style={{ background: "rgba(0,212,255,0.4)" }}
              />
              <p
                className="font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "rgba(0,212,255,0.55)" }}
              >
                {t("contact.label")}
              </p>
            </div>

            <h2
              className="font-cormorant font-bold text-4xl sm:text-5xl leading-tight mb-6"
              style={{ color: "#F0EEE9" }}
            >
              {headlineParts.map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} style={{ color: "#00D4FF" }}>{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>

            <p
              className="text-base leading-relaxed mb-14 max-w-md"
              style={{ color: "rgba(240,238,233,0.38)" }}
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
                    className="group flex items-center gap-5 p-4 -mx-4 rounded-xl transition-all duration-300"
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
                        borderColor: "rgba(255,255,255,0.06)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <Icon className="h-4 w-4 text-white/25 group-hover:text-[#00D4FF] transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <span
                        className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-0.5"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        {t(link.key)}
                      </span>
                      <span className="font-mono text-sm text-white/55 group-hover:text-white transition-colors duration-300">
                        {link.value}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/0 group-hover:text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              <span className="font-mono text-[10px] text-white/30">
                {t("contact.responseTime")}{" "}
                <span className="text-white/55">{t("contact.responseValue")}</span>
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
              className={`relative rounded-2xl border p-8 sm:p-10 transition-all duration-500 ${
                submissionState === "success"
                  ? "border-emerald-500/20 bg-emerald-500/[0.04]"
                  : submissionState === "error"
                    ? "border-red-500/20 bg-red-500/[0.04]"
                    : "border-white/[0.06] bg-white/[0.015]"
              }`}
            >
              {submissionState === "idle" && (
                <BorderBeam size={160} duration={12} colorFrom="#00D4FF" colorTo="#C9A55C" />
              )}

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
                      <h4 className="font-semibold text-emerald-100">{t("contact.success.title")}</h4>
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
                    className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/35 mb-2.5 block"
                  >
                    {t("contact.form.name.label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    disabled={submissionState === "loading"}
                    placeholder={t("contact.form.name.placeholder")}
                    className={`block w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/15 focus:border-[#00D4FF]/30 focus:bg-white/[0.04] focus:ring-0 outline-none transition-all duration-200 disabled:opacity-50 ${
                      errors.name ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
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
                    className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/35 mb-2.5 block"
                  >
                    {t("contact.form.email.label")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    disabled={submissionState === "loading"}
                    placeholder={t("contact.form.email.placeholder")}
                    className={`block w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/15 focus:border-[#00D4FF]/30 focus:bg-white/[0.04] focus:ring-0 outline-none transition-all duration-200 disabled:opacity-50 ${
                      errors.email ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
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
                    className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/35 mb-2.5 block"
                  >
                    {t("contact.form.message.label")}
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    disabled={submissionState === "loading"}
                    rows={5}
                    placeholder={t("contact.form.message.placeholder")}
                    className={`block w-full resize-none bg-white/[0.03] border rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/15 focus:border-[#00D4FF]/30 focus:bg-white/[0.04] focus:ring-0 outline-none transition-all duration-200 disabled:opacity-50 ${
                      errors.message ? "border-red-500/40" : "border-white/[0.06]"
                    }`}
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
                  className="flex w-full items-center justify-center gap-2 py-4 text-sm font-bold text-[#050506] disabled:opacity-35 disabled:cursor-not-allowed"
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
