/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#0F492D'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem'
        }
      },
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }

        md: '960px',
        // => @media (min-width: 960px) { ... }

        lg: '1440px'
        // => @media (min-width: 1440px) { ... }
      }
    }
  },
  plugins: []
}
