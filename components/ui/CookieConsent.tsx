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
      <div className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="text-primary-600 dark:text-primary-400 h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Respect de votre vie privée
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Ce site utilise des cookies essentiels pour son fonctionnement (thème, langue) et
                  des cookies optionnels pour analyser l&apos;utilisation du site (Vercel Analytics,
                  Google Analytics). Vous pouvez accepter tous les cookies, refuser les cookies
                  optionnels, ou personnaliser vos préférences.
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Consultez notre{" "}
                  <Link
                    href="/privacy"
                    className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 underline"
                  >
                    Politique de Confidentialité
                  </Link>{" "}
                  pour plus d&apos;informations.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
                  >
                    Accepter tout
                  </button>
                  <button
                    onClick={rejectOptional}
                    className="focus:ring-primary-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                  >
                    Refuser les cookies optionnels
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="focus:ring-primary-500 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                  >
                    <Settings className="h-4 w-4" />
                    Personnaliser
                  </button>
                </div>
              </div>
              <button
                onClick={rejectOptional}
                className="flex-shrink-0 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Préférences de cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                aria-label="Retour"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="text-primary-600 focus:ring-primary-500 mt-1 h-4 w-4 rounded border-gray-300"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    Cookies essentiels{" "}
                    <span className="ml-2 text-xs font-normal text-gray-500">(Obligatoires)</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Nécessaires au fonctionnement du site (préférences de thème et de langue).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-600">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="text-primary-600 focus:ring-primary-500 mt-1 h-4 w-4 rounded border-gray-300"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">
                    Cookies analytiques{" "}
                    <span className="ml-2 text-xs font-normal text-gray-500">(Optionnels)</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Nous permettent de comprendre comment vous utilisez le site pour
                    l&apos;améliorer (Vercel Analytics, Google Analytics 4).
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={savePreferences}
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
              >
                Enregistrer mes préférences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="focus:ring-primary-500 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
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
