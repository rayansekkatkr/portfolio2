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
    <footer className="border-t border-white/[0.04]" role="contentinfo">
      <div className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
        {/* Top: monogram + social */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between mb-14">
          <div>
            <span className="font-cormorant font-bold text-3xl text-white">
              RS<span style={{ color: "#00D4FF" }}>.</span>
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mt-2 max-w-xs leading-relaxed">
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
                  className="group h-10 w-10 rounded-full border border-white/[0.06] flex items-center justify-center text-white/25 hover:border-[#00D4FF]/25 hover:text-[#00D4FF]/70 hover:bg-[rgba(0,212,255,0.03)] transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25 hover:text-white/55 transition-colors duration-300"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Bottom - premium divider */}
        <div
          className="border-t pt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <p className="font-mono text-[10px] text-white/15">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <p className="font-mono text-[10px] text-white/15">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
