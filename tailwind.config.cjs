/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "san-serif"],
      },
      // backgroundImage: {
      //   arrow:
      //     "url('https://www.svgrepo.com/show/100139/up-and-down-small-triangular-arrows.svg')",
      // },
    },
  },
  plugins: [],
};
