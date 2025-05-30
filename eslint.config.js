/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-assign-module-variable': 'off',
    'react/jsx-no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-css-tags': 'warn',
    '@typescript-eslint/no-empty-interface': 'off'
  },
  ignorePatterns: ['node_modules/**', '.next/**', 'out/**'],
  parserOptions: {
    project: './tsconfig.json'
  },
  root: true
};