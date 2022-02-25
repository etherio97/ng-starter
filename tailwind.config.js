module.exports = {
  content: ['src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('./src/app/core/styles/tailwind')],
};
