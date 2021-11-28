module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo',
    'xo-typescript',
    'xo-react',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'capitalized-comments': 'off',
    'import/order': 'error',
  },
  globals: {
    React: true,
    JSX: true,
    document: true,
  },
  ignorePatterns: ['react-app-env.d.ts', 'reportWebVitals.ts'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
