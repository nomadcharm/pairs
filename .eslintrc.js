// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-var': 2,
    'no-func-assign': 2,
    'no-duplicate-imports': 2,
    'no-extra-parens': 2,
    'no-fallthrough': 2,
    'no-duplicate-case': 2,
    'default-case': 2,
    'no-loop-func': 2,
    'prefer-arrow-callback': 2,
    'prettier/prettier': 2,
    curly: 2,
  },
};