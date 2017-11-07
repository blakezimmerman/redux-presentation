const webpackMerge = require('webpack-merge');
const { APP_DIR, commonConfig } = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  entry: [
    APP_DIR + '/index.tsx'
  ],

  devtool: 'eval',

  output: {
    filename: 'app.bundle.js'
  }
});
