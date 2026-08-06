export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        sidebar: "var(--color-sidebar)",
        card: "var(--color-card)",

        primary: "var(--color-primary)",
        accent: "var(--color-accent)",

        "sidebar-border": "var(--sidebar-border)",

        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
      },

      backgroundImage: {
        logo: "var(--gradient-logo)",
      },

      borderRadius: {
        DEFAULT: "var(--radius)",
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
};
