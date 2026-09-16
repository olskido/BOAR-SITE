"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { contractAddress } from "@/config/site";

function middleTruncate(value: string, start = 5, end = 4) {
  if (value.length <= start + end + 3) return value;
  return `${value.slice(0, start)}…${value.slice(-end)}`;
}

export function CopyAddress({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contractAddress);
      } else {
        // Legacy fallback
        const ta = document.createElement("textarea");
        ta.value = contractAddress;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Silently ignore — clipboard may be unavailable in some contexts.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy contract address"
      aria-label={
        copied ? "Contract address copied" : `Copy contract address ${contractAddress}`
      }
      className={`group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-surface-raised/80 px-4 py-3 text-left transition hover:border-boar-green/50 ${className}`}
    >
      <span className="shrink-0 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        CA:
      </span>

      <span className="min-w-0 flex-1 font-mono text-sm text-ink">
        {/* small screens: middle-truncated (full address is still copied) */}
        <span className="block truncate sm:hidden">
          {middleTruncate(contractAddress)}
        </span>
        {/* larger screens: full address */}
        <span className="hidden truncate sm:block">{contractAddress}</span>
      </span>

      <span
        className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"
        aria-live="polite"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-boar-green" aria-hidden="true" />
            <span className="text-boar-green">Copied</span>
          </>
        ) : (
          <Copy
            className="h-4 w-4 text-ink-muted transition group-hover:text-boar-green"
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
}
