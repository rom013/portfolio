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
        "RobotoCondensed" : "'Roboto Condensed', sans-serif",
        "IBMMono" : "'IBM Plex Mono', monospace"
      },
      boxShadow:{
        "shadow-1" : "0px 0px 15px #99C8FF",
        "shadow-2" : "-25px -25px 0px #66ACFF",
        "shadow-3" : "0px 0px 3px #00B2FF"
      },
      backgroundImage:{
        "banner" : "url(/banner.png)",
        "night-neon" : "url(/greenNeonNight.jpg)",
        "gradient-bg" : "linear-gradient(270deg, #121212 0%, #020A21 52.14%, #020A1F 100%);",
        "gradient-blue-pink" : "linear-gradient(89.99deg, #DB00FF 0.01%, #6100FF 81.57%, rgba(97, 0, 255, 0) 101.04%);",
        "gradient-2" : "linear-gradient(45deg, rgb(185 59 255 / .35), rgb(59 114 255 / .45))"
      }
    },
  },
  plugins: [],
}