/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        kalar: {
          100: "#F9F7F7",
          200: "#DBE2EF",
          300: "#3F72AF",
          400: "#112D4E",
          orange: "#FFA62F",
          green: "#ACD793",
        },
        primary: "#393E46",
      },
      backgroundImage: {
        naruto: "url('/public/naruto.jpg')",
      },
    },
  },
  plugins: [],
}

