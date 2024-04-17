// @ts-check

import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      'dist/**',
    ],
  },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2],
      'jsx-quotes': ['error', 'prefer-double'],
      'no-multiple-empty-lines': 'error',
      'no-multi-spaces': 'error',
      'no-return-await': 'off',
      'object-curly-spacing': ['error', 'always'],
      'object-shorthand': ['error', 'properties'],
      'padded-blocks': ['error', 'never'],
      'quotes': ['error', 'single'],
      'require-await': 'off',
      'semi': ['error', 'never'],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_',
        },
      ],
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
    ignores: [
      'dist/*',
      'node_modules/*',
    ],
  })