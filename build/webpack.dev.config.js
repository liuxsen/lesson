const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8085,
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'https://cnodejs.org/api/v1',
        changeOrigin: true
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
