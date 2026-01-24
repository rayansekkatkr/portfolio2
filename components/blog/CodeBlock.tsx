"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const language = className?.replace("language-", "") || "text";

  return (
    <div className="group relative my-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 rounded-lg bg-gray-800 p-2 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <div className="absolute top-12 right-2 text-xs text-gray-500">{language}</div>
      <pre className="overflow-x-auto rounded-lg bg-gray-950 p-4">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}
