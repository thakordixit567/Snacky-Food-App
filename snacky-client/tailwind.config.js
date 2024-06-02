/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "orange": "#EC8B32",
        "green" : "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "primaryBG": "##FCFCFC",
      },
      fontFamily: {
        "primary": ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [require('daisyui')],
}

