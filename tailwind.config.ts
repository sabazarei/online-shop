import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Shabnam"],
    },
    extend: {
      zIndex: {
        1: '1',
        2: '2',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainRed: "#f7858d",
        mainBlue:"#009ec9",
        mainGray:"#515151",
        lightGray:"#676767",
        secondLightGray:'#818181',
        mainBlack:"#212529",
        secondBlack:"#495057",

      },
      screens: {
        xs: "576px", // Custom breakpoint
        xxs: "481px",//custom breakpoint 2
        midXl:"1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
