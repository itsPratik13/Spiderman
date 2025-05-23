// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          circular: ['circular-web', 'sans-serif'],
          general: ['general', 'sans-serif'],
          'robert-medium': ['robert-medium', 'sans-serif'],
          'robert-regular': ['robert-regular', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  