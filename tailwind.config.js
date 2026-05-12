/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // MAIN BRAND COLOR
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },

        // Clean UI neutrals
        secondary: "#64748b",
        background: "#f8fafc",
        surface: "#ffffff",
        border: "#e2e8f0",

        // Status colors
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.05)",
        soft: "0 4px 10px rgba(0,0,0,0.03)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}