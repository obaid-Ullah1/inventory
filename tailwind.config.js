/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['poppins', 'sans-serif'], // For Google Fonts
        'roboto': ['roboto', 'sans-serif'], // For Google Fonts
    },

    },
  },
  plugins: [],
}

