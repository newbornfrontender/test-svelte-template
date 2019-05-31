const production = !process.env.ROLLUP_WATCH;

module.exports = () => ({
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: production,
    },
    'css-mqpacker': production,
    cssnano: production,
  },
});
