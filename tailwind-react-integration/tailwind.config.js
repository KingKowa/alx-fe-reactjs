/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //added
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  variants: { extend: {} }, //added
  plugins: [],
};
