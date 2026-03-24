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
    if (typeof window !== "undefined") {
      window.localStorage.setItem("analytics-enabled", "true");
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
      <div className="glass-card border-border mx-auto max-w-4xl overflow-hidden rounded-3xl border shadow-2xl">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="text-primary h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground text-lg font-bold">Respect de votre vie privée</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Ce site utilise des cookies essentiels pour son fonctionnement (thème, langue) et
                  des cookies optionnels pour analyser l&apos;utilisation du site (Vercel Analytics,
                  Google Analytics). Vous pouvez accepter tous les cookies, refuser les cookies
                  optionnels, ou personnaliser vos préférences.
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Consultez notre{" "}
                  <Link
                    href="/privacy"
                    className="text-primary font-medium underline hover:no-underline"
                  >
                    Politique de Confidentialité
                  </Link>{" "}
                  pour plus d&apos;informations.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-primary shadow-primary/30 hover:shadow-primary/50 focus:outline-primary rounded-2xl px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline focus:outline-2 focus:outline-offset-2"
                  >
                    Accepter tout
                  </button>
                  <button
                    onClick={rejectOptional}
                    className="border-border bg-background/50 text-foreground hover:bg-background focus:outline-primary rounded-2xl border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 focus:outline focus:outline-2 focus:outline-offset-2"
                  >
                    Refuser les cookies optionnels
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="border-border bg-background/50 text-foreground hover:bg-background focus:outline-primary inline-flex items-center gap-2 rounded-2xl border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 focus:outline focus:outline-2 focus:outline-offset-2"
                  >
                    <Settings className="h-4 w-4" />
                    Personnaliser
                  </button>
                </div>
              </div>
              <button
                onClick={rejectOptional}
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex-shrink-0 rounded-lg p-1 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-foreground text-lg font-bold">Préférences de cookies</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-1 transition-colors"
                aria-label="Retour"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="border-border bg-muted/30 flex items-start gap-3 rounded-2xl border p-4">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="border-border text-primary focus:ring-primary mt-1 h-4 w-4 rounded"
                />
                <div className="flex-1">
                  <div className="text-foreground font-semibold">
                    Cookies essentiels{" "}
                    <span className="text-muted-foreground ml-2 text-xs font-normal">
                      (Obligatoires)
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Nécessaires au fonctionnement du site (préférences de thème et de langue).
                  </p>
                </div>
              </div>
              <div className="border-border flex items-start gap-3 rounded-2xl border p-4">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="border-border text-primary focus:ring-primary mt-1 h-4 w-4 rounded"
                />
                <div className="flex-1">
                  <div className="text-foreground font-semibold">
                    Cookies analytiques{" "}
                    <span className="text-muted-foreground ml-2 text-xs font-normal">
                      (Optionnels)
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Nous permettent de comprendre comment vous utilisez le site pour
                    l&apos;améliorer (Vercel Analytics, Google Analytics 4).
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={savePreferences}
                className="bg-primary shadow-primary/30 hover:shadow-primary/50 focus:outline-primary rounded-2xl px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline focus:outline-2 focus:outline-offset-2"
              >
                Enregistrer mes préférences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="border-border bg-background/50 text-foreground hover:bg-background focus:outline-primary rounded-2xl border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 focus:outline focus:outline-2 focus:outline-offset-2"
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
