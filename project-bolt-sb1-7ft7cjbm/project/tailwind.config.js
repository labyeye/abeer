/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'denton-bold': ['Denton Bold', 'serif'], // Add this line
      },
    },
  },
  plugins: [],
};