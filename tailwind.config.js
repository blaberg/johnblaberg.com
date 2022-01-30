module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#77b5d9",
        secondary: "#14397d",
        neutral: "#d7eaf3",
      },
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
}
