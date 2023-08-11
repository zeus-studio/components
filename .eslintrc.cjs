const { getESLintConfig } = require('@applint/spec');

// https://www.npmjs.com/package/@applint/spec
module.exports = getESLintConfig('react-ts', {
  rules: {
    // 'import/no-duplicates': ['error', { considerQueryString: true }],
    // camelcase: 'off',
    'no-console': 'on',
    'max-lines': 'off',
    'id-length': 'off',
  },
});
