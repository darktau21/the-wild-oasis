module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:react/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@feature-sliced',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
      },
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        'src/**/*.{ts,tsx}',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-refresh',
    'perfectionist',
    '@tanstack/query',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'import/no-internal-modules': 'off'
  },
};
