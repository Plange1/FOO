/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f0f9f4',
          100: '#dcf4e6',
          200: '#bbe7d0',
          300: '#8dd5b1',
          400: '#57bc8b',
          500: '#34a36f',
          600: '#176247',
          700: '#1a5441',
          800: '#1a4537',
          900: '#17392f',
        }
      }
    },
  },
  plugins: [],
} 