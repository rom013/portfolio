/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    "*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        "Orbitron" : "'Orbitron', sans-serif",
        "Rajdhani" : "'Rajdhani', sans-serif",
        "Sora" : "'Sora', sans-serif",
        "Lato" : "'Lato', sans-serif"
      },
    },
  },
  plugins: [],
}