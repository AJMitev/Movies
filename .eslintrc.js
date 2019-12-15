module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'func-names': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off'
  }
};
