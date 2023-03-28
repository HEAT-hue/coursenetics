/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#00007E",
        lgBg: "#F1F0F0",
      },
    },
  },
  plugins: [],
};
