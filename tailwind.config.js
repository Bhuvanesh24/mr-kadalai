/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#EBB22F',
          dark: '#121212',
        }
      },
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
        'ulm': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/949a4f17-37a0-44e8-9ad1-27f4925fe5bc.png')",
        'menu-bg': "url('/assets/488a0198-bfd1-4e89-9337-a805dde105a6.png')",
      }
    },
  },
  plugins: [],
}
