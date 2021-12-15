module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0FA9E6",
          dark: "#0c87b8"
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
};
