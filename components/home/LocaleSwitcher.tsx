"use client";

import { LOCALES, type Locale } from "@/lib/site";

const LOCALE_LABELS: Record<Locale, string> = { en: "EN", ko: "한국어" };
const LOCALE_NAMES: Record<Locale, string> = { en: "English", ko: "한국어" };

interface LocaleSwitcherProps {
  current: Locale;
  ariaLabel: string;
}

export default function LocaleSwitcher({ current, ariaLabel }: LocaleSwitcherProps) {
  return (
    <nav aria-label={ariaLabel} className="flex items-center gap-1">
      {LOCALES.map((locale) => (
        <a
          key={locale}
          href={`/${locale}`}
          lang={locale}
          hrefLang={locale}
          aria-current={locale === current ? "page" : undefined}
          onClick={(e) => {
            // Preserve the current section anchor across locales
            const hash = window.location.hash;
            if (hash) {
              e.preventDefault();
              window.location.href = `/${locale}${hash}`;
            }
          }}
          className={`font-meta focus-visible:outline-se-accent rounded-sm px-2 py-1 text-xs tracking-widest uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
            locale === current
              ? "text-se-text decoration-se-accent underline decoration-2 underline-offset-4"
              : "text-se-muted hover:text-se-text"
          }`}
        >
          <span className="sr-only">{LOCALE_NAMES[locale]}</span>
          <span aria-hidden="true">{LOCALE_LABELS[locale]}</span>
        </a>
      ))}
    </nav>
  );
}
