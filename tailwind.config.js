/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        themeblack: {
          50: "#222831",
        },
        themegray: {
          50: "#393E46",
        },
        themeblue: {
          50: "#00ADB5",
        },
        themewhite: {
          50: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
