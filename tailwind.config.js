/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: '#381f37',
        bgVariant: '#692c6c',
        primary: '#ff4dfc',
        primaryVariant: 'rgba(77, 181, 255, 0.4)',
        light: 'rgba(255, 255, 255, 0.6)',
      },
      transitionProperty: {
        default: 'all',
      },
    },
  },
  plugins: [],
}
