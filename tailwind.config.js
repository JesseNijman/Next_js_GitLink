const plugin = require("tailwindcss/plugin");
// const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        showSideMenu: {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
        hideSideMenu: {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
        fadeOut: "fadeOut 0.8s ease-in-out forwards",
        showSideMenu: "showSideMenu 2.5s ease-in-out forwards",
        hideSideMenu: "hideSideMenu 2.5s ease-in-out forwards",
      },
      transitionProperty: {
        width: "width",
      },
    },
    // colors: {
    //   limeGreen: "#32CD32",
    //   darkBlue: "#212F5E",
    // },
    // fontSize: {
    //   "5xl": "2rem",
    // },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
    animation: ["responsive", "motion-safe", "motion-reduce"],
    padding: ["hover"],
  },
  plugins: [],
};
