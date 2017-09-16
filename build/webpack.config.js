const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('../project.config')

module.exports = {
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${config.port}/__webpack_hmr&timeout=20000`,
    path.resolve(`${config.src}/main.js`),
  ],
  
  output: {
    path: path.resolve(config.dist),
    filename: 'shell-[name].js',
  },
  
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.src + '/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  
  resolve: {
    modules: [
      'node_modules',
      path.resolve(config.src)
    ]
  },
  
  devtool: 'eval-source-map'
  
}