module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./pages/**/*.ts",
    "./components/**/*.ts",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      screen: '680px'
    },
    extend: {
      backgroundImage: theme => ({
      }),
      colors: {
        becker_dark: "#0E0E11",
        neon_blue: "#5863F8",
        dark_jungle_green: "#171D1C",
        magnolia: "#EFE9F4",
        maya_blue: "#5FBFF9",
        max_blue_green: "#16BAC5",
        dark_cornflower_blue: "#38408A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
