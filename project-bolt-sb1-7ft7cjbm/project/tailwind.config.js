/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'h-[500px]',
    'w-[500px]',
    'scale-100',
    'scale-75',
    'z-10',
    'z-20',
    'opacity-60',
    'border-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
