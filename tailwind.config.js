module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
    },
    fontFamily: {
      Cursive: ["Water Brush", "cursive"],
      Roboto: ["Roboto Condensed","sans-serif"],
      Lora: ["Lora", "serif"]
     },
    },
    
  },
  plugins: [],
}