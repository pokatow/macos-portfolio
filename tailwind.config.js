module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        calligraphy: ['Grape Nuts', 'cursive'],
        'alfa-slab': ['Alfa Slab One', 'cursive'],
      },
      colors: {
        background: '#f2eedef8',
        primary: '#c5bfa8f8',
        'primary-light': '#d2ccb1f8',
        'primary-dark': '#878271f8',
      },
    },
  },
  plugins: [],
}
