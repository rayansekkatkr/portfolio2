"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "@/lib/i18n/useLanguage";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const navigation = [
  { key: "navigation.about", href: "#about" },
  { key: "navigation.services", href: "#skills" },
  { key: "navigation.projects", href: "#projects" },
  { key: "navigation.contact", href: "#contact" },
];

function smoothScrollTo(targetId: string, offset = 80, duration = 700) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetPosition, behavior: "auto" });
    return;
  }

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0 }
    );

    const sections = ["hero", "about", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      smoothScrollTo(href);
      setActiveSection(href);
    },
    []
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        opacity: scrolled ? 1 : 0,
        transform: scrolled ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: scrolled ? "auto" : "none",
      }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-16"
        style={{
          background: "rgba(5,5,6,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-cormorant text-xl font-bold text-white transition-opacity hover:opacity-80"
        >
          RS
          <span style={{ color: "#00D4FF" }}>.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200"
              style={{
                color:
                  activeSection === item.href
                    ? "rgba(0,212,255,0.9)"
                    : "rgba(255,255,255,0.35)",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.href)
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.href)
                  e.currentTarget.style.color = "rgba(255,255,255,0.35)";
              }}
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded-lg p-2 text-white/50 transition-colors hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto p-6 pt-safe-top"
            style={{
              background: "rgba(5,5,6,0.96)",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="font-cormorant text-xl font-bold text-white">
                RS<span style={{ color: "#00D4FF" }}>.</span>
              </span>
              <button
                type="button"
                className="rounded-lg p-2 text-white/50 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 font-mono text-sm tracking-wide transition-colors"
                  style={{
                    color:
                      activeSection === item.href
                        ? "rgba(0,212,255,0.9)"
                        : "rgba(255,255,255,0.5)",
                  }}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            <div className="mt-10 border-t border-white/[0.06] pt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
