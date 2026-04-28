/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vault: {
          50:  '#fefaf0',
          100: '#fdf3d7',
          200: '#fbe5ae',
          300: '#f8d285',
          400: '#f4bd6f',
          500: '#f4bd6f',
          600: '#d9993a',
          700: '#b07428',
          800: '#7a4f18',
          900: '#3d270b',
          950: '#1e1208',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
