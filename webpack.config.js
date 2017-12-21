const path = require('path');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  entry: [ 'babel-polyfill', './index.js' ],
  output: {
    path: path.join(__dirname, 'out'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  devtool: debug ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            compact: !debug
          }
        }
      }
    ],
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false })
  ]
};
