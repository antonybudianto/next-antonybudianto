"use client";

import { useEffect, useState } from "react";

import DarkmodeButton from "./DarkmodeButton";
import useDarkMode from "./hooks/useDarkMode";

/** Shows the theme the click switches to. */
function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
      </g>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DarkmodeButtonWrapper = () => {
  const { dark, setDark } = useDarkMode();

  /**
   * The server cannot know the resolved theme, so the first paint renders a
   * blank box of the same size and the icon appears once mounted. Without this
   * the markup mismatches whatever the head script already applied.
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <DarkmodeButton
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setDark(!dark)}
    >
      {mounted ? (
        <ThemeIcon dark={dark} />
      ) : (
        <span className="block h-4 w-4" />
      )}
    </DarkmodeButton>
  );
};

export default DarkmodeButtonWrapper;
