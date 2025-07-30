/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1A2633',           // Darker navy
        'charcoal-gray': '#393E4A',  // Darker charcoal-gray
        'beige': '#B8A77D',          // Darker beige
        'cream': '#E6E1D3',          // Darker cream
      },
    },
  },
  plugins: [],
};