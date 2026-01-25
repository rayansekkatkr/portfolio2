"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { Globe } from "lucide-react";

type Locale = "fr" | "en" | "kr";

interface LanguageOption {
  code: Locale;
  label: string;
  flag: string;
  nativeName: string;
}

const languages: LanguageOption[] = [
  { code: "fr", label: "Français", flag: "🇫🇷", nativeName: "Français" },
  { code: "en", label: "English", flag: "🇬🇧", nativeName: "English" },
  { code: "kr", label: "한국어", flag: "🇰🇷", nativeName: "한국어" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = (languages.find((lang) => lang.code === locale) ??
    languages[0]) as LanguageOption;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleLanguageChange = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
    // Announce language change to screen readers
    const lang = languages.find((l) => l.code === code);
    if (lang) {
      const announcement = document.getElementById("language-announcement");
      if (announcement) {
        announcement.textContent = `Language changed to ${lang.label}`;
      }
    }
  };

  return (
    <>
      {/* Screen reader announcement region */}
      <div
        id="language-announcement"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
      <div className="relative" ref={dropdownRef}>
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-9 items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground"
          aria-label="Select language"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="glass-card absolute right-0 z-50 mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-border shadow-xl animate-fade-in">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((language) => {
                const isActive = language.code === locale;
                return (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleLanguageChange(language.code);
                      }
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted/50"
                    }`}
                    role="menuitem"
                    aria-label={`Switch to ${language.label}`}
                    aria-current={isActive ? "true" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <span className="text-xl">{language.flag}</span>
                    <span className="flex-1 text-left">{language.nativeName}</span>
                    {isActive && (
                      <svg
                        className="text-primary h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
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
    </>
  );
}
