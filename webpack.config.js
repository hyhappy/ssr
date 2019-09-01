const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './client/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dev'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader', // 加载器
          exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Demo',
        template: path.resolve(__dirname, './client/index.html'),
        inject: true,
        filename: 'index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    inline: true, // 自动刷新
    hot: true, // 开启热模块替换
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 9090, // 如果省略，默认8080
    publicPath: '/',
    compress: true, // 使用gzip压缩
    stats: 'minimal',
  }
};
