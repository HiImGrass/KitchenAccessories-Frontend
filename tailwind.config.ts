/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // --- BỘ MÀU TỪ DESIGN_2.MD ---
        surface: '#f4fced',
        'surface-dim': '#d4ddce',
        'surface-bright': '#f4fced',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eef6e7',
        'surface-container': '#e8f0e2',
        'surface-container-high': '#e3ebdc',
        'surface-container-highest': '#dde5d7',
        
        'on-surface': '#161d15',
        'on-surface-variant': '#53433f',
        'inverse-surface': '#2b3229',
        'inverse-on-surface': '#ebf3e5',
        
        outline: '#86736e',
        'outline-variant': '#d8c2bc',
        
        primary: '#894b3a',
        'on-primary': '#ffffff',
        'primary-container': '#a76251',
        'on-primary-container': '#fffbff',
        'inverse-primary': '#ffb4a1',
        
        secondary: '#5f604b',
        'on-secondary': '#ffffff',
        'secondary-container': '#e5e4c9',
        'on-secondary-container': '#656650',
        
        tertiary: '#6d5848',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#877060',
        'on-tertiary-container': '#fffbff',
        
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        
        background: '#f4fced',
        'on-background': '#161d15',
        'surface-variant': '#dde5d7',
        
        // Brand Specific Colors
        'canvas-cream': '#F7F3E8',
        'surface-white': '#FFFFFF',
        'warm-sand': '#DEC2AF',
        terracotta: '#C37A67',
        sage: '#A0A088',
        'olive-gray': '#747C70',
      },
      fontFamily: {
        display: ['Epilogue', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      spacing: {
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '2.5rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
      },
      // --- THIẾT KẾ KEYFRAMES & ANIMATIONS CHO E-COMMERCE ---
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-right": { // Dùng cho Giỏ hàng (Cart Drawer)
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "zoom-in": { // Dùng cho Modal/Popup
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "shimmer": { // Skeleton loading mượt mà
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-in",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "slide-right": "slide-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "zoom-in": "zoom-in 0.2s ease-out",
        "shimmer": "shimmer 2s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Rất khuyên dùng nếu bạn xài shadcn
  ],
}