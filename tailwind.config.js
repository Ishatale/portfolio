module.exports = {
  content: [ "./pages/*.{html,js}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6e6ff',
          100: '#e5ccff',
          200: '#cc99ff',
          300: '#b266ff',
          400: '#9933ff',
          500: '#8000ff',
          600: '#6600cc',
          700: '#4d0099',
          800: '#330066',
          900: '#1a0033',
        },
        secondary: {
          50: '#fff7ef',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdb97f',
          400: '#fb9155',
          500: '#f9692a',
          600: '#c75422',
          700: '#953f19',
          800: '#642a11',
          900: '#321508',
        },
        pink: {
          500: '#ff2fa0',
          600: '#e0278f',
        },
        purple: {
          600: '#6a1bbd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in',
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
