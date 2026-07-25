"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sits inside a card whose whole surface is a link, so the click must not
 * bubble into the navigation. `relative z-10` keeps it above the stretched
 * link overlay in WorkGrid.
 */
export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard is unavailable outside a secure context; the command is
      // still on screen to select by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied" : "Copy"}
      className={`relative z-10 shrink-0 border border-rule p-1.5 transition-colors duration-200 hover:border-cool ${
        copied ? "text-warm" : "text-faint hover:text-ink"
      }`}
    >
      {copied ? (
        <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M3 8.5l3.2 3.2L13 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
          <rect
            x="5.2"
            y="5.2"
            width="8.3"
            height="8.3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M10.8 5.2V2.5H2.5v8.3h2.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      )}
    </button>
  );
}
