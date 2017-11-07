const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

exports.APP_DIR = path.resolve(__dirname, '../src');
exports.BUILD_DIR = path.resolve(__dirname, '../dist');

exports.commonConfig = {
  resolve: {
    extensions: ['.js', '.ts','.tsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        include: this.APP_DIR,
        use: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:  this.APP_DIR + '/index.html'
    })
  ]
};
