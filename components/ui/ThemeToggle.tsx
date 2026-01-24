"use client";

import { useTheme } from "@/lib/theme/useTheme";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    let newTheme: "light" | "dark" | "system";
    if (theme === "light") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "system";
    } else {
      newTheme = "light";
    }
    setTheme(newTheme);

    // Announce theme change to screen readers
    const announcement = document.getElementById("theme-announcement");
    if (announcement) {
      const message =
        newTheme === "system"
          ? "Theme changed to system preference"
          : `Theme changed to ${newTheme} mode`;
      announcement.textContent = message;
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-4 w-4" />;
    }
    return resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
  };

  const getLabel = () => {
    if (theme === "system") {
      return "System theme (click to switch to light)";
    }
    return resolvedTheme === "dark"
      ? "Dark theme (click to switch to system)"
      : "Light theme (click to switch to dark)";
  };

  return (
    <>
      {/* Screen reader announcement region */}
      <div
        id="theme-announcement"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
      <button
        type="button"
        onClick={cycleTheme}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            cycleTheme();
          }
        }}
        className="animate-fade-in inline-flex items-center justify-center rounded-lg p-2 text-gray-700 opacity-0 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
        style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
        aria-label={getLabel()}
        title={getLabel()}
      >
        {getIcon()}
      </button>
    </>
  );
}
