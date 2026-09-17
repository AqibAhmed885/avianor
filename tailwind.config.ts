import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Avianor brand palette
        midnight: "#0B193D",
        indigo: {
          flight: "#354DA6",
          DEFAULT: "#354DA6",
        },
        violet: {
          vector: "#7772F2",
          DEFAULT: "#7772F2",
        },
        ice: "#F2F5FF",
        mist: "#E8ECF7",
        body: "#303746",
        // Utility aliases
        brand: {
          midnight: "#0B193D",
          indigo: "#354DA6",
          violet: "#7772F2",
          ice: "#F2F5FF",
          mist: "#E8ECF7",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0B193D 0%, #354DA6 60%, #7772F2 100%)",
        "brand-gradient-subtle":
          "linear-gradient(135deg, #354DA6 0%, #7772F2 100%)",
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(53,77,166,0.15) 1px, transparent 0)",
      },
      backgroundSize: {
        "hero-grid": "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(11,25,61,0.06), 0 4px 12px rgba(11,25,61,0.08)",
        "card-hover":
          "0 4px 12px rgba(11,25,61,0.10), 0 12px 32px rgba(11,25,61,0.12)",
        nav: "0 1px 0 rgba(11,25,61,0.08), 0 4px 16px rgba(11,25,61,0.06)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

