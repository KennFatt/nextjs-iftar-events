module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: "Courgette",
        navitem: "'Montserrat Alternates'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
