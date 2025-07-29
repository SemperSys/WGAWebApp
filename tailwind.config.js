/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#2C3E50',
        'charcoal-gray': '#525866',
        'beige': '#D4C4A8',
        'cream': '#F5F1E8',
      },
    },
  },
  plugins: [],
};