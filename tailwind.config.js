/** @type {import('tailwindcss').Config} */





module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: '#12AAE2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};
