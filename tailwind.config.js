/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1727",
        secondary: "#241f37",
        accent: "#896bf3",
        sechover: "#2E2944",
        footer: "#181422",
      },
    },
  },
  plugins: [],
};
