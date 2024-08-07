/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23253A",
        secondary: "#FF4B57",
        danger: "#171926",
      },
      fontFamily: {
        // sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Roboto"]
      },
    },
  },
  plugins: [],
}