/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'very-dark-gray': 'hsl(0, 0%, 17%)'
      },
      screens: {
        'mobile-l': '425px',
        600: '600px',
        1350: '1350px',
        1348: '1346px',
        'laptop-l': '1440px',
        1450: '1450px'
      }
    },
  },
  plugins: [],
}

