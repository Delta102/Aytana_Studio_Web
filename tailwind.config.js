/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        custom: {
          am_purple_oscure: '#290041',
          am_purple_white: '#82069D',
          am_purple_bar: '#430052',
          am_purple_footer: '#2C0B33'
        },
      },
    },
  },
  plugins: [],
}
