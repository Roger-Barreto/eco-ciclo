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
  plugins: [tailgridsPlugin],
};
