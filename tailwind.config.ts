import type {Config} from "tailwindcss"

const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: "class" as const,
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
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // Zabaqist · Mint Tea. One palette for the whole product — the
        // landing page and the course pages used to run on two different
        // greens. Values live in app/globals.css; see the note there about the
        // two that are measured accessibility fixes.
        zb: {
          mint: "var(--zb-mint)",
          "mint-deep": "var(--zb-mint-deep)",
          "mint-soft": "var(--zb-mint-soft)",
          "mint-tint": "var(--zb-mint-tint)",
          gold: "var(--zb-gold)",
          "gold-deep": "var(--zb-gold-deep)",
          "gold-soft": "var(--zb-gold-soft)",
          "on-accent": "var(--zb-on-accent)",
          cream: "var(--zb-cream)",
          "cream-2": "var(--zb-cream-2)",
          "cream-3": "var(--zb-cream-3)",
          ink: "var(--zb-ink)",
          "ink-2": "var(--zb-ink-2)",
          "ink-3": "var(--zb-ink-3)",
          rose: "var(--zb-rose)",
          "rose-soft": "var(--zb-rose-soft)",
          "rose-deep": "var(--zb-rose-deep)",
          line: "var(--zb-line)",
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
        sans: ["var(--font-sans)", ...fontFamily.sans],
        // Rubik carries Latin and Arabic to weight 800 — the landing page's
        // headings are set in it. The rest of the app stays on Inter.
        display: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config