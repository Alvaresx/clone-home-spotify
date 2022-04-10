module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "content": "url('img/circulos-bg.png')"
      }),
    },
  },
  plugins: [],
}
