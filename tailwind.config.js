/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {},

    screens: {
      sm: "350px",
      md: "600px",
      lg: "900px",
      xl: "1000px",
      "2xl": "1160px",
    },
    colors: {
      primary: "#D23166",
      secondary: "#0F0101",
      background: "#F8EDF0",
    },
    container: {
      center: true,
      padding: 20,
    },
    fontFamily: {
      fredoka: "Fredoka",
    },
  },
  plugins: [],
};
