/**
 * Colours map to the CSS custom properties defined in app/globals.css, so a
 * class like `bg-panel` follows the theme without a `dark:` variant.
 * See PROPOSAL.md §11.
 *
 * Note: because these are plain hex vars rather than raw channels, Tailwind's
 * opacity modifiers (`bg-panel/50`) do not work. Use color-mix() in CSS when
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
        "bg-2": "var(--bg-2)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        rule: "var(--rule)",
        "rule-soft": "var(--rule-soft)",
        ink: "var(--text)",
        mute: "var(--mute)",
        faint: "var(--faint)",
        cool: "var(--cool)",
        warm: "var(--warm)",
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      maxWidth: {
        prose: "66ch",
      },
    },
  },
  plugins: [],
};
