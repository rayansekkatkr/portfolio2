"use client";

import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useLanguage";

const SOCIAL = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rayan-sekkat-3911a9294",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/rayansekkatkr",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:rayan.sekkat@gmail.com",
    icon: Mail,
  },
];

const NAV_KEYS = [
  { key: "navigation.about", href: "#about" },
  { key: "navigation.services", href: "#skills" },
  { key: "navigation.projects", href: "#projects" },
  { key: "navigation.contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t" style={{ borderColor: "var(--footer-border)" }} role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-16">
        {/* Top: monogram + social */}
        <div className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span
              className="font-cormorant text-3xl font-bold"
              style={{ color: "var(--t-primary)" }}
            >
              RS<span style={{ color: "#00D4FF" }}>.</span>
            </span>
            <p
              className="mt-2 max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.2em] uppercase"
              style={{ color: "var(--footer-text)" }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={link.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-[#00D4FF]/25 hover:bg-[rgba(0,212,255,0.03)] hover:text-[#00D4FF]/70"
                  style={{ border: "1px solid var(--card-border)", color: "var(--footer-text)" }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Nav */}
        <div className="mb-14 flex flex-wrap gap-x-8 gap-y-3">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 hover:opacity-75"
              style={{ color: "var(--footer-text)" }}
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Bottom - premium divider */}
        <div
          className="flex flex-col gap-3 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <p className="font-mono text-[10px]" style={{ color: "var(--footer-text)" }}>
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <p className="font-mono text-[10px]" style={{ color: "var(--footer-text)" }}>
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
