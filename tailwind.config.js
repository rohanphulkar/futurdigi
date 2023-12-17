/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        prime: "rgb(0, 168, 255)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
