module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Garamond", "sans-serif"]
      },
      screens: {
        sm: "640px",
        md: "950px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      margin: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px"
      }
    },
    colors: {
      white: "#ffffff",
      gray: "#6c6868",
      lightGray: "#c4c2c2",
      error: "#ff0000",
      neutral: "#E5E5E5",
      red: "#ff0000"
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "3rem",
      "5xl": "3.5rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "8rem",
      "9xl": "10rem"
    }
  },
  plugins: []
}
