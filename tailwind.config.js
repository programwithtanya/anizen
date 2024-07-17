/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'varela': ["Varela Round", "sans-serif"],
        "vidaloka": [ "Vidaloka", "serif"],
        "sans":[ "Open Sans", "sans-serif"],
        "Montserrat": [ "Montserrat", "sans-serif"]
      },
    },
  },
  
  plugins: [],
}