/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1A365D',
          900: '#0D1F3C'
        },
      },
    },
  },
  plugins: [],
}
