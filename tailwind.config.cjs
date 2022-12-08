/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'Montserrat', 'Arial', 'sans-serif'],
      },
      fontSize: {
        sm: ['1rem', '22px'],
        base: ['1.125rem', '24px'],
        lg: ['1.25rem', '26px'],
        xl: ['1.5rem', '32px'],
        xxl: ['2.5rem', '32px'],
        h1: ['3.75rem', '44px'],
      },
      colors: {
        'clr-green': 'hsl(100, 97%, 37%);',
        'clr-green--dark': 'hsl(100, 97%, 37%);',
        'clr-blue': 'hsl(200, 99%, 45%);',
        'clr-blue--dark': 'hsl(214, 100%, 29%);',
        'clr-text': 'hsl(0, 0%, 13%);',
        'clr-error': 'hsl(21, 100%, 51%)',
      },
      spacing: {
        'container-padding': '7.5vw',
      },
      padding: {
        mainBtnP: '1.25rem',
      },
      backgroundImage: {
        'hero-not-found':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../src/imgs/not-found.webp')",
        'hero-home':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('../src/imgs/home/hero.jpg')",
      },
    },
  },
  plugins: [],
};
