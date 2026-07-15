/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': 'Century Gothic'
      }
    },
  },
  plugins: [],
}