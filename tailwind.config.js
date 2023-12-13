/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary: "#003B5A",
        third: "#001B29",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("preline/plugin"),
  ],
};
