// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "running-background":
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.gfycat.com%2FBraveOptimalBaleenwhale-size_restricted.gif&f=1&nofb=1)",
        "skeleton-guy":
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8b%2F67%2F5e%2F8b675e441b9acf0aa9fbcb5027a08268.gif&f=1&nofb=1)",
        "mountain-wave":
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.retro-synthwave.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fretro-synthwave_GIF-00-4.gif&f=1&nofb=1)",
        "rick-roll":
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fimages%2F7598d103a735d5568964e4967e42823d%2Ftenor.gif&f=1&nofb=1)",
      },
      fontFamily: {
        "share-tech-mono": ["Share Tech Mono"],
      },
      colors: {
        "screen-background": "#001018",
        "button-background": "#70d7ff",
        "form-background": "#767680"
      }
    },
  },
  plugins: [],
};
