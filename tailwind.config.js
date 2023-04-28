/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#214ED3",
      },
      fontFamily: {
        sans: ["Sono", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
