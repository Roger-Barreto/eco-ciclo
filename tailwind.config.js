/** @type {import('tailwindcss').Config} */

import tailgridsPlugin from 'node_modules/tailgrids/plugin';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#13C296',
      secondary: '#D0DB97',
      textPrimary: '#FFFFFFFF',
      textSecondary: '#B6B8B7',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [tailgridsPlugin],
};
