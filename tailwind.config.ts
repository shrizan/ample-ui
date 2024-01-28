import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#59267C",
          50: "#B581D8",
          100: "#AC72D4",
          200: "#9952CA",
          300: "#8639BA",
          400: "#6F309B",
          500: "#59267C",
          600: "#3A1951",
          700: "#1B0C26",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        danger: "#FFFFFF",
      },
      borderRadius: {
        button: "10",
      },
    },
  },
  plugins: [],
};
export default config;
