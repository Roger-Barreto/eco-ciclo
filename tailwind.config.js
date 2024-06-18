/** @type {import('tailwindcss').Config} */

import tailgridsPlugin from 'tailgrids/plugin';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        '4xl': '80px',
        '5xl': '200px',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#13C296',
        secondary: '#D0DB97',
        'text-primary': '#FFFFFFFF',
        'text-secondary': '#B6B8B7',
        'background-dark': '#0D0E0D',
      },
      spacing: {
        nav: '80px',
      },
    },
  },
  plugins: [
    tailgridsPlugin,
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-0': {
          '-webkit-text-stroke-width': '0',
        },
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': '#13C296',
        },
        '.text-stroke-secondary': {
          '-webkit-text-stroke-color': '#D0DB97',
        },
        // Add more colors or widths as needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
