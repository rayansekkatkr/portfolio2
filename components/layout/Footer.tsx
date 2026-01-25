"use client";

import Link from "next/link";
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const professionalLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rayan-sekkat",
      icon: Linkedin,
      ariaLabel: "Visitez mon profil LinkedIn",
    },
    {
      name: "GitHub",
      href: "https://github.com/rayan-sekkat",
      icon: Github,
      ariaLabel: "Consultez mon GitHub",
    },
    {
      name: "Upwork",
      href: "https://upwork.com/freelancers/rayan-sekkat",
      icon: Briefcase,
      ariaLabel: "Voir mon profil Upwork",
    },
    {
      name: "Email",
      href: "mailto:rayan.sekkat@example.com",
      icon: Mail,
      ariaLabel: "Envoyez-moi un email",
    },
  ];

  const navigationLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Politique de Confidentialité", href: "/privacy" },
    { name: "Conditions d&apos;Utilisation", href: "/terms" },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background to-muted/20"
      role="contentinfo"
    >
      {/* Gradient decorations */}
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-indigo-400/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
                RS
              </div>
              <h3 className="text-xl font-bold text-foreground">Rayan Sekkat</h3>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Développeur Full-Stack spécialisé dans l&apos;intégration d&apos;IA et les solutions
              web modernes. Passionné par la création d&apos;applications performantes avec Next.js,
              TypeScript et les technologies de pointe.
            </p>
            <div className="mt-6 flex gap-3">
              {professionalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg"
                    aria-label={link.ariaLabel}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary inline-flex items-center gap-1 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Légal
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary inline-flex items-center gap-1 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("cookie-consent");
                    window.location.reload();
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary inline-flex items-center gap-1 group"
                >
                  <span className="h-1 w-1 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary" />
                  Gérer les cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rayan Sekkat. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Propulsé par{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                TypeScript
              </a>{" "}
              et{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
