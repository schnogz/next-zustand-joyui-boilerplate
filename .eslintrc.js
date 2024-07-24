module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'eslint-plugin-import-helpers',
    'testing-library',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import-helpers/order-imports': [
      2,
      {
        alphabetize: {
          ignoreCase: true,
          order: 'asc',
        },
        groups: [
          ['/^next/', 'module'],
          [
            '/^@/components/',
            '/^@/hooks/',
            '/^@/layouts/',
            '/^@/queries/',
            '/^@/store/',
            '/^@/styles/',
            '/^@/types/',
          ],
          ['parent', 'sibling', 'index'],
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
    'sort-keys-fix/sort-keys-fix': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
