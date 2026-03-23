"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n/useLanguage";

const navLinks = [
  { key: "navigation.about", href: "/#about" },
  { key: "navigation.services", href: "/#skills" },
  { key: "navigation.projects", href: "/#projects" },
  { key: "navigation.contact", href: "/#contact" },
];

interface BlogHeaderProps {
  backHref?: string;
  backLabel?: string;
}

export default function BlogHeader({
  backHref = "/",
  backLabel = "Retour à l'accueil",
}: BlogHeaderProps) {
  const { t } = useTranslation();

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(5,5,6,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: logo + back */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-cormorant text-xl font-bold text-white transition-opacity hover:opacity-80"
          >
            RS<span style={{ color: "#00D4FF" }}>.</span>
          </Link>
          <Link
            href={backHref}
            className="hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors sm:inline-flex"
            style={{ color: "rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
          >
            <ArrowLeft className="h-3 w-3" />
            {backLabel}
          </Link>
        </div>

        {/* Center: nav links (desktop) */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Site navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Right: language switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
