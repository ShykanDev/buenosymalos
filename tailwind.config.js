/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animated'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['Afacad Flux', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindAnimated],
}
