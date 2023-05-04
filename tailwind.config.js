/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "../node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },

    colors: {
      primary: "#FEAA00",

      buttercup: {
        DEFAULT: "#F59E0B",
        50: "#FCE4BB",
        100: "#FBDCA8",
        200: "#FACD81",
        300: "#F8BD59",
        400: "#F7AE32",
        500: "#F59E0B",
        600: "#C07C08",
        700: "#8A5906",
        800: "#543603",
        900: "#1E1401",
        950: "#030200",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
