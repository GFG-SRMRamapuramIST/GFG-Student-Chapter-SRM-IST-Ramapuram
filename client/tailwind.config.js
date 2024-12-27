/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gfg-green': '#2f8d46',
        'gfg-black': '#1f1f1f',
        'gfg-white': '#f1f1f1',
        'hover-gray': '#f7f9fa',
      },
    },
  },
  plugins: [],
};