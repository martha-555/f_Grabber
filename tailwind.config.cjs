const { error } = require("console");

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        px12: 'clamp(10px, 1vw, 12px)',
        px16: 'clamp(14px, 1.2vw, 16px)',
        px20: 'clamp(16px, 1.5vw, 20px)',
        px24: 'clamp(18px, 2vw, 24px)',
        px32: 'clamp(20px, 3vw, 32px)',
      },
      colors: {
        primary: '#B9E2FF',
        hover: '#8ED0FF',
        textPrimary: '#000000',
        textSecondary: '#F8F8F8',
        bgBtn: '#2D336B',
        bgBtnHover: '#F8F8F8',
        error: '#FF0000',
      },
      minWidth: {
        'btn-small': '100px',
        'btn-medium': '250px',
        'btn-large': '350px',
      },
      spacing: {
        90: '22.5rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      boxShadow: {
        blur: '0px 4px 26.2px 0px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'warning-icon': "url('./src/assets/images/warningIcon.svg')",
      },
    },
  },
  plugins: [],
}
