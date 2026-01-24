"use client";

import { useLanguageContext } from "./LanguageContext";

export function useLanguage() {
  return useLanguageContext();
}

export function useTranslation(namespace?: string) {
  const { t, locale, setLocale } = useLanguageContext();

  const translate = (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return t(fullKey);
  };

  return {
    t: translate,
    locale,
    changeLanguage: setLocale,
  };
}
