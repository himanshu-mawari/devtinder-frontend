export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        sidebar: "var(--color-sidebar)",
        card: "var(--color-card)",

        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",

        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",

        "sidebar-border": "var(--sidebar-border)",

        border: "var(--border)",

        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        "muted-foreground": "var(--muted-foreground)",

        input: "var(--color-input)",

        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-accent-hover": "var(--sidebar-accent-hover)",

        ring: "var(--color-ring)",

        popover: "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",
        destructive: "rgb(var(--color-destructive) / <alpha-value>)",
        pill: "var(--color-pill)",
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

      boxShadow: {
        "logo-glow": "var(--shadow-logo)",
      },

      screens: {
        sidebar: "900px",
      },
    },
  },
};
