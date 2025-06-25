/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1a237e', // Deep trust foundation for technical credibility - indigo-900
        'primary-50': '#e8eaf6', // Light indigo (50-level shade) - indigo-50
        'primary-100': '#c5cae9', // Light indigo (100-level shade) - indigo-100
        'primary-200': '#9fa8da', // Medium light indigo (200-level shade) - indigo-200
        'primary-300': '#7986cb', // Medium indigo (300-level shade) - indigo-300
        'primary-400': '#5c6bc0', // Medium indigo (400-level shade) - indigo-400
        'primary-500': '#3f51b5', // Medium indigo (500-level shade) - indigo-500
        'primary-600': '#3949ab', // Medium dark indigo (600-level shade) - indigo-600
        'primary-700': '#303f9f', // Dark indigo (700-level shade) - indigo-700
        'primary-800': '#283593', // Darker indigo (800-level shade) - indigo-800
        'primary-900': '#1a237e', // Darkest indigo (900-level shade) - indigo-900

        // Secondary Colors
        'secondary': '#2196f3', // Innovation energy for interactive elements - blue-500
        'secondary-50': '#e3f2fd', // Light blue (50-level shade) - blue-50
        'secondary-100': '#bbdefb', // Light blue (100-level shade) - blue-100
        'secondary-200': '#90caf9', // Medium light blue (200-level shade) - blue-200
        'secondary-300': '#64b5f6', // Medium blue (300-level shade) - blue-300
        'secondary-400': '#42a5f5', // Medium blue (400-level shade) - blue-400
        'secondary-500': '#2196f3', // Medium blue (500-level shade) - blue-500
        'secondary-600': '#1e88e5', // Medium dark blue (600-level shade) - blue-600
        'secondary-700': '#1976d2', // Dark blue (700-level shade) - blue-700
        'secondary-800': '#1565c0', // Darker blue (800-level shade) - blue-800
        'secondary-900': '#0d47a1', // Darkest blue (900-level shade) - blue-900

        // Accent Colors
        'accent': '#00bcd4', // Breakthrough moments and success highlights - cyan-500
        'accent-50': '#e0f7fa', // Light cyan (50-level shade) - cyan-50
        'accent-100': '#b2ebf2', // Light cyan (100-level shade) - cyan-100
        'accent-200': '#80deea', // Medium light cyan (200-level shade) - cyan-200
        'accent-300': '#4dd0e1', // Medium cyan (300-level shade) - cyan-300
        'accent-400': '#26c6da', // Medium cyan (400-level shade) - cyan-400
        'accent-500': '#00bcd4', // Medium cyan (500-level shade) - cyan-500
        'accent-600': '#00acc1', // Medium dark cyan (600-level shade) - cyan-600
        'accent-700': '#0097a7', // Dark cyan (700-level shade) - cyan-700
        'accent-800': '#00838f', // Darker cyan (800-level shade) - cyan-800
        'accent-900': '#006064', // Darkest cyan (900-level shade) - cyan-900

        // Background Colors
        'background': '#fafafa', // Clean canvas for code readability - gray-50
        'surface': '#ffffff', // Content containers with subtle depth - white

        // Text Colors
        'text-primary': '#1a1a1a', // Extended reading without eye strain - gray-900
        'text-secondary': '#666666', // Clear hierarchy and supporting information - gray-600

        // Status Colors
        'success': '#4caf50', // Achievement celebration and positive feedback - green-500
        'success-50': '#e8f5e8', // Light green (50-level shade) - green-50
        'success-100': '#c8e6c9', // Light green (100-level shade) - green-100
        'success-600': '#43a047', // Medium dark green (600-level shade) - green-600
        'success-700': '#388e3c', // Dark green (700-level shade) - green-700

        'warning': '#ff9800', // Deadline urgency without panic - orange-500
        'warning-50': '#fff3e0', // Light orange (50-level shade) - orange-50
        'warning-100': '#ffe0b2', // Light orange (100-level shade) - orange-100
        'warning-600': '#fb8c00', // Medium dark orange (600-level shade) - orange-600
        'warning-700': '#f57c00', // Dark orange (700-level shade) - orange-700

        'error': '#f44336', // Helpful problem identification and guidance - red-500
        'error-50': '#ffebee', // Light red (50-level shade) - red-50
        'error-100': '#ffcdd2', // Light red (100-level shade) - red-100
        'error-600': '#e53935', // Medium dark red (600-level shade) - red-600
        'error-700': '#d32f2f', // Dark red (700-level shade) - red-700

        // Conversion Colors
        'conversion': '#ff9800', // Vibrant orange for maximum conversion impact - orange-500
        'conversion-hover': '#f57c00', // Darker orange for hover states - orange-700
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'cta': ['Inter', 'sans-serif'],
        'accent': ['Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'depth': '0 2px 4px rgba(26, 35, 126, 0.1), 0 8px 16px rgba(26, 35, 126, 0.1)',
        'floating': '0 4px 20px rgba(33, 150, 243, 0.3)',
        'glow': '0 0 20px rgba(33, 150, 243, 0.4)',
        'glow-accent': '0 0 20px rgba(0, 188, 212, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'micro': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}