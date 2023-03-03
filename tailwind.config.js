// const { colors } = require("tailwindcss");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "./index.html"), join(__dirname, "./*.{html, js}")],
  theme: {
    extend: {},
    // colors: { "brown-dark": "#353434", black: "#000", ...colors },
  },
  plugins: [],
};
