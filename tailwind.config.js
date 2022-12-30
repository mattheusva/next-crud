/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-green-400',
    'from-blue-400',
    'from-gray-400',
    'to-gray-700',
    'to-blue-700',
    'to-green-700',
    
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}
