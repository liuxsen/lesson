const path = require('path')
const resolve = dir => path.resolve(__dirname, '..', dir)
const HTMLwebpackPlugin = require('html-webpack-plugin')
const config = {
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  resolve: {
    // 首先找index 文件
    mainFiles: ['index'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // 自己解决后缀名解析
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        // eslint 先检查源码风格，如果不符合规范，会通过webpack，输出到前端页面，否则再通过babel-loader
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name]_[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLwebpackPlugin({
      template: resolve('src/index.html')
    })
  ]
}

module.exports = config
