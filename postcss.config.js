const isProd = !process.env.ROLLUP_WATCH;

module.exports = () => ({
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: isProd,
    },
    'css-mqpacker': isProd,
    cssnano: isProd,
  },
});
