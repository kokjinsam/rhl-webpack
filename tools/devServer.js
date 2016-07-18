const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack/webpack.dev.babel');
const configs = require('./configs/devServer');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: `http://${configs.hostname}:${configs.port}/`,
  hot: true,
  historyApiFallback: true,
  contentBase: path.join(process.cwd(), 'src/'),
}).listen(configs.port, configs.hostname, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`
    Listening at http://localhost:${configs.port}/
  `);
});
