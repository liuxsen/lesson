module.exports = {
  // presets 从后向前 执行，先执行 react处理，再经过 env 处理
  presets: [
    [
      '@babel/env',
      {
        // useBuiltIns: 'usage'
      }
    ],
    ['@babel/preset-react']
  ],
  // transform-class-properties  https://www.babeljs.cn/docs/babel-plugin-transform-class-properties
  // 'react-hot-loader/babel',
  plugins: ['transform-class-properties']
}
