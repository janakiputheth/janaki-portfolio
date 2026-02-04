/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F6F3',
          light: '#FDFCFA',
          dark: '#EDE9E4',
        },
        sage: {
          DEFAULT: '#9CAF88',
          light: '#B5C4A4',
          dark: '#7A8F6A',
          darker: '#5C6B52',
          pale: '#F2F5EF',
          nav: '#E5EBE0',
        },
        rose: {
          DEFAULT: '#D4A5A5',
          light: '#E8C4C4',
          dark: '#B88686',
        },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
