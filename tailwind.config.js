/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#111111',           // Darker navy
        'charcoal-gray': '#1c2b49',  // Darker charcoal-gray
        'beige': '#FFFFFF',          // Darker beige
        'cream': '#F4F4F4',          // Darker cream
      },
    },
  },
  plugins: [],
};