/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
  theme: {
    extend: {
      width: {
        1100: '1100px',
        600: '600px'
      },
      maxWidth: {
        600: '600px'
      },
      backgroundColor: {
        primary: '#f5f5f5',
        secondary: '#f73859',
        third: '#1266dd'
      }
    },
  },
  plugins: [],
}