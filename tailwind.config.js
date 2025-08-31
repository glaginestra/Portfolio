/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["'Titillium Web'", "sans-serif"],
      },
      colors: {
        "custom-blue": "#051827", // tu color oscuro
        "custom-light": "#e6f1ff", // tu color claro
      },
    },
  },
  plugins: [],
};
