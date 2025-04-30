module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#B9E2FF',
        hover: '#8ED0FF',
      },
      minWidth: {
        'btn-small': '100px',
        'btn-medium': '250px',
        'btn-large': '350px',
      },
      spacing: {
        90: '22.5rem',
      },
    },
  },
  plugins: [],
}
