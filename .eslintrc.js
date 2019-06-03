module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['svelte3'],
  settings: {
    'svelte3/ignore-styles': true,
  },
  extends: ['eslint:recommended', 'prettier'],
};
