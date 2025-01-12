/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize:{
        '2xl': '1.4rem',
      },
      letterSpacing:{
        widest: '.30em',
      }
    },
  },
  plugins: [],
}

