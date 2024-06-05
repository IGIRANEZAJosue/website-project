/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}", "./*.{html,js}"],
   theme: {
      extend: {
         colors: {
            customYellow: "#FFE800",
            webGreen: "#00672E",
            fadeWhite: "#EFECEA",
         },
         fontFamily: {
            outfit: ["Outfit", "sans-serif"],
         },
         screens: {
            cl: "1340px",
         },
      },
   },
   plugins: [
      function ({ addUtilities }) {
         addUtilities({
            ".clip-bottom": {
               "clip-path":
                  "polygon(0 80%, 35% 95%, 100% 80%, 100% 100%, 0 100%)",
            },
         });
      },
   ],
};
