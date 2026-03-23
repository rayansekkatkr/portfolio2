import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import ProgressBar from "@/components/ui/ProgressBar";
import Script from "next/script";
import "./globals.css";
import "./nprogress.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayansekkat.com"),
  title: {
    default: "Rayan Sekkat | Full-Stack Developer Portfolio",
    template: "%s | Rayan Sekkat",
  },
  description:
    "AI-Powered Full-Stack Developer specializing in Next.js, React, TypeScript, Python, and FastAPI. View my projects and get in touch.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Web Development",
    "AI Integration",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Rayan Sekkat", url: "https://rayansekkat.com" }],
  creator: "Rayan Sekkat",
  publisher: "Rayan Sekkat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayansekkat.com",
    siteName: "Rayan Sekkat Portfolio",
    title: "Rayan Sekkat | Full-Stack Developer Portfolio",
    description:
      "AI-Powered Full-Stack Developer specializing in Next.js, React, TypeScript, Python, and FastAPI",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Rayan Sekkat - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Sekkat | Full-Stack Developer Portfolio",
    description:
      "AI-Powered Full-Stack Developer specializing in Next.js, React, TypeScript, Python, and FastAPI",
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://rayansekkat.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// Script to prevent FOUC (Flash of Unstyled Content) - Force dark theme
const themeScript = `
  (function() {
    document.documentElement.classList.add('dark');
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayan Sekkat",
    jobTitle: "Full-Stack Developer",
    url: "https://rayansekkat.com",
    sameAs: [
      "https://github.com/rayan-sekkat",
      "https://linkedin.com/in/rayan-sekkat",
      "https://upwork.com/freelancers/rayan-sekkat",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AI Integration",
      "Full-Stack Development",
    ],
    description:
      "AI-Powered Full-Stack Developer specializing in Next.js, React, TypeScript, Python, and FastAPI",
  };

  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
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
        <meta name="theme-color" content="#0f0f19" />
      </head>
      <body className={`${plusJakarta.variable} antialiased`} suppressHydrationWarning>
        <ProgressBar />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
