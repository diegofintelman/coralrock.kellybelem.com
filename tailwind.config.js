/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral-dark': '#1a1a1a',
        'coral-sand': '#e6dfd5',
        'coral-gold': '#c5a880',
        'coral-stone': '#8c8c8c',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      height: {
        'screen-80': '80vh',
      }
    },
  },
  plugins: [],
}
