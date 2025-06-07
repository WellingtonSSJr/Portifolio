export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)', trasition: 200 },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
