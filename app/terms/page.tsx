import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions of use for Rayan Sekkat's portfolio website.",
  alternates: {
    canonical: "https://portfolio-rayan-sekkat.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Use | Rayan Sekkat",
    description: "Terms and conditions of use",
    type: "website",
    url: "https://portfolio-rayan-sekkat.vercel.app/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Conditions d&apos;Utilisation
        </h1>

        <div className="prose prose-gray dark:prose-invert mt-8">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              1. Acceptation des Conditions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Cette page est en cours de développement. Les conditions d&apos;utilisation complètes
              seront disponibles prochainement.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Utilisation du Site
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Ce site portfolio présente mes compétences et projets en tant que développeur
              full-stack. Vous êtes libre de le consulter à des fins d&apos;information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              3. Propriété Intellectuelle
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Tous les contenus présents sur ce site (textes, images, code) sont la propriété de
              Rayan Sekkat, sauf mention contraire.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              4. Limitation de Responsabilité
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Les informations fournies sur ce site sont à titre indicatif. Elles peuvent être
              modifiées sans préavis.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Contact</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Pour toute question concernant ces conditions, veuillez me contacter à{" "}
              <a
                href="mailto:rayan.sekkat@example.com"
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                rayan.sekkat@example.com
              </a>
              .
            </p>
          </section>

          <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Note :</strong> Ces conditions seront complétées lors de l&apos;ajout de
              fonctionnalités interactives (formulaires, commentaires, etc.).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
