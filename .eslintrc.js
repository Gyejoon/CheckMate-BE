const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/all',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-expressions': OFF,
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    'no-use-before-define': OFF,
    camelcase: OFF,
    'no-shadow': OFF,

    'import/no-unresolved': OFF,
    'import/extensions': OFF,
    'import/prefer-default-export': OFF,

    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
    'react/require-default-props': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-filename-extension': [
      ERROR,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-wrap-multilines': ERROR,
    'react/jsx-max-props-per-line': [ERROR, { maximum: 1 }],
    'react/no-array-index-key': OFF,

    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/no-unused-expressions': ERROR,
    '@typescript-eslint/ban-ts-ignore': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/no-shadow': ERROR,

    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        required: {
          every: ['nesting', 'id'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': OFF,
      },
    },
  ],
};