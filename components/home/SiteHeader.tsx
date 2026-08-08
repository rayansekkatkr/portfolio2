"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LocaleSwitcher from "@/components/home/LocaleSwitcher";
import { type Locale } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

interface SiteHeaderProps {
  locale: Locale;
  nav: HomeContent["nav"];
}

const SECTIONS = ["work", "experience", "capabilities", "contact"] as const;

export default function SiteHeader({ locale, nav }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = SECTIONS.map((id) => ({ id, label: nav[id] }));

  return (
    <header className="border-se-line bg-se-bg/90 sticky top-0 z-40 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:px-8">
        <a
          href={`/${locale}`}
          aria-label={nav.homeAriaLabel}
          className="font-display text-se-text focus-visible:outline-se-accent text-2xl focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          R/S
        </a>

        {/* Desktop nav: distinct, spaced links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label={nav.homeAriaLabel}>
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-meta text-se-muted hover:text-se-text focus-visible:outline-se-accent text-xs tracking-[0.18em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher current={locale} ariaLabel={nav.localeSwitcherLabel} />
          <ThemeToggle
            toDarkLabel={nav.themeToggleToDark}
            toLightLabel={nav.themeToggleToLight}
            announcedDark={nav.themeAnnouncedDark}
            announcedLight={nav.themeAnnouncedLight}
            className="border-se-line text-se-muted hover:text-se-text focus-visible:outline-se-accent inline-flex h-9 w-9 items-center justify-center rounded-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          />
          <button
            type="button"
            className="border-se-line text-se-muted hover:text-se-text focus-visible:outline-se-accent inline-flex h-9 w-9 items-center justify-center rounded-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={nav.homeAriaLabel}
          className="border-se-line bg-se-bg border-t md:hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-meta text-se-text focus-visible:outline-se-accent block py-3 text-sm tracking-[0.18em] uppercase focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
