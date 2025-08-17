/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "primary-dark": "#2563eb",
        secondary: "#06b6d4",
        accent: "#8b5cf6",
        "dark-bg": "#0f172a",
        "darker-bg": "#020617",
        "card-bg": "rgba(30, 41, 59, 0.6)",
        "text-light": "#f8fafc",
        "text-lighter": "#e2e8f0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      animation: {
        draw: "draw 3s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'pulse-glow': 'pulse-glow 2s infinite',
        'binary-fall': 'binaryFall 15s linear infinite' // Added for Hero section
      },
      keyframes: {
        draw: {
          'from': { 
            'stroke-dashoffset': '1000',
            'opacity': '0'
          },
          'to': { 
            'stroke-dashoffset': '0',
            'opacity': '0.8'
          }
        },
        pulse: {
          '0%, 100%': { 
            opacity: '0.8', 
            transform: 'scale(1)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.2)' 
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.2)',
            filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.9))'
          }
        },
        'binary-fall': { // Added for Hero section
          'from': { 
            transform: 'translateY(-100%)' 
          },
          'to': { 
            transform: 'translateY(100%)' 
          }
        }
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(59, 130, 246, 0.5)',
        'glow-md': '0 0 10px rgba(59, 130, 246, 0.7)',
        'glow-lg': '0 0 15px rgba(59, 130, 246, 0.9)'
      }
    },
  },
  plugins: [],
}