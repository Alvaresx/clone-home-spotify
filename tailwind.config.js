module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "content": "url('img/circulos-bg.png')"
      }),
      backgroundSize: {
        "150%": "150%",
        "120%": "120%",
        "130%": "130%",
      },
      screens: {
        "xs": "0px",
      },
    },
  },
  plugins: [],
}
