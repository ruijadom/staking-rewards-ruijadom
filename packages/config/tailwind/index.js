/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        xs: ["0.688rem", { lineHeight: "0.838rem" }], // font-size - 11px; line-height - 13.41px
        sm: ["0.75rem", { lineHeight: "0.914rem" }], // front-size - 12px; line-height - 14.63px
        xl: ["1.25rem", { lineHeight: "1.524rem" }], // font-size - 20px; line-height - 24.38px
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        lighter: {
          DEFAULT: "hsl(var(--lighter))",
          foreground: "hsl(var(--lighter-foreground))",
        },
        lightest: {
          DEFAULT: "hsl(var(--lightest))",
          foreground: "hsl(var(--lightest-foreground))",
        },
        darker: {
          DEFAULT: "hsl(var(--darker))",
          foreground: "hsl(var(--darker-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        focus: "0.5px 0.5px 2px 2px hsl(var(--darker))",
      },
    },
  },
};

module.exports = config;

// box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
