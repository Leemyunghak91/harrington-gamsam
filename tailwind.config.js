/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#112255', // Harrington main navy blue
        secondary: '#C4A478', // Harrington gold/beige
      }
    },
  },
  plugins: [],
}
