"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { Globe } from "lucide-react";

type Locale = "fr" | "en" | "kr";

interface LanguageOption {
  code: Locale;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "fr", label: "Francais", flag: "FR" },
  { code: "kr", label: "한국어", flag: "KR" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = (languages.find((lang) => lang.code === locale) ?? languages[0]) as LanguageOption;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleLanguageChange = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-[10px] font-mono uppercase tracking-[0.15em] transition-all duration-200"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.4)",
          background: "rgba(255,255,255,0.03)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.color = "rgba(255,255,255,0.4)";
        }}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background: "rgba(5,5,6,0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => {
              const isActive = language.code === locale;
              return (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="flex w-full items-center gap-3 px-4 py-2.5 font-mono text-[11px] transition-colors"
                  style={{
                    color: isActive ? "rgba(0,212,255,0.9)" : "rgba(255,255,255,0.5)",
                    background: isActive ? "rgba(0,212,255,0.05)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = "transparent";
                  }}
                  role="menuitem"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="uppercase tracking-wider w-5">{language.flag}</span>
                  <span className="flex-1 text-left">{language.label}</span>
                  {isActive && (
                    <svg className="h-3.5 w-3.5" style={{ color: "rgba(0,212,255,0.7)" }} fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
