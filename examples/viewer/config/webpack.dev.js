/* eslint-disable */
const merge = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    namedModules: false
  },
  serve: {
    port: 3001,
    hot: true,
    clipboard: false,
    dev: {
      publicPath: '/',
      stats: 'errors-only',
      logLevel: 'warn',
    }
  },
};

module.exports = env => {
  const common = require('./webpack.common.js')(env);
  return merge(common, devConfig);
};
