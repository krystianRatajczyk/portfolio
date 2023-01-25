/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010001",
        secondary: "#121112",
        gray: "#707070",
        pink: " #972e77",
        purple: "#4d29ad",
      },
    },
    screens: {
      xs: "480px",
      md: "550px",
      ss: "620px",
      sm: "768px",
      mm: "850px",
      xm: "1060px",
      lg: "1200px",
      ll: '1500px',
      xl: "1700px",
    },
  },
  plugins: [],
};
