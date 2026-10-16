/**
 * Colours map to the CSS custom properties defined in app/globals.css, so a
 * class like `bg-surface` follows the theme without a `dark:` variant.
 * See PROPOSAL.md §12.
 *
 * Note: because these are plain hex vars rather than raw channels, Tailwind's
 * opacity modifiers (`bg-surface/50`) do not work. Use color-mix() in CSS when
 * transparency is needed.
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        subtle: "var(--subtle)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        live: "var(--live)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
