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
      className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rayan Sekkat</h3>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Développeur Full-Stack spécialisé dans l&apos;intégration d&apos;IA et les solutions
              web modernes. Passionné par la création d&apos;applications performantes avec Next.js,
              TypeScript et les technologies de pointe.
            </p>
            <div className="mt-6 flex space-x-4">
              {professionalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-500 transition-colors dark:text-gray-400"
                    aria-label={link.ariaLabel}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
              Légal
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Rayan Sekkat. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Propulsé par{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                TypeScript
              </a>{" "}
              et{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
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
