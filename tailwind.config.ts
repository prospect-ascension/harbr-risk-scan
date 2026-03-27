import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF1FB',
          100: '#DCE3F7',
          200: '#B5C3EE',
          300: '#8BA1E4',
          400: '#5474D9',
          500: '#033ED6',
          600: '#0335B5',
          700: '#022A91',
          800: '#011D66',
          900: '#010B2B',
          950: '#000816',
        },
        harbr: {
          blue: '#033ED6',
          dark: '#010B2B',
          black: '#000000',
          white: '#FFFFFF',
        },
        risk: {
          green: '#059669',
          amber: '#D97706',
          red: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
