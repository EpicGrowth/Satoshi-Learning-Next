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
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          hover: "var(--primary-hover)",
          contrast: "var(--primary-contrast)",
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
          hover: "var(--card-hover)",
        },
        // Official Bitcoin branding colors - standardized
        bitcoin: {
          orange: "#F7931A", // Official Bitcoin orange
          deep: "#E87D18",   // Slightly deeper shade for hover states
          hover: "#E87D18", // Hover state
          light: "rgba(247, 147, 26, 0.1)", // Very light orange for backgrounds
          dark: "#D26A00",   // Darker shade for contrast
        },
        // Standard brand colors available across the application
        brand: {
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          hover: "var(--primary-hover)",
          gradient: "linear-gradient(90deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
        },
        // Learning path color system
        learning: {
          beginner: "var(--beginner)",
          intermediate: "var(--intermediate)",
          advanced: "var(--advanced)",
          reference: "var(--reference)",
        },
        // Lightning colors - enhanced for better visibility
        lightning: {
          purple: "#9B59B6", // Standard purple
          deep: "#8E44AD",
          blue: "#3B82F6", // Brighter blue
          yellow: "#EAB308", // Brighter yellow
          green: "#22C55E", // Brighter green
          red: "#EF4444", // Brighter red
          light: "#D6BCFF",
          dark: "#6C3483",
        },
        // Enhanced code syntax highlighting colors
        code: {
          bg: "#1A1A1A",
          text: "#E6E6E6", // Slightly brighter for better readability
          comment: "#6B9955", // Slightly adjusted green
          string: "#CE9178",
          keyword: "#569CD6",
          function: "#DCDCAA",
          variable: "#9CDCFE",
          highlight: "var(--code-highlight)",
        },
        // Educational content specific colors
        education: {
          highlight: "#FBBF24", // Amber highlight for important concepts
          note: "#3B82F6",      // Blue for notes
          warning: "#DC2626",   // Red for warnings
          success: "#16A34A",   // Green for success
          examples: "#8B5CF6",  // Purple for examples
          exercise: "#F97316",  // Orange for exercises
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Use Inter for main text, Poppins for headings, and Exo 2 for Satoshi Station brand text
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui", 
          "-apple-system", 
          "sans-serif"
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace", 
          "SFMono-Regular", 
          "Menlo", 
          "Monaco", 
          "Consolas", 
          "monospace"
        ],
        display: [
          "var(--font-display)",
          "Poppins",
          "system-ui", 
          "-apple-system", 
          "BlinkMacSystemFont", 
          "sans-serif"
        ],
        brand: [
          "var(--font-brand)",
          "Exo 2",
          "system-ui",
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
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            opacity: '0.85',
          },
          '50%': {
            opacity: '1',
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translate(0, 0px) rotate(0deg)',
          },
          '25%': { 
            transform: 'translate(10px, -10px) rotate(1deg)',
          },
          '50%': { 
            transform: 'translate(0, 5px) rotate(0deg)',
          },
          '75%': { 
            transform: 'translate(-10px, -10px) rotate(-1deg)',
          }
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'shine': {
          '0%': { 
            'background-position': '-100% 0'
          },
          '100%': { 
            'background-position': '200% 0'
          },
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
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-bg': 'float-bg 20s ease-in-out infinite',
        'gradient': 'gradient-shift 15s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.7s ease-out',
        'fade-in-down': 'fade-in-down 0.7s ease-out',
        'shine-effect': 'shine 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'lightning': 'lightning 3s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            maxWidth: '70ch', // Slightly wider for educational content
            lineHeight: '1.75', // Better line height for reading
            fontSize: '1.075rem', // Slightly larger font size
            h1: {
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 700,
              fontSize: '2.5em',
              marginTop: '0.5em',
              marginBottom: '1em',
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
              color: 'hsl(var(--primary))',
            },
            h2: {
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 700,
              fontSize: '1.875em',
              marginTop: '1.75em',
              marginBottom: '0.75em',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              color: 'hsl(var(--foreground))',
              borderBottom: '1px solid hsl(var(--border))',
              paddingBottom: '0.3em',
            },
            h3: {
              fontFamily: 'var(--font-display), sans-serif',
              fontWeight: 600,
              fontSize: '1.5em',
              marginTop: '1.75em',
              marginBottom: '0.75em',
              lineHeight: '1.3',
              color: 'hsl(var(--foreground))',
            },
            h4: {
              fontWeight: 600,
              fontSize: '1.25em',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.3',
              color: 'hsl(var(--foreground))',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            strong: {
              fontWeight: '600',
              color: 'hsl(var(--foreground))',
            },
            code: {
              color: "var(--tw-prose-code)",
              fontWeight: "500",
              backgroundColor: "var(--tw-prose-code-bg)",
              borderRadius: "0.375rem",
              paddingTop: "0.125rem",
              paddingRight: "0.375rem",
              paddingBottom: "0.125rem",
              paddingLeft: "0.375rem",
              fontSize: '0.9em',
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
              borderBottom: '1px dotted hsl(var(--primary) / 0.4)',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderBottom: '1px solid hsl(var(--primary))',
                color: 'hsl(var(--primary) / 0.9)',
              },
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--primary) / 0.5)',
              borderLeftWidth: '4px',
              fontStyle: 'italic',
              color: 'hsl(var(--foreground) / 0.85)',
              backgroundColor: 'hsl(var(--accent) / 0.15)',
              padding: '1rem 1.5rem',
              borderRadius: '0.375rem',
              marginLeft: 0,
              marginRight: 0,
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              color: 'hsl(var(--muted-foreground))',
              overflow: 'auto',
              borderRadius: 'var(--radius)',
              padding: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              fontSize: '0.95em',
              lineHeight: '1.5',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.75em',
              marginTop: '1.25em',
              marginBottom: '1.25em',
              li: {
                marginTop: '0.5em',
                marginBottom: '0.5em',
              },
              'li::marker': {
                color: 'hsl(var(--primary) / 0.8)',
              },
            },
            ol: {
              paddingLeft: '1.75em',
              marginTop: '1.25em',
              marginBottom: '1.25em',
              li: {
                marginTop: '0.5em',
                marginBottom: '0.5em',
              },
              'li::marker': {
                color: 'hsl(var(--primary) / 0.8)',
                fontWeight: '600',
              },
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              borderCollapse: 'collapse',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.95em',
            },
            'th, td': {
              padding: '0.75em 1em',
              borderColor: 'hsl(var(--border))',
              borderWidth: '1px',
            },
            th: {
              backgroundColor: 'hsl(var(--accent) / 0.2)',
              fontWeight: 600,
              color: 'hsl(var(--foreground))',
              textTransform: 'uppercase',
              fontSize: '0.85em',
              letterSpacing: '0.05em',
            },
            // Special callout for educational notes
            '.note': {
              backgroundColor: 'hsl(217, 91%, 60%, 0.1)',
              borderLeft: '4px solid hsl(217, 91%, 60%)',
              padding: '1rem 1.5rem',
              borderRadius: '0.375rem',
              marginBottom: '1.5rem',
            },
            // Warning callout
            '.warning': {
              backgroundColor: 'hsl(0, 84%, 60%, 0.1)',
              borderLeft: '4px solid hsl(0, 84%, 60%)',
              padding: '1rem 1.5rem',
              borderRadius: '0.375rem',
              marginBottom: '1.5rem',
            },
            // Success callout
            '.success': {
              backgroundColor: 'hsl(142, 76%, 36%, 0.1)',
              borderLeft: '4px solid hsl(142, 76%, 36%)',
              padding: '1rem 1.5rem',
              borderRadius: '0.375rem',
              marginBottom: '1.5rem',
            },
            // Highlighted content
            '.highlight': {
              backgroundColor: 'hsl(var(--primary) / 0.1)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
            },
            // Image captions
            'img + em': {
              display: 'block',
              textAlign: 'center',
              fontSize: '0.875em',
              marginTop: '0.5em',
              color: 'hsl(var(--muted-foreground))',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
