/* eslint-disable global-require */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins Regular"],
        bold: ["Poppins Bold"],
        semibold: ["Poppins SemiBold"],
        extrabold: ["Poppins ExtraBold"]
      },
      colors: {
        default: {
          DEFAULT: "#3A3A3A",
          light: "#636363"
        },
        subtitle: "#AC92A6",
        transparent: "transparent",
        current: "currentColor",
        black: "#1C1F21",
        white: "#F5F5F5",
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        brand: {
          DEFAULT: "#4D7C8A",
          slight: "#F4F5F6",
          light: "#BED4DA",
          dark: "#1D2F34",
          slightdark: "#1A2123"
        },
        brandDefault: {
          DEFAULT: "#73937E",
          slight: "#F4F6F5",
          light: "#D1DCD5",
          dark: "#2C3A31",
          slightdark: "#1A2123"
        },
      },
    },
    variants: {
      extend: {
        ringWidth: ["hover"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
