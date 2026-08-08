import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { home } from "@/lib/content/home";
import { isLocale, LINKS, LOCALES, SITE_URL, type Locale } from "@/lib/site";
import "../../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const OG_LOCALES: Record<Locale, string> = { en: "en_US", ko: "ko_KR" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { meta } = home[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    authors: [{ name: "Rayan Sekkat", url: SITE_URL }],
    creator: "Rayan Sekkat",
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ko: "/ko",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "profile",
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      url: `${SITE_URL}/${locale}`,
      siteName: "Rayan Sekkat",
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d12" },
  ],
};

// Applies a stored explicit theme before first paint; with nothing stored, the
// CSS prefers-color-scheme fallback in globals.css handles the system theme.
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        document.documentElement.classList.add(stored);
      }
    } catch (e) {}
  })();
`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { meta } = home[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayan Sekkat",
    jobTitle: "Full-Stack Engineer",
    description: meta.description,
    url: `${SITE_URL}/${locale}`,
    email: `mailto:${LINKS.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seoul",
      addressCountry: "KR",
    },
    sameAs: [LINKS.linkedin, LINKS.github],
    knowsAbout: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "AWS",
    ],
  };

  return (
    <html lang={locale} className="se-root scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${instrumentSerif.variable} ${plexMono.variable} bg-se-bg text-se-text antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
