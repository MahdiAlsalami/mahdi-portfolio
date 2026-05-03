import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#eee8dd",
        foreground: "#202824",
        ink: "#202824",
        muted: "#647067",
        steel: "#2f5d62",
        border: "rgba(32,40,36,0.12)",
        surface: "rgba(255,255,255,0.36)",
        accent: "#2f5d62",
        accentStrong: "#1e464b"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(32, 40, 36, 0.12)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(47, 93, 98, 0.14), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
