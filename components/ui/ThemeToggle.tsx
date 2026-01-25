"use client";

import { useTheme } from "@/lib/theme/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    const newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Announce theme change to screen readers
    const announcement = document.getElementById("theme-announcement");
    if (announcement) {
      announcement.textContent = `Theme changed to ${newTheme} mode`;
    }
  };

  const getIcon = () => {
    return resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
  };

  const getLabel = () => {
    return resolvedTheme === "dark"
      ? "Dark theme (click to switch to light)"
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
        className="animate-fade-in inline-flex h-9 w-9 items-center justify-center rounded-full opacity-0 text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground hover:scale-110"
        style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
        aria-label={getLabel()}
        title={getLabel()}
      >
        {getIcon()}
      </button>
    </>
  );
}
