"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;

      if (documentHeight > 0) {
        const scrollProgress = (scrollTop / documentHeight) * 100;
        setProgress(Math.min(Math.max(scrollProgress, 0), 100));
      }
    };

    // Calculate on mount
    calculateProgress();

    // Add scroll listener
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 h-1 bg-gray-200 dark:bg-gray-800"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="bg-primary-600 dark:bg-primary-500 h-full transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
