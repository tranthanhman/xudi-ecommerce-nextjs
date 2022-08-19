/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        'primary': '#2467ff',
        'secondary': '#fff',
        'tertiary': '#333',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}