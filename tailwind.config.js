/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        latoBold: "Lato-Bold",
        latoRegular: "Lato-Regular",
      },
      colors: {
        "primary-background-color": {
          light: "#123456",
          DEFAULT: "#93BFCF",
          dark: "#6096B4",
        },
        "secondary-background-color": "#BDCDD6",
        "primary-card-color": "#6096B4",
        "primary-dark-color": "#F9A826",
        "secondary-dark-color": "#F9A826",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
