/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
