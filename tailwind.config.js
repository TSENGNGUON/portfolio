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
        'fillShadow': '25px 22px 5px rgba(0,0,0,0.5)',
        'card': "15px 15px 0px rgba(0,0,0,0.9)",
        'buttonContactShadow': '-20px 20px 0px rgba(0,0,0,0.8)',
        'logoShadow': '3px 5px 0px white'
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