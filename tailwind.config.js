/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js}", "./pages//"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xxl: "1400px",
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      width: {
        300: "300px",
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      borderColor: { grey: "#E8ECEF", green: "#38CB89" },
      fontSize: {
        xxl: ["16px", "26px"],
        28: "1.75rem",
      },
      colors: {
        green: "#38CB89",
        sky: "#F3F5F7",
        gray: "#6C7275",
        blue: "#377DFF",

        "dark-gray": "#141718",
        ivory: "#FEFEFE",
        bread: "#605F5F",
      },
      height: {
        33: "33rem",
      },
      backgroundImage: {
        "footer-texture": "url('../../../images/Placeholder.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
