/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        rose: {
          50: "#faf5f7",
          100: "#f6edf1",
          200: "#eedce3",
          300: "#e1c0cd",
          400: "#cd99ac",
          500: "#b46c84",
          600: "#a55d71",
          700: "#8c4a5a",
          800: "#753f4c",
          900: "#633842",
          950: "#3a1d24",
        },

        almond: {
          50: "#fbf6f1",
          100: "#f6ebde",
          200: "#f0dcca",
          300: "#e0b491",
          400: "#d28f65",
          500: "#c87447",
          600: "#bb5f3b",
          700: "#9b4b33",
          800: "#7d3e2f",
          900: "#653429",
          950: "#361914",
        },
        matterhorn: {
          50: "#f5f1f1",
          100: "#e5dddc",
          200: "#cdbcbb",
          300: "#b09494",
          400: "#997677",
          500: "#8a686a",
          600: "#76585d",
          700: "#5f494e",
          800: "#524146",
          900: "#483a3f",
          950: "#282024",
        },
      },
    },
  },
  plugins: [],
};
