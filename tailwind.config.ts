import type {Config} from "tailwindcss"

const { fontFamily } = require("tailwindcss/defaultTheme")

/**
 * A brand token, as a colour that can still take an opacity modifier.
 *
 * Written out as a bare `var(--zb-…)`, it could not. To apply `/40` Tailwind
 * parses the colour and rebuilds it with an alpha channel; `parseColor` cannot
 * read a `var()` and returns null, and the utility is then dropped ENTIRELY —
 * not emitted at full opacity, simply never generated. `border-zb-mint/40`
 * produced no rule at all, so those borders fell back to preflight's grey
 * instead of mint. Twenty-five distinct `zb-…/NN` classes across app/ and
 * components/ were inert.
 *
 * `<alpha-value>` is the placeholder Tailwind SUBSTITUTES rather than parses
 * (with `1` when no modifier is given), and `color-mix` then applies it to a
 * colour the build never has to understand. The tokens are oklch, so the mix
 * happens in oklab and the hue survives it.
 */
const zb = (token: string) =>
  `color-mix(in oklab, var(--zb-${token}) calc(<alpha-value> * 100%), transparent)`

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
          mint: zb("mint"),
          "mint-deep": zb("mint-deep"),
          "mint-soft": zb("mint-soft"),
          "mint-tint": zb("mint-tint"),
          gold: zb("gold"),
          "gold-deep": zb("gold-deep"),
          "gold-soft": zb("gold-soft"),
          "on-accent": zb("on-accent"),
          cream: zb("cream"),
          "cream-2": zb("cream-2"),
          "cream-3": zb("cream-3"),
          ink: zb("ink"),
          "ink-2": zb("ink-2"),
          "ink-3": zb("ink-3"),
          rose: zb("rose"),
          "rose-soft": zb("rose-soft"),
          "rose-deep": zb("rose-deep"),
          line: zb("line"),
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