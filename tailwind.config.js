/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFE800",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-bottom": {
          "clip-path": "polygon(0 80%, 35% 95%, 100% 80%, 100% 100%, 0 100%)",
        },
      });
    },
  ],
};
