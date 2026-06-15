/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          light: '#724E4B',
          DEFAULT: '#4A2C2A',
          dark: '#2D1B1A',
        },
        cream: {
          light: '#FFFDFB',
          DEFAULT: '#FFF8F0',
          dark: '#EADBC8',
        },
        strawberry: {
          light: '#FF85A7',
          DEFAULT: '#FF5C8A',
          dark: '#E03B69',
        },
        mango: {
          light: '#FFCA3A',
          DEFAULT: '#FFB703',
          dark: '#E29E00',
        },
        mint: {
          light: '#A2E3A6',
          DEFAULT: '#8FD694',
          dark: '#6CBE71',
        },
        blueberry: {
          light: '#9AB4E7',
          DEFAULT: '#4D73B7',
          dark: '#314D80',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
