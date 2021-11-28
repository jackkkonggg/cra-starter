module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo',
    'xo-typescript',
    'xo-react',
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
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'capitalized-comments': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@mui/system',
            importNames: ['styled', 'keyframes'],
            message: 'Please use styled from @mui/material instead.',
          },
        ],
        patterns: [
          {
            group: ['../../*'],
            message: 'Please use path aliases instead.',
          },
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
    document: true,
  },
  ignorePatterns: ['react-app-env.d.ts', 'reportWebVitals.ts'],
};
