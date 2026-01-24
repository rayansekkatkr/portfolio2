"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
  easing: "ease",
  speed: 400,
});

export default function ProgressBar() {
  useEffect(() => {
    // Listen for route changes (hash changes for single page navigation)
    const handleHashChange = () => {
      NProgress.start();
      setTimeout(() => {
        NProgress.done();
      }, 400);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}

// Export functions for manual control (e.g., form submissions)
export const startProgress = () => NProgress.start();
export const doneProgress = () => NProgress.done();
export const setProgress = (progress: number) => NProgress.set(progress);
