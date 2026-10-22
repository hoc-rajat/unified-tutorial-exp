export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F0B1F',
          800: '#1B1537',
          700: '#2D2755',
        },
        line: {
          DEFAULT: '#2A2350',
          strong: '#40386E',
        },
        pink: {
          DEFAULT: '#EA3A70',
          hover: '#D52F62',
          soft: '#F58DAD',
        },
        lavender: {
          DEFAULT: '#C4B5FD',
          soft: '#DCD3FE',
        },
        fg: {
          DEFAULT: '#FFFFFF',
          muted: '#C9C4DC',
          subtle: '#9C96B6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 16px 40px -24px rgba(0,0,0,0.7)',
      },
    },
  },
};
