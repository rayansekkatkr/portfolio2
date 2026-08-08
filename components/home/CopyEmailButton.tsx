"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copiedLabel: string;
}

// Progressive enhancement: mailto/LinkedIn links next to this always work if clipboard fails.
export default function CopyEmailButton({ email, label, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable — the adjacent mailto link remains the fallback.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="border-se-line bg-se-surface text-se-text hover:border-se-accent focus-visible:outline-se-accent inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {copied ? (
        <Check aria-hidden="true" className="text-se-accent h-4 w-4" />
      ) : (
        <Copy aria-hidden="true" className="h-4 w-4" />
      )}
      {copied ? copiedLabel : label}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}
