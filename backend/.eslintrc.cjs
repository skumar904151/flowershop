module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
};
