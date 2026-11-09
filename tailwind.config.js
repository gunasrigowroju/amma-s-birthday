/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#F8D7DA',
          50: '#FFF5F6',
          100: '#FDECEF',
          200: '#F8D7DA',
          300: '#F2B8BD',
          400: '#E7929B',
        },
        peach: {
          DEFAULT: '#FFE5D0',
          50: '#FFF9F4',
          100: '#FFF0E3',
          200: '#FFE5D0',
          300: '#FDCBA6',
        },
        lavender: {
          DEFAULT: '#E8DFF5',
          50: '#F9F7FD',
          100: '#F3EEFA',
          200: '#E8DFF5',
          300: '#D4C2EC',
        },
        cream: {
          DEFAULT: '#FFF7E8',
          50: '#FFFCF6',
          100: '#FFF9EE',
          200: '#FFF7E8',
          300: '#FEECC8',
        },
        sage: {
          DEFAULT: '#DCE8D5',
          50: '#F5F9F3',
          100: '#EBF3E7',
          200: '#DCE8D5',
          300: '#BFD5B5',
        },
        rosepink: {
          DEFAULT: '#C97983',
          light: '#DE99A2',
          dark: '#B05E68',
        }
      },
      fontFamily: {
        cursive: ['"Caveat"', '"Dancing Script"', 'cursive'],
        handwriting: ['"Sacramento"', '"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', '"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(201, 121, 131, 0.12)',
        'glow': '0 0 25px rgba(248, 215, 218, 0.8)',
        'card': '0 12px 35px -5px rgba(180, 140, 150, 0.15)',
        'polaroid': '0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

