/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'greyflow': {
          'bg': '#0D1B2A',
          'card': '#2d3748',
          'primary': '#542CF2',
          'secondary-purple': '#C8A8FF',
          'text': '#ffffff',
          'secondary': '#e5e7eb',
          'border': '#C8A8FF',
        }
      }
    },
  },
  plugins: [],
} 