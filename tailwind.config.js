/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "../node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        logo: "Eclat",
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

        "yellow-sea": {
          50: "#fffbf2",
          100: "#fff7e6",
          200: "#ffeabf",
          300: "#ffdd99",
          400: "#fec44d",
          500: "#feaa00",
          600: "#e59900",
          700: "#bf8000",
          800: "#986600",
          900: "#7c5300",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
