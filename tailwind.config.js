/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontSize: {
        personal: "5rem",
        year: "5rem",
        titles: "20rem",
        general: "3rem",
        descriptions: "1.5rem",
      },
      fontFamily: {},

      colors: {
        font: "#CED9BF",
        dividers: "#1A1A1A",
      },
    },
    animation: {
      displace: "displace .5s ease-in-out forwards",
      displaceOut: "displaceOut .5s ease-in-out forwards",
      displaceUp: "displaceUp .5s ease-in-out forwards",
      displaceOutUp: "displaceOutUp .5s ease-in-out forwards",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
    },
    keyframes: {
      pulse: {
        "0%,100%": { opacity: "1" },
        "50%": { opacity: ".5" },
      },
      displace: {
        "0%": { transform: "translate(0%,0%)" },
        "100%": { transform: "translate(400px,0%)" },
      },
      displaceOut: {
        "0%": { transform: "translate(400px,0%)" },
        "100%": { transform: "translate(0%,0%)" },
      },
      displaceUp: {
        "0%": { transform: "translate(0%,0%)" },
        "100%": { transform: "translate(0,-125px)" },
      },
      displaceOutUp: {
        "0%": { transform: "translate(0,-125px)" },
        "100%": { transform: "translate(0%,0%)" },
      },
    },
  },
};
