"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTranslation } from "@/lib/i18n/useLanguage";

const navigation = [
  { name: "navigation.home", href: "#hero" },
  { name: "navigation.about", href: "#about" },
  { name: "navigation.services", href: "#skills" },
  { name: "navigation.projects", href: "#projects" },
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { t } = useTranslation();

  // Handle scroll events for header background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm dark:bg-gray-900/90" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="#hero" className="-m-1.5 p-1.5">
            <span className="text-primary-600 dark:text-primary-400 text-xl font-bold">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
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

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm leading-6 font-semibold transition-colors ${
                activeSection === item.href
                  ? "text-primary-600 dark:text-primary-400"
                  : "hover:text-primary-600 dark:hover:text-primary-400 text-gray-900 dark:text-white"
              } after:bg-primary-600 dark:after:bg-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                activeSection === item.href ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {t(item.name)}
            </a>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <Link href="#hero" className="-m-1.5 p-1.5">
                <span className="text-primary-600 dark:text-primary-400 text-xl font-bold">
                  Portfolio
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold transition-colors ${
                        activeSection === item.href
                          ? "text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-gray-800"
                          : "text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
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
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
