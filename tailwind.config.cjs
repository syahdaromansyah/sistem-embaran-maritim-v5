/** @type {import('tailwindcss').Config} */

const twDefaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...twDefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
