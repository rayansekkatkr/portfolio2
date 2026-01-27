"use client";

import { useState, useEffect, useCallback } from "react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n/useLanguage";

const navigation = [
  { name: "navigation.home", href: "#hero" },
  { name: "navigation.about", href: "#about" },
  { name: "navigation.services", href: "#skills" },
  { name: "navigation.projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "navigation.blog", href: "#blog" },
  { name: "navigation.contact", href: "#contact" },
];

// Smooth scroll utility with easing and reduced-motion support
function smoothScrollTo(targetId: string, offset: number = 80, duration: number = 600) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetPosition, behavior: "auto" });
    return;
  }

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { t } = useTranslation();

  // Track active section with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActiveSection(id);
          // Update URL hash without scrolling
          if (window.history.pushState) {
            window.history.pushState(null, "", id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navigation.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Handle click navigation with smooth scroll
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
    setActiveSection(href);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 px-4">
      <nav
        className="nav-glass shadow-glass flex items-center justify-between rounded-full px-6 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary shadow-primary/20 flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white shadow-lg">
            RS
          </div>
          <span className="text-foreground hidden font-bold sm:block">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="text-muted-foreground hidden items-center gap-8 text-sm font-semibold md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`hover:text-primary transition-colors ${
                activeSection === item.href ? "text-primary" : ""
              }`}
            >
              {t(item.name)}
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="hover:bg-muted rounded-full p-2 transition-colors md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="glass-dark fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto p-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-primary shadow-primary/20 flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white shadow-lg">
                  RS
                </div>
                <span className="text-foreground font-bold">Portfolio</span>
              </div>
              <button
                type="button"
                className="hover:bg-muted/20 rounded-full p-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                    activeSection === item.href
                      ? "bg-primary/20 text-primary"
                      : "hover:bg-muted/20 text-foreground"
                  }`}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {t(item.name)}
                </a>
              ))}
            </div>

            <div className="border-border/20 mt-8 flex items-center justify-center gap-4 border-t pt-8">
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
