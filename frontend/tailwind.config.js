// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "map":
          "url('../public/images/map.png')",
      },
      fontFamily: {
        "share-tech-mono": ["Share Tech Mono"],
      },
      colors: {
        screen: "#001018",
        button: "#478AB1",
        form: "#478AB1",
        border: "#478AB1",
        backgroundTop: '#120824',
        backgroundBot: '#2c1444',
        neonPink: '#FF6EC7',
        neonBlue: '#00F5FF'
      },
      keyframes: {
        "wiggle": {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        "stretch": {
          "0%, 100%": { transform: "scale(110%)" },
          "50%": { transform: "scale(80%)" },
        }
      },
      animation: {
        "custom-bounce": "bounce .8s infinite",
        "custom-spin": "spin 1s infinite",
        "custom-pulse": "pulse 3s linear infinite",
        "custom-spin-slow": "spin 3s linear infinite",
        "wiggle": "wiggle 1.5s ease-in-out infinite",
        "stretch": "stretch 3s linear infinite",
        "custom-ping": "ping 2s linear infinite"
      },
    },
  },
  plugins: [],
};
