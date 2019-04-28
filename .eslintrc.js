module.exports = {
  parser: 'typescript-eslint-parser',
  env: {
    browser: true,
    es6: true
  },

  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // https://stackoverflow.com/questions/34244888/how-do-i-configure-eslint-to-allow-fat-arrow-class-methods
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['typescript', 'react', 'react-hooks'],
  rules: {
    // 关闭函数括号之前有空格校验
    'space-before-function-paren': 'off',
    // 不校验react组件 proptyes
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
