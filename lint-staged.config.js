module.exports = {
  './src/**/*.{svelte,js}': ['eslint --fix', 'git add'],
  './**/*.{svelte,css}': ['stylelint --fix', 'git add'],
  './**/*.{svelte,html,css,js,json,md}': ['prettier --write', 'git add'],
};
