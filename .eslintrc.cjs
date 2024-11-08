module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 2,
      },
    }],
  },
}
