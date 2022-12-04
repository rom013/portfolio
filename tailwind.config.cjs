/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    "*.html"
  ],
  theme: {
    extend: {
      colors:{
        "blue-300" : "#00B2FF",
        "blue-500" : "#3B72FF"
      },
      fontFamily:{
        "Orbitron" : "'Orbitron', sans-serif",
        "RobotoCondensed" : "'Roboto Condensed', sans-serif"
      },
      boxShadow:{
        "shadow-1" : "0px 0px 15px #99C8FF",
        "shadow-2" : "-25px -25px 0px #66ACFF"
      },
      backgroundImage:{
        "banner" : "url(./src/assets/img/banner.png)",
        "gradient-bg" : "linear-gradient(270deg, #121212 0%, #020A21 52.14%, #020A1F 100%);"
      }
    },
  },
  plugins: [],
}