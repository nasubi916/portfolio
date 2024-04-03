import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: "Noto Sans JP, sans-serif" },
          serif: { value: "Noto Serif JP, serif" },
        },
      },
      keyframes: {
        moveYbt: {
          "0%": {
            opacity: "0",
            transform: "translateY(300px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        moveYtb: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(300px)",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        cursor: {
          "50%": {
            borderRightColor: "transparent",
          },
        },
        typing: {
          from: {
            width: "0",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "panda",
  jsxFramework: "react",
});
