"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "fr" | "en" | "kr";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation storage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslationData = Record<string, any>;
const translations: Record<Locale, TranslationData> = {
  fr: {},
  en: {},
  kr: {},
};

// Helper to get initial locale
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";

  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored && ["fr", "en", "kr"].includes(stored)) {
    return stored;
  }

  // Detect browser language
  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "en") return "en";
  if (browserLang === "ko") return "kr";
  return "fr"; // Default to French
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load translations on mount
  useEffect(() => {
    async function loadTranslations() {
      try {
        const [frData, enData, krData] = await Promise.all([
          fetch("/locales/fr/common.json").then((r) => r.json()),
          fetch("/locales/en/common.json").then((r) => r.json()),
          fetch("/locales/kr/common.json").then((r) => r.json()),
        ]);

        translations.fr = frData as TranslationData;
        translations.en = enData as TranslationData;
        translations.kr = krData as TranslationData;
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    }

    loadTranslations();
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;
    }
  };

  // Translation function
  const t = (key: string): string => {
    if (!isLoaded) return key;

    const keys = key.split(".");
    let value: string | TranslationData = translations[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if not found
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
