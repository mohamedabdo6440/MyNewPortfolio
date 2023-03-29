/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      colors: {
        mainColor: "#333",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
