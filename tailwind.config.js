/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        webGreen: "#00672E",
        fadeWhite: "#EFECEA",
      },
    },
  },
  plugins: [],
};
