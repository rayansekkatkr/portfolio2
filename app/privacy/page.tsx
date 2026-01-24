import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and data protection information for Rayan Sekkat's portfolio website.",
  alternates: { canonical: "https://portfolio-rayan-sekkat.vercel.app/privacy" },
  openGraph: {
    title: "Privacy Policy | Rayan Sekkat",
    description: "Privacy policy and data protection information",
    type: "website",
    url: "https://portfolio-rayan-sekkat.vercel.app/privacy",
  },
  robots: { index: true, follow: true },
};

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
        <div className="prose prose-gray dark:prose-invert mt-8 max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              1. Introduction
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Rayan Sekkat s&apos;engage à protéger et respecter votre vie privée. Cette politique
              de confidentialité explique comment nous collectons, utilisons et protégeons vos
              informations personnelles conformément au Règlement Général sur la Protection des
              Données (RGPD).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Responsable du traitement des données
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Nom : Rayan Sekkat</li>
              <li>
                Email :{" "}
                <a
                  href="mailto:rayan.sekkat@example.com"
                  className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  rayan.sekkat@example.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              3. Données collectées
            </h2>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              3.1 Données collectées automatiquement
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Lorsque vous visitez notre site, nous pouvons collecter automatiquement :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Votre adresse IP</li>
              <li>Le type de navigateur et sa version</li>
              <li>Le système d&apos;exploitation</li>
              <li>Les pages que vous consultez</li>
              <li>La date et l&apos;heure de votre visite</li>
              <li>Le temps passé sur chaque page</li>
              <li>Les performances du site (Core Web Vitals)</li>
            </ul>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              3.2 Données fournies volontairement
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Si vous nous contactez via le formulaire de contact ou par email, nous collectons :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Votre nom</li>
              <li>Votre adresse email</li>
              <li>Le contenu de votre message</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              4. Cookies et technologies similaires
            </h2>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              4.1 Cookies essentiels (obligatoires)
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Ces cookies sont nécessaires au fonctionnement du site :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                <strong>theme</strong> : Stocke votre préférence de thème (clair/sombre)
              </li>
              <li>
                <strong>language</strong> : Stocke votre préférence de langue (français/anglais)
              </li>
              <li>
                <strong>cookie-consent</strong> : Stocke vos préférences de cookies
              </li>
            </ul>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              4.2 Cookies analytiques (optionnels)
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Avec votre consentement, nous utilisons :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Vercel Analytics</strong> : Analyse les performances et l&apos;utilisation
                du site de manière anonyme
              </li>
              <li>
                <strong>Vercel Speed Insights</strong> : Mesure les performances réelles du site
              </li>
              <li>
                <strong>Google Analytics 4</strong> : Analyse le comportement des visiteurs de
                manière anonymisée
              </li>
            </ul>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur le lien
              &quot;Gérer les cookies&quot; en bas de page.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              5. Utilisation des données
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Nous utilisons vos données pour :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Fournir et maintenir notre site web</li>
              <li>Améliorer l&apos;expérience utilisateur</li>
              <li>Analyser l&apos;utilisation du site (uniquement avec votre consentement)</li>
              <li>Répondre à vos demandes de contact</li>
              <li>Détecter et prévenir les problèmes techniques</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              6. Partage des données
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager certaines
              données avec :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Vercel</strong> : Hébergement du site et analytics
              </li>
              <li>
                <strong>Google</strong> : Analytics (uniquement avec votre consentement)
              </li>
            </ul>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Ces services sont conformes au RGPD et ont des accords de traitement des données
              appropriés.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              7. Durée de conservation
            </h2>
            <ul className="mt-4 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Cookies essentiels : Jusqu&apos;à ce que vous les supprimiez</li>
              <li>Cookies analytiques : Maximum 24 mois</li>
              <li>Données de contact : Maximum 3 ans après le dernier contact</li>
              <li>Logs serveur : Maximum 90 jours</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              8. Vos droits (RGPD)
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Droit d&apos;accès</strong> : Obtenir une copie de vos données personnelles
              </li>
              <li>
                <strong>Droit de rectification</strong> : Corriger vos données inexactes ou
                incomplètes
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> : Demander la suppression de vos données
              </li>
              <li>
                <strong>Droit à la limitation</strong> : Limiter le traitement de vos données
              </li>
              <li>
                <strong>Droit à la portabilité</strong> : Recevoir vos données dans un format
                structuré
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> : Vous opposer au traitement de vos données
              </li>
              <li>
                <strong>Droit de retirer votre consentement</strong> : Retirer votre consentement
                aux cookies analytiques à tout moment
              </li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:rayan.sekkat@example.com"
                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                rayan.sekkat@example.com
              </a>
              .
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              9. Sécurité des données
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Connexion HTTPS sécurisée (TLS 1.3)</li>
              <li>En-têtes de sécurité HTTP (CSP, X-Frame-Options, etc.)</li>
              <li>Hébergement sur une infrastructure sécurisée (Vercel)</li>
              <li>Audits de sécurité réguliers</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              10. Transferts internationaux de données
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Vos données peuvent être transférées et stockées sur des serveurs situés en dehors de
              l&apos;Union Européenne, notamment aux États-Unis (Vercel, Google). Ces transferts
              sont effectués conformément au RGPD et aux clauses contractuelles types de la
              Commission européenne.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              11. Modifications de cette politique
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. La
              date de la dernière mise à jour est indiquée en haut de cette page. Nous vous
              encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">12. Contact</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos
              droits, contactez-nous :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                Email :{" "}
                <a
                  href="mailto:rayan.sekkat@example.com"
                  className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  rayan.sekkat@example.com
                </a>
              </li>
              <li>Délai de réponse : Maximum 1 mois</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              13. Autorité de contrôle
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer
              une plainte auprès de la Commission Nationale de l&apos;Informatique et des Libertés
              (CNIL) :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                Site web :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  www.cnil.fr
                </a>
              </li>
              <li>Adresse : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France</li>
              <li>Téléphone : +33 1 53 73 22 22</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
