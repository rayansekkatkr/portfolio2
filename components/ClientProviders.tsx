"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
        <ScrollToTop />
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  );
}
