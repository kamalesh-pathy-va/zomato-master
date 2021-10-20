module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        zomato:
        {
          50: '#ffe7e5',
          100: '#fababa',
          200: '#f18f90',
          300: '#e96268',
          400: '#e23744',
          500: '#c81d1f',
          600: '#9d1c15',
          700: '#70170d',
          800: '#461106',
          900: '#1e0800',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
