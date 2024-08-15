/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xxxxs": "360px",
        "xxxs": "375px",
        "xxs": "390px",
        "xs": "410px",
        "sm": "430px",
        "md": "768px",
        "lg": "900px",
        "xl": "1280px",
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1536x",
        "5xl": "1920px",
      },
    },
    extend: {
      screens: {
        "xxxxs": "360px",
        "xxxs": "375px",
        "xxs": "390px",
        "xs": "410px",
        "sm": "430px",
        "md": "768px",
        "lg": "900px",
        "xl": "1280px",
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1536x",
        "5xl": "1920px",
      },
      colors: {
        cream: "#fefbea",
        border: "hsl(var(--border))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}