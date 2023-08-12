/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      mdp: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        kick: {
          green: "#00E701",
          greenTones: {
            80: "#234118",
            100: "#14250E",
          },
          gray: {
            15: "#2E3238",
            20: "#AFAFAF",
            25: "#474F54",
            50: "#24272C",
            75: "#191B1F",
            100: "#0B0E0F",
          },
        },
      },
    },
  },
  plugins: [],
};
