/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist' : ['Urbanist', 'sans-serif'],
        'clash-grotesk-bold' : ['Clash Grotesk Bold']
      }
    },
  },
  plugins: [],
}