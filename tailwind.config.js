/**
 * Colours map to the CSS custom properties defined in app/globals.css, so a
 * class like `bg-panel` follows the theme without a `dark:` variant.
 * See PROPOSAL.md §3.2.
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
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        rule: "var(--rule)",
        "rule-soft": "var(--rule-soft)",
        ink: "var(--text)",
        mute: "var(--mute)",
        faint: "var(--faint)",
        cool: "var(--cool)",
        warm: "var(--warm)",
        q1: "var(--q1)",
        q2: "var(--q2)",
        q3: "var(--q3)",
        q4: "var(--q4)",
        q5: "var(--q5)",
      },
      fontFamily: {
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
