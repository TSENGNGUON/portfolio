module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'custom': '15px'
      },
      boxShadow: {
        'custom': "8px 8px 0px #00C6AE",
        'frame': '15px 15px 0px #00C6AE',
        'fillShadow': '25px 22px 5px rgba(0,0,0,0.5)'
      },
      transitionProperty: {
        'custom': "all .5s"
      },
      backgroundColor: {
        'bgBlue': '#106EE8'
      }
    },
  },
  plugins: [],
};