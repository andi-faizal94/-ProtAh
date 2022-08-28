/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/images/office.png')",
        appart: "url('../public/images/Appart.png')",
        employee: "url('../public/images/employee.png')",
        office1: "url('../public/images/background/Rectangle 5.png')",
        office2: "url('../public/images/background/Rectangle 6.png')",
        office3: "url('../public/images/background/Rectangle 7.png')",
        office4: "url('../public/images/background/Rectangle 5.png')",
      },
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
