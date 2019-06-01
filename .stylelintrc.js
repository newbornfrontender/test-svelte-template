module.exports = {
  extends: 'stylelint-config-recommended',
  processors: '@mapbox/stylelint-processor-arbitrary-tags',
  rules: {
    'selector-nested-pattern': '^&',
  },
};
