module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        "128": "32rem",
      }
    },
  },
  plugins: [],
};
