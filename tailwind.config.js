/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,jsx,mdx}',
      './src/components/**/*.{js,jsx,mdx}',
      './src/app/**/*.{js,jsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#FFD6E0',
          'primary-dark': '#FFAEC0',
          'secondary': '#1A1A1A',
          'accent': '#ACFF33', // Neon green for CTAs
          'light-bg': '#F8F8F8',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }