module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        128: "34rem",
      },
      width: {
        82: "19rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
