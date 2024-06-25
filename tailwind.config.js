/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bungee: "'Bungee Spice', sans-serif",
        nabla:"'Nabla', system-ui",
        montserrat:"'Montserrat', sans-serif",
        prata:"'Prata', serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

