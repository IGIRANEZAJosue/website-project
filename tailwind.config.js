/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}", "./*.{html,js}"],
   theme: {
      extend: {
         colors: {
            fadeWhite: "#EFECEA",
         },
      },

      fontFamily: {
         outfit: ["Outfit", "sans-serif"],
      },
   },
   plugins: [],
};
