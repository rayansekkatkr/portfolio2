"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Cookie, Settings } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(() => {
    // Initialize visibility from localStorage
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent");
      return !consent; // Show if no consent stored
    }
    return false;
  });

  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(() => {
    // Initialize preferences from localStorage
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        return JSON.parse(consent);
      }
    }
    return {
      essential: true, // Always enabled
      analytics: false,
    };
  });

  const enableAnalytics = () => {
    // Enable Vercel Analytics and GA4
    if (typeof window !== "undefined") {
      window.localStorage.setItem("analytics-enabled", "true");
      // Reload to activate analytics
      window.location.reload();
    }
  };

  useEffect(() => {
    // Enable analytics if consent was already given
    if (preferences.analytics) {
      const analyticsEnabled = localStorage.getItem("analytics-enabled");
      if (!analyticsEnabled) {
        enableAnalytics();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disableAnalytics = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("analytics-enabled");
    }
  };

  const acceptAll = () => {
    const newPreferences = { essential: true, analytics: true };
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    enableAnalytics();
    setIsVisible(false);
  };

  const rejectOptional = () => {
    const newPreferences = { essential: true, analytics: false };
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    disableAnalytics();
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    if (preferences.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="glass-card mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-2xl">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">
                  Respect de votre vie privée
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ce site utilise des cookies essentiels pour son fonctionnement (thème, langue) et
                  des cookies optionnels pour analyser l&apos;utilisation du site (Vercel Analytics,
                  Google Analytics). Vous pouvez accepter tous les cookies, refuser les cookies
                  optionnels, ou personnaliser vos préférences.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Consultez notre{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-primary underline hover:no-underline"
                  >
                    Politique de Confidentialité
                  </Link>{" "}
                  pour plus d&apos;informations.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                  >
                    Accepter tout
                  </button>
                  <button
                    onClick={rejectOptional}
                    className="rounded-2xl border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-background focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                  >
                    Refuser les cookies optionnels
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-background focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                  >
                    <Settings className="h-4 w-4" />
                    Personnaliser
                  </button>
                </div>
              </div>
              <button
                onClick={rejectOptional}
                className="flex-shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-foreground">
                Préférences de cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Retour"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-4">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground">
                    Cookies essentiels{" "}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">(Obligatoires)</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nécessaires au fonctionnement du site (préférences de thème et de langue).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground">
                    Cookies analytiques{" "}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">(Optionnels)</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nous permettent de comprendre comment vous utilisez le site pour
                    l&apos;améliorer (Vercel Analytics, Google Analytics 4).
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={savePreferences}
                className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                Enregistrer mes préférences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-2xl border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-background focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
