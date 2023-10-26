/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0edeb",
        black: "#000",
        darkslategray: {
          "100": "#444",
          "200": "#2e312b",
        },
        linen: "#f2e3d9",
        white: "#fff",
        gray: {
          "100": "#2b2b2b",
          "200": "#301d01",
          "300": "#2e1b00",
        },
        sienna: "#966a3d",
        lightgray: "#d7d7d7",
        dimgray: "#72726c",
        silver: "#b5b5b5",
        salmon: "#ff7d7d",
      },
      spacing: {},
      fontFamily: {
        "dancing-script": "'Dancing Script'",
        inter: "Inter",
        butler: "Butler",
      },
      borderRadius: {
        "65xl": "84px",
        "461xl": "480px",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "53xl": "72px",
      "17xl": "36px",
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      "85xl": "104px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
