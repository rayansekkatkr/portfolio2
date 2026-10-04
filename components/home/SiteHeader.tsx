"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LocaleSwitcher from "@/components/home/LocaleSwitcher";
import SeoulClock from "@/components/home/SeoulClock";
import { WRAP } from "@/components/home/Section";
import { type Locale } from "@/lib/site";
import { type HomeContent } from "@/lib/content/home";

interface SiteHeaderProps {
  locale: Locale;
  nav: HomeContent["nav"];
}

const SECTIONS = ["work", "experience", "capabilities", "contact"] as const;

const ICON_BTN =
  "border-se-line text-se-muted hover:text-se-text hover:border-se-line-strong focus-visible:outline-se-accent inline-flex h-8 w-8 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export default function SiteHeader({ locale, nav }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = SECTIONS.map((id, i) => ({ id, label: nav[id], n: `0${i + 1}` }));

  return (
    <header className="border-se-line bg-se-bg/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className={`${WRAP} flex h-14 items-center justify-between gap-4`}>
        <a
          href={`/${locale}`}
          aria-label={nav.homeAriaLabel}
          className="group focus-visible:outline-se-accent flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span
            aria-hidden="true"
            className="font-meta bg-se-text text-se-bg group-hover:bg-se-accent group-hover:text-se-on-accent inline-flex h-8 w-8 items-center justify-center text-[11px] font-bold tracking-tight transition-colors"
          >
            RS
          </span>
          <span className="font-meta text-se-text hidden text-xs tracking-[0.14em] uppercase sm:inline">
            Rayan Sekkat
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={nav.homeAriaLabel}>
          {links.map(({ id, label, n }) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-meta text-se-muted hover:text-se-text focus-visible:outline-se-accent group text-[11px] tracking-[0.14em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="text-se-faint group-hover:text-se-accent mr-1.5 transition-colors">
                {n}
              </span>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SeoulClock label={nav.clockLabel} />
          <LocaleSwitcher current={locale} ariaLabel={nav.localeSwitcherLabel} />
          <ThemeToggle
            toDarkLabel={nav.themeToggleToDark}
            toLightLabel={nav.themeToggleToLight}
            announcedDark={nav.themeAnnouncedDark}
            announcedLight={nav.themeAnnouncedLight}
            className={ICON_BTN}
          />
          <button
            type="button"
            className={`${ICON_BTN} md:hidden`}
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
          <ul className={`${WRAP} flex flex-col py-2`}>
            {links.map(({ id, label, n }) => (
              <li key={id} className="border-se-line border-b last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-se-text focus-visible:outline-se-accent flex items-baseline gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span className="font-meta text-se-accent text-xs">{n}</span>
                  <span className="se-title text-3xl">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
