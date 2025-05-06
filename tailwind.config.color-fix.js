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
        // Bitcoin colors matching original site's color scheme
        bitcoin: {
          orange: "#e44c41", // Original primary red/orange color
          deep: "#c83932",
          hover: "#e86b62",
          light: "#fbf0ef",
          dark: "#a32e28",
        },
        // Lightning colors
        lightning: {
          purple: "#8E44AD",
          blue: "#2980B9",
          yellow: "#F1C40F",
          green: "#27AE60",
          red: "#E74C3C",
        },
        // Code syntax highlighting colors
        code: {
          bg: "#1A1A1A",
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
        sans: [
          "-apple-system", 
          "BlinkMacSystemFont", 
          "Segoe UI", 
          "Roboto", 
          "Helvetica Neue", 
          "Arial", 
          "sans-serif"
        ],
        mono: [
          "ui-monospace", 
          "SFMono-Regular", 
          "Menlo", 
          "Monaco", 
          "Consolas", 
          "monospace"
        ],
        display: [
          "-apple-system", 
          "BlinkMacSystemFont", 
          "Segoe UI", 
          "Roboto", 
          "Helvetica Neue", 
          "Arial", 
          "sans-serif"
        ],
      },
      boxShadow: {
        // Match original shadow styles
        primary: "0 4px 6px -1px rgba(228, 76, 65, 0.1), 0 2px 4px -1px rgba(228, 76, 65, 0.06)",
        "primary-hover": "0 10px 15px -3px rgba(228, 76, 65, 0.2), 0 4px 6px -2px rgba(228, 76, 65, 0.1)",
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
          '0%, 100%': { transform: 'translateY(0)', opacity: 0.4 },
          '50%': { transform: 'translateY(-20px)', opacity: 0.8 },
        },
        'float-bg': {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) rotate(0deg)',
          },
          '25%': { 
            transform: 'translate(10px, -10px) rotate(1deg)',
          },
          '50%': { 
            transform: 'translate(0px, -20px) rotate(0deg)',
          },
          '75%': { 
            transform: 'translate(-10px, -10px) rotate(-1deg)',
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
        'glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(228, 76, 65, 0.2), 0 0 40px rgba(228, 76, 65, 0.1)'
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(228, 76, 65, 0.3), 0 0 60px rgba(228, 76, 65, 0.2)'
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-bg': 'float-bg 20s ease-in-out infinite',
        'gradient': 'gradient-shift 15s ease infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'lightning': 'lightning 3s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            maxWidth: '65ch',
            h1: {
              fontWeight: 600,
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8em',
              lineHeight: '1.1',
            },
            h2: {
              fontWeight: 600,
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
              color: 'hsl(var(--primary))',
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
