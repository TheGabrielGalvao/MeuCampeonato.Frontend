/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const theme = require("./theme");

module.exports = withMT({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
  darkMode: "class",
});
