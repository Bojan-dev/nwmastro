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
        base: ['1.15rem', '30px'],
        lg: ['1.25rem', '26px'],
        h3: ['1.5rem', '24px'],
        h3_md: ['1.625rem', '26px'],
        h2_md: ['2rem', '22px'],
        xl: ['2.25rem', '42px'],
        xxl: ['2.5rem', '32px'],
        h1_md: ['3rem', '38px'],
        h1_lg: ['3.5rem', '42px'],
        h1: ['3.75rem', '44px'],
      },
      colors: {
        'clr-green': 'hsl(100, 97%, 37%);',
        'clr-green--dark': 'hsl(100, 97%, 32%);',
        'clr-blue': 'hsl(210,86%,42%)',
        'clr-blue--dark': 'hsl(214, 100%, 29%);',
        'clr-text': 'hsl(0, 0%, 13%);',
        'clr-error': 'hsl(21, 100%, 51%)',
        'clr-italic': 'hsl(0, 0%, 89%)',
        'clr-italic--dark': 'hsl(0, 0%, 60%)',
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
      borderRadius: {
        lg: '25px',
      },
      boxShadow: {
        'card-shadow': '0px 0px 3px 1px rgb(0 0 0 / 18%)',
      },
      backgroundColor: {
        'opacity-white': 'rgba(255,255,255,0.1)',
      },
      translate: {
        'negative-50': '-50%',
        'negative-100': '-100%',
        'negative-50vw': '-50vw',
        'negative-100vw': '-100vw',
      },
      maxWidth: {
        'rem-100': '100rem',
        'rem-80': '80rem',
      },
      maxHeight: {
        'rem-40': '30rem',
      },
    },
  },
  plugins: [],
};
//
