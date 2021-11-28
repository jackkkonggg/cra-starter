module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo', 'xo-typescript', 'xo-react', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'capitalized-comments': 'off',
  },
  globals: {
    React: true,
    JSX: true,
    document: true,
  },
  ignorePatterns: ['react-app-env.d.ts', 'reportWebVitals.ts'],
};
