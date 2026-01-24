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

        <div className="prose prose-gray dark:prose-invert mt-8 max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              1. Acceptation des Conditions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              En accédant et en utilisant ce site web (portfolio-rayan-sekkat.vercel.app), vous
              acceptez d&apos;être lié par ces conditions d&apos;utilisation et par notre politique
              de confidentialité. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas
              utiliser ce site.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              2. Utilisation du Site
            </h2>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              2.1 Usage autorisé
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Ce site portfolio présente mes compétences, projets et articles de blog en tant que
              développeur full-stack. Vous êtes autorisé à :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Consulter le contenu à des fins d&apos;information personnelle</li>
              <li>Partager les liens vers les pages du site</li>
              <li>Me contacter via les moyens fournis</li>
            </ul>

            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              2.2 Usage interdit
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Vous ne devez pas :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Copier, reproduire ou redistribuer le contenu sans autorisation</li>
              <li>Utiliser le site à des fins illégales ou non autorisées</li>
              <li>Tenter d&apos;accéder à des zones non publiques du site</li>
              <li>Surcharger ou perturber le fonctionnement du site</li>
              <li>Collecter des informations sur d&apos;autres utilisateurs</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              3. Propriété Intellectuelle
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Tous les contenus présents sur ce site sont protégés par les droits de propriété
              intellectuelle :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Textes et articles</strong> : © Rayan Sekkat, tous droits réservés
              </li>
              <li>
                <strong>Code source</strong> : Le code de ce portfolio peut être consulté sur GitHub
                à des fins éducatives
              </li>
              <li>
                <strong>Images de projets</strong> : Appartiennent à Rayan Sekkat ou sont utilisées
                avec permission
              </li>
              <li>
                <strong>Design et marque</strong> : Le design et l&apos;identité visuelle sont
                protégés
              </li>
            </ul>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Pour toute demande d&apos;utilisation du contenu, contactez-moi à{" "}
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
              4. Contenu Utilisateur
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Si vous soumettez du contenu via le formulaire de contact ou les commentaires de blog
              (fonctionnalité à venir) :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
              <li>Vous garantissez que le contenu ne viole aucune loi ou droits de tiers</li>
              <li>
                Vous m&apos;accordez le droit d&apos;utiliser ce contenu pour améliorer le site
              </li>
              <li>Je me réserve le droit de modérer ou supprimer tout contenu inapproprié</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              5. Limitation de Responsabilité
            </h2>
            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              5.1 Exactitude des informations
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Les informations fournies sur ce site sont à titre indicatif. Bien que je
              m&apos;efforce de maintenir les informations à jour et exactes, je ne peux garantir
              leur exactitude absolue. Les informations peuvent être modifiées sans préavis.
            </p>

            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              5.2 Disponibilité du site
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Je ne garantis pas que le site sera toujours disponible ou exempt d&apos;erreurs. Le
              site peut être temporairement indisponible pour maintenance ou mises à jour.
            </p>

            <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
              5.3 Liens externes
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Ce site peut contenir des liens vers des sites externes. Je ne suis pas responsable du
              contenu ou des pratiques de confidentialité de ces sites tiers.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              6. Modifications des Conditions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Je me réserve le droit de modifier ces conditions d&apos;utilisation à tout moment.
              Les modifications entreront en vigueur dès leur publication sur cette page. La date de
              dernière mise à jour sera mise à jour en conséquence. Votre utilisation continue du
              site après les modifications constitue votre acceptation des nouvelles conditions.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              7. Droit Applicable et Juridiction
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Ces conditions sont régies par le droit français. Tout litige relatif à
              l&apos;utilisation de ce site sera soumis à la compétence exclusive des tribunaux
              français.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">8. Résiliation</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Je me réserve le droit de restreindre, suspendre ou résilier votre accès au site à
              tout moment, sans préavis, en cas de violation de ces conditions ou pour toute autre
              raison légitime.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">9. Contact</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Pour toute question concernant ces conditions d&apos;utilisation, contactez-moi :
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
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
