"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copiedLabel: string;
  className?: string;
}

// Progressive enhancement: mailto/LinkedIn links next to this always work if clipboard fails.
export default function CopyEmailButton({
  email,
  label,
  copiedLabel,
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable: the adjacent mailto link remains the fallback.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={
        className ??
        "border-se-line-strong text-se-text hover:bg-se-text hover:text-se-bg focus-visible:outline-se-accent font-meta inline-flex items-center gap-2 border px-3 py-2 text-[11px] tracking-[0.12em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      }
    >
      {copied ? (
        <Check aria-hidden="true" className="text-se-ok h-3.5 w-3.5" />
      ) : (
        <Copy aria-hidden="true" className="h-3.5 w-3.5" />
      )}
      {copied ? copiedLabel : label}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}
