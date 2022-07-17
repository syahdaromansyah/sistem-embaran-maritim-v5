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
    backgroundPosition: {
      'center_t-300px&r-100px': 'center, top -300px right -100px',
      'center_t-560px&r-100px': 'center, top -560px right -100px',
      ...twDefaultTheme.backgroundPosition,
    },
    backgroundSize: {
      'cover_100%': 'cover, 100%',
      'cover_160%': 'cover, 160%',
      ...twDefaultTheme.backgroundSize,
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
