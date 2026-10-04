"use client";

import { LOCALES, type Locale } from "@/lib/site";

const LOCALE_LABELS: Record<Locale, string> = { en: "EN", ko: "KO" };
const LOCALE_NAMES: Record<Locale, string> = { en: "English", ko: "한국어" };

interface LocaleSwitcherProps {
  current: Locale;
  ariaLabel: string;
}

export default function LocaleSwitcher({ current, ariaLabel }: LocaleSwitcherProps) {
  return (
    <nav aria-label={ariaLabel} className="border-se-line flex h-8 items-stretch border">
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
          className={`font-meta focus-visible:outline-se-accent inline-flex items-center px-2.5 text-[11px] tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 ${
            locale === current ? "bg-se-text text-se-bg" : "text-se-muted hover:text-se-text"
          }`}
        >
          <span className="sr-only">{LOCALE_NAMES[locale]}</span>
          <span aria-hidden="true">{LOCALE_LABELS[locale]}</span>
        </a>
      ))}
    </nav>
  );
}
