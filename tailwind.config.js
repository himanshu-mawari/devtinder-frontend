import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], 
        login: ['"Lobster Two"' , "cursive  "]
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
};
