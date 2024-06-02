/** @type {import('tailwindcss').Config} */

import tailgridsPlugin from "tailgrids/plugin"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailgridsPlugin],
}

