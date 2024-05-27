/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      customGreen: "#00672E",
    },

    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};

