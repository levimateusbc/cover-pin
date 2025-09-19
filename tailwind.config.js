export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#022C22",
          light: "#065F46",
        },
        secondary: {
          DEFAULT: "#065F46",
          light: "#A7F3D0",
        },
        neutral: {
          100: "#F9FAFB",
          300: "#D1D5DB",
          500: "#6B7280",
          700: "#374151",
        },
      },
    },
  },
  plugins: [],
};
