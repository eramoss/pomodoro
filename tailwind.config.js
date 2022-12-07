/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: ['class', '[data-mode="isSelected"]'],

  theme: {
   
    
    extend: {
      colors: {
        'midnight': '#1e2240',
        'midnight-dark': '#141a31',
        'orange-datail': '#f56e6f',
      },
      boxShadow: {
        'light': '-11px -11px 44px #1c2544',
        'dark': '11px 11px 44px #0c0f1c',
      }
      
     
    },
  },
  plugins: [],
}
