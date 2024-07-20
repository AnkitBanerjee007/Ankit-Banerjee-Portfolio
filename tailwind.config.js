module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        'deloitte': '#26880d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

