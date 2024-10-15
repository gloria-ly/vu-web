module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // 支持的es版本
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module' //代模块类型，默认为script,我们设置为module
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'prefer-const': 'off',
    'vue/multi-word-component-names': 'off',
    'no-constant-condition': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-undef': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/no-unused-vars': 'off',
    'no-empty': 'off',
    'vue/no-mutating-props': 'off'
  },
  ignores: [
    // 这里列出你想要忽略的文件或目录的路径模式
    'node_modules/',
    'dist/',
    '.git/',
    // 可以添加更多的路径模式
  ],
};
