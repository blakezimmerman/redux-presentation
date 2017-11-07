const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { APP_DIR, BUILD_DIR, commonConfig } = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  entry: [
    APP_DIR + '/index.tsx'
  ],

  output: {
    path: BUILD_DIR,
    filename: 'app.[hash].bundle.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
