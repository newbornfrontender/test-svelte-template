module.exports = {
  './src/**/*.{svelte,js}': ['yarn lint:js:check', 'eslint --fix', 'git add'],
  './**/*.{svelte,css}': ['yarn lint:css:check', 'stylelint --fix', 'git add'],
  './**/*.{svelte,html,css,js,json,md}': ['prettier --write', 'git add'],
};
