/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#541554',
        'light': '#fff',
        
      },
      fontFamily: {
        'Roboto': 'sans-serif',
      },
    },
  },
  plugins: [],
}