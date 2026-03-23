"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import dynamic from "next/dynamic";
import { GrainOverlay } from "@/components/ui/magic/GrainOverlay";

const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), {
  ssr: false,
});

const CookieConsent = dynamic(() => import("@/components/ui/CookieConsent"), {
  ssr: false,
});

function ConditionalAnalytics() {
  // Check if analytics is enabled from localStorage on mount
  if (typeof window !== "undefined") {
    const consent = localStorage.getItem("cookie-consent");
    const analyticsFlag = localStorage.getItem("analytics-enabled");

    if (consent) {
      const preferences = JSON.parse(consent);
      const analyticsEnabled = preferences.analytics && analyticsFlag === "true";

      if (analyticsEnabled) {
        return (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        );
      }
    }
  }

  return null;
}

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
        <GrainOverlay opacity={0.025} />
        <ScrollToTop />
        <ConditionalAnalytics />
        <CookieConsent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
