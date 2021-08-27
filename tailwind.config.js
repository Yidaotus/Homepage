const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Dosis"],
      bold: ["Dosis Bold"],
      semibold: ["Dosis SemiBold"],
      extrabold: ["Dosis ExtraBold"]
    },
    colors: {
      default: {
        DEFAULT: "#3A3A3A",
        light: "#636363"
      },
      subtitle: "#AC92A6",
      transparent: "transparent",
      current: "currentColor",
      black: {
        light: "#42444C",
        DEFAULT: "#383A42",
      },
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: {
        light: "#F1F9F1",
        DEFAULT: "#548687",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
