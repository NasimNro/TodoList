/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      'sm': {'max': '700px'},
    },

    extend: {},
  },
  plugins: [],
};

