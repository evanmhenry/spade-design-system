/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      md: "2rem",
    }, 
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      brand: {
        DEFAULT: "var(--brand)",
        foreground: "var(--brand-foreground)",
      },
      primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)",
      },
      success: {
        DEFAULT: "var(--success)",
        foreground: "var(--success-foreground)",
      },
      warning: {
        DEFAULT: "var(--warning)",
        foreground: "var(--warning-foreground)",
      },
      destructive: {
        DEFAULT: "var(--destructive)",
        foreground: "var(--destructive-foreground)",
      },
      purple: {
        DEFAULT: "var(--purple)",
        foreground: "var(--purple-foreground)",
      },
      blue: {
        DEFAULT: "var(--blue)",
        foreground: "var(--blue-foreground)",
      },
      muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)",
      },
      accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)",
      },
      popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)",
      },
      card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    backgroundImage: {
      'brand-gradient': 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EF4444 100%)',
    },
  },
};

export const plugins = [
  function({ addUtilities }) {
    const newUtilities = {
      '.bg-brand-gradient': {
        'background-image': 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EF4444 100%)',
      },
      '.text-brand-gradient': {
        'background-image': 'linear-gradient(135deg, #F59E0B 0%, #F97316 50%, #EF4444 100%)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        'color': 'transparent',
      },
    }

    addUtilities(newUtilities, ['responsive', 'hover']);
  },
];
