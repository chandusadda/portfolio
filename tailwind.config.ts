import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      customFont: [
        "Avenir Next",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      colors: {
        'custom-blue': '#1d9ded',
        "custom-purple": "#3F0071"
      },
      boxShadow: {
        'headerWhite': '0px 3px 6px rgba(0, 0, 0, 0.16)',
        'headerblack': '0px 3px 6px #4b5056',
      },
      strokeWidth: {
        '3rem': '3rem',
      },
      borderWidth: {
        5: "5px"
      }
    }
  },
};
export default config;
