module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-html',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'declaration-no-important': true,
    'unit-disallowed-list': ['px'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
}
