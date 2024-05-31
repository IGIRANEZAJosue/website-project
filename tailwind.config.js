/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      customYellow: "#FFE800",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};

