/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
 
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#379F2E",
          secondary: "#89C54A",
          "primary-content": 'white',
          "secondary-content": 'white'
        }
      }
      ]},
  plugins: [
    require('daisyui'),
  ],
}