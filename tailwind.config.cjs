/** @type {import('tailwindcss').Config} */

const twDefaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      '2xs': '475px',
      ...twDefaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: ['Inter', ...twDefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
