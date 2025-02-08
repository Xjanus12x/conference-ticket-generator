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
        // Neutral Colors
        neutral: {
          0: "hsl(0, 0%, 100%)", // White
          300: "hsl(252, 6%, 83%)", // Light Gray
          500: "hsl(245, 15%, 58%)", // Medium Gray
          700: "hsl(245, 19%, 35%)", // Dark Gray
          900: "hsl(248, 70%, 10%)", // Very Dark Blue
        },
        // Orange Colors
        orange: {
          500: "hsl(7, 88%, 67%)", // Bright Orange
          700: "hsl(7, 71%, 60%)", // Darker Orange
        },
      },
      backgroundImage: {
        mobile:
          "url('/assets/images/pattern-lines.svg'), url('/assets/images/pattern-squiggly-line-top.svg'), url('/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'), url('/assets/images/background-mobile.png')",

        desktop:
          "url('/assets/images/pattern-lines.svg'), url('/assets/images/pattern-squiggly-line-top.svg'), url('/assets/images/pattern-squiggly-line-bottom-desktop.svg'), url('/assets/images/background-desktop.png')",
      },

      backgroundSize: {
        "size-mobile": "cover, 7rem, contain, cover",
        "size-desktop": "cover, auto, auto, cover",
      },

    },
  },
  plugins: [],
} satisfies Config;
