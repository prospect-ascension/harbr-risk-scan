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
          50: '#F4F6FA',
          100: '#E8EDF5',
          200: '#C9D4E8',
          300: '#A3B5D6',
          400: '#7090BF',
          500: '#4A6FA8',
          600: '#2D4F8A',
          700: '#163A6E',
          800: '#0F2B5B',
          900: '#0A1E3F',
          950: '#061225',
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
