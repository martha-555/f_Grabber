const { error } = require('console')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        kyiv: ['"Kyiv*Type Titling"', 'sans-serif'],
      },
      fontSize: {
        h1: ['57px', { lineHeight: '140%', fontWeight: '600' }],
        h2: ['48px', { lineHeight: '140%', fontWeight: '500' }],
        h3: ['32px', { lineHeight: '130%', fontWeight: '400' }],
        h4: ['24px', { lineHeight: '130%', fontWeight: '400' }],
        s1: ['24px', { lineHeight: '140%', fontWeight: '600' }],
        b1: ['32px', { lineHeight: '150%', fontWeight: '400' }],
        b2: ['24px', { lineHeight: '150%', fontWeight: '400' }],
        b3: ['18px', { lineHeight: '140%', fontWeight: '400' }],
        b4: ['16px', { lineHeight: '130%', fontWeight: '400' }],
        d1: ['14px', { lineHeight: '130%', fontWeight: '600' }],
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
        'profile-button': '15.875rem',
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
