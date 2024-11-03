module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeslide: {
          "0%": { opacity: 0, transform: "translateX(-10%)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
      },
      animation: {
        fadeslide: "fadeslide 1s linear",
      },
    },
  },
  variants: {
    animation: ["responsive"],
    bgColor: ["hover", "focus"],
    extend: {},
  },
  plugins: [],
};
