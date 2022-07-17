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
      backgroundImage: {
        'semar-logo-bg':
          "linear-gradient(rgba(241, 245, 249, 0.88), rgba(241, 245, 249, 1)), url('/assets/images/semar.png')",
      },
      fontFamily: {
        inter: ['Inter', ...twDefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
