"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import fr from "@/public/locales/fr/common.json";
import en from "@/public/locales/en/common.json";
import kr from "@/public/locales/kr/common.json";

type Locale = "fr" | "en" | "kr";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslationData = Record<string, any>;

const translations: Record<Locale, TranslationData> = { fr, en, kr };

function detectLocale(): Locale {
  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored && ["fr", "en", "kr"].includes(stored)) return stored;

  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "fr") return "fr";
  if (browserLang === "ko") return "kr";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "fr" to match SSR — sync to real locale after hydration
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const real = detectLocale();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(real);
    document.documentElement.lang = real;
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: string | TranslationData = translations[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as TranslationData)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguageContext must be used within a LanguageProvider");
  }
  return context;
}
