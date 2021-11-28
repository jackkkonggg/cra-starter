module.exports = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  importOrder: [
    'react',
    '^@mui/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@assets/(.*)$',
    '^@components/(.*)$',
    '^@hooks/(.*)$',
    '^@pages/(.*)$',
    '^@providers/(.*)$',
    '^@typings/(.*)$',
    '^[./]',
  ],
};
