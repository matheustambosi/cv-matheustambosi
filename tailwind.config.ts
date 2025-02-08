import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
      },
      fontSize: {
        "2xs": "0.875rem",
        xs: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      boxShadow: {
        glass: "20px 20px 22px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
