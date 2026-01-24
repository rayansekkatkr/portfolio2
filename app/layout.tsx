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
  title: "Rayan Sekkat | Full-Stack Developer Portfolio",
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
  ],
  authors: [{ name: "Rayan Sekkat" }],
  openGraph: {
    title: "Rayan Sekkat | Full-Stack Developer Portfolio",
    description: "AI-Powered Full-Stack Developer specializing in Next.js, React, and Python",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Sekkat | Full-Stack Developer Portfolio",
    description: "AI-Powered Full-Stack Developer specializing in Next.js, React, and Python",
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
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
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
