import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:"var(--orange)",
        scarlet:"var(--scarlet)",
        black:"var(--black)",
        white:"var(--white)",
        bg:"var(--bg)",
        lightGrey:"var(--lightGrey)",
        darkGrey:"var(--darGrey)",
        lightBlack:"var(--lightBlack)",
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        saira: ["Saira Stencil One", "sans-serif"],
      },
      screens:{
        ha: "410px",
        ah: "350px",
        aa: "820px",
        aah: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
