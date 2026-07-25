"use client";

import { useEffect, useState } from "react";

import DarkmodeButton from "./DarkmodeButton";
import useDarkMode from "./hooks/useDarkMode";

/**
 * Half-filled circle — the state is encoded in which side is solid, so the
 * control reads without a label. Replaces the emoji the button used to show.
 */
function ThemeIcon({ dark }: { dark: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      aria-hidden="true"
      style={{
        transform: dark ? "rotate(180deg)" : "none",
        transition: "transform 0.25s ease",
      }}
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 1a7 7 0 0 0 0 14z" fill="currentColor" />
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
    <DarkmodeButton title="Switch theme" onClick={() => setDark(!dark)}>
      {mounted ? (
        <ThemeIcon dark={dark} />
      ) : (
        <span className="block h-[13px] w-[13px]" />
      )}
    </DarkmodeButton>
  );
};

export default DarkmodeButtonWrapper;
