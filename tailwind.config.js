/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-blue)",
        lightYellow: "var(--light-yellow)",
        textColor: "var(--text-color)",
        footerColor: "var(--footer-color)",
        lightGreen: "var(--light-green)",
      },
      textColor: {
        primary: "var(--primary-blue)",
        lightYellow: "var(--light-yellow)",
        textColor: "var(--text-color)",
        footerColor: "var(--footer-color)",
        lightGreen: "var(--light-green)",
      },
    },
  },
  plugins: [],
};
