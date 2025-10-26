module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', 
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@next/next/no-img-element': 'off', // Disable img element warning
    'react-hooks/exhaustive-deps': 'off' // Disable exhaustive deps warning
  },
  ignorePatterns: [
    '**/*.js', // Ignore JavaScript files
    '**/*.config.js', // Ignore config files
    '**/*.mjs' // Ignore module JavaScript files
  ]
};
