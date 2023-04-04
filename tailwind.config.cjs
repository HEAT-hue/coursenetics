/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#00007E",
        pryLg: "#a9a9cc",
        lgBg: "#F1F0F0",
        bgLg: "#ebe6e6",
      },
    },
  },
  plugins: [],
};
