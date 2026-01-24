import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
          Politique de Confidentialité
        </h1>

        <div className="prose prose-gray dark:prose-invert mt-8">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              1. Introduction
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Cette page est en cours de développement. La politique de confidentialité complète
              sera disponible prochainement.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Collecte de Données
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Actuellement, aucune donnée personnelle n&apos;est collectée via ce site.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Cookies</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Ce site n&apos;utilise pas de cookies pour le moment.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. Contact</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Pour toute question concernant cette politique de confidentialité, veuillez me
              contacter à{" "}
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
              <strong>Note :</strong> Cette politique sera complétée lors de l&apos;implémentation
              du formulaire de contact et des fonctionnalités de blog (Epic 2 et Epic 3).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
