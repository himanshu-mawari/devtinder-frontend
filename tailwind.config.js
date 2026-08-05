export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "var(--color-background)",
          surface: "var(--color-surface)",
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          border: "var(--color-border)",
          text: "var(--color-text)",
          muted: "var(--color-text-muted)",
          
        },
        backgroundImage:{
          logo: "var(--gradient-logo)"
        },

        fontFamily: {
          sans: ["DM Sans", "sans-serif"],
          heading: ["Space Grotesk", "sans-serif"],
        },
      },
    },
};
