/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'very-dark-gray': 'hsl(0, 0%, 17%)'
      }
    },
  },
  plugins: [],
}

