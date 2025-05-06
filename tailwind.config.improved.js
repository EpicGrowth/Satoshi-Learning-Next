/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Match the original Bitcoin colors
        bitcoin: {
          orange: "#FF9900",  // Original Bitcoin orange
          deep: "#FF7700",    // Deeper orange for hover states
          yellow: "#FFCC33",  // Gold/yellow accent color
          hover: "#FFA928",   // Hover state
          light: "#FFF5E6",   // Light background
          dark: "#CC7A00",    // Dark/active state
        },
        // Match original Lightning colors
        lightning: {
          purple: "#7B1FA2",  // Lightning purple
          blue: "#1E88E5",    // Lightning blue
          yellow: "#FFC107",  // Lightning yellow
          green: "#4CAF50",   // Success state
          red: "#E44C41",     // This matches the original exactly from the contactExplorer
        },
        // Code syntax highlighting colors
        code: {
          bg: "#1A1A1A",      // Darker background matching original
          text: "#E0E0E0",
          comment: "#6A9955",
          string: "#CE9178",
          keyword: "#569CD6",
          function: "#DCDCAA",
          variable: "#9CDCFE",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Use system fonts to match original design
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        // Match original shadow styles
        bitcoin: "0 4px 6px -1px rgba(255, 153, 0, 0.1), 0 2px 4px -1px rgba(255, 153, 0, 0.06)",
        "bitcoin-hover": "0 10px 15px -3px rgba(255, 153, 0, 0.2), 0 4px 6px -2px rgba(255, 153, 0, 0.1)",
        lightning: "0 4px 6px -1px rgba(142, 68, 173, 0.1), 0 2px 4px -1px rgba(142, 68, 173, 0.06)",
        card: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hex-pattern': "url('/images/hex-pattern.svg')",
        'hash-pattern': "url('/images/hash-pattern.svg')",
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
        // Restore original animations
        "pulse-slow": {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) rotate(0deg)',
            opacity: 0.3
          },
          '25%': { 
            transform: 'translate(10px, -10px) rotate(2deg)',
            opacity: 0.5
          },
          '50%': { 
            transform: 'translate(-5px, -20px) rotate(-2deg)',
            opacity: 0.8
          },
          '75%': { 
            transform: 'translate(-10px, -10px) rotate(2deg)',
            opacity: 0.5
          }
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'lightning': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '5%': { opacity: '1', transform: 'scale(1)' },
          '10%': { opacity: '0.8', transform: 'scale(1.05)' },
          '15%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 15px 0 rgba(255, 153, 0, 0.4)',
          },
          '50%': { 
            'box-shadow': '0 0 30px 0 rgba(255, 153, 0, 0.7)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'gradient': 'gradient-shift 15s ease infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'lightning': 'lightning 3s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            maxWidth: '65ch',
            h1: {
              fontWeight: 700,
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8em',
              lineHeight: '1.1',
            },
            h2: {
              fontWeight: 700,
              fontSize: '1.875em',
              marginTop: '1.5em',
              marginBottom: '0.6em',
              lineHeight: '1.2',
            },
            h3: {
              fontWeight: 600,
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.6em',
              lineHeight: '1.3',
            },
            code: {
              color: "var(--tw-prose-code)",
              fontWeight: "500",
              backgroundColor: "var(--tw-prose-code-bg)",
              borderRadius: "0.25rem",
              paddingTop: "0.125rem",
              paddingRight: "0.25rem",
              paddingBottom: "0.125rem",
              paddingLeft: "0.25rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            a: {
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--border))',
              borderLeftWidth: '4px',
              fontStyle: 'italic', 
              color: 'hsl(var(--muted-foreground))',
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              color: 'hsl(var(--muted-foreground))',
              overflow: 'auto',
              borderRadius: 'var(--radius)',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.625em',
            },
            ol: {
              paddingLeft: '1.625em',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              borderCollapse: 'collapse',
            },
            'th, td': {
              padding: '0.75em',
              borderColor: 'hsl(var(--border))',
              borderWidth: '1px',
            },
            th: {
              backgroundColor: 'hsl(var(--muted))',
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
