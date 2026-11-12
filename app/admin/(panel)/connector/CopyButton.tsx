"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="btn-primary py-2 text-sm shrink-0"
    >
      {copied ? "Kopyalandı ✓" : "Kopyala"}
    </button>
  );
}
