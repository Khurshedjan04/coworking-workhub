import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        costumBlue: "#007AFF",
        costumGray: "#555555",
        cosumDarkBlue: "#050A41"
      },
      fontSize: {
        headingPripary: "36px",
        headingSecondary: "24px",
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0.5',
            transform: 'translateY(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
