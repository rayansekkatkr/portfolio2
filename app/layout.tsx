import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import ProgressBar from "@/components/ui/ProgressBar";
import Script from "next/script";
import "./globals.css";
import "./nprogress.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-rayan-sekkat.vercel.app"),
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
  authors: [{ name: "Rayan Sekkat", url: "https://portfolio-rayan-sekkat.vercel.app" }],
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
    url: "https://portfolio-rayan-sekkat.vercel.app",
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
    canonical: "https://portfolio-rayan-sekkat.vercel.app",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

// Script to prevent FOUC (Flash of Unstyled Content)
const themeScript = `
  (function() {
    function getTheme() {
      const theme = localStorage.getItem('theme');
      if (theme && ['light', 'dark', 'system'].includes(theme)) {
        return theme;
      }
      return 'system';
    }
    
    function getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    const theme = getTheme();
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
    document.documentElement.classList.add(resolvedTheme);
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
    url: "https://portfolio-rayan-sekkat.vercel.app",
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
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProgressBar />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
