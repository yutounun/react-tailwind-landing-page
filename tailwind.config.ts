import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Dark mode is based on a class
  mode: "jit", // Enable Just-in-Time mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        neutral: {
          DEFAULT: "var(--neutral-500)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
      },
      spacing: {
        containerPX: "1.5rem", // Consistent padding for containers
        128: "32rem",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Default sans-serif font
      },
      fontSize: {
        // Display styles
        d1: "48px", // Display 1
        d2: "40px", // Display 2 - operation mode
        d3: "36px", // Display 3

        // Heading styles
        h1: "40px", // Heading 1
        h2: "36px", // Heading 2 - most of headings
        h3: "24px", // Heading 3
        h4: "20px", // Heading 4

        // Body text
        xs: "10px", // Extra small text
        sm: "12px", // Small text
        base: "14px", // Default text size labels, navigations
        lg: "16px", // Large text
        xl: "18px", // Extra large text - buttons
        "2xl": "22px", // 2 times extra large text
        "3xl": "30px", // 3 times extra large text
        "4xl": "36px", // 4 times extra large text
        "5xl": "48px", // 5 times extra large text
        "6xl": "64px", // 6 times extra large text
      },
    },
  },
  plugins: [],
};

export default config;
