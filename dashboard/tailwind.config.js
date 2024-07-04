/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primeFont: ['PrimeFont', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
 
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#379F2E",
          secondary: "#89C54A",
          'primary-content' : '#40403F',
          "primary-text": 'white',
          "secondary-content": 'white'
        }
      }
      ]},
  plugins: [
    require('daisyui'),
  ],
}