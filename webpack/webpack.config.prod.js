const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

const CONFIG = {
  SRC: path.join(__dirname, '..', 'src'),
  DIST: path.join(__dirname, '..', 'dist')
};

module.exports = {
  entry: [
    path.join(CONFIG.SRC, 'index.js')
  ],
  devtool: 'source-map',
  output: {
    path: CONFIG.DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // matches all .js, .jsx files
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/, // matches all .css files
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  target: "web",
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: path.join(CONFIG.SRC,'index.html'),
      inject: true
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin(), // minify JS
  ]
};
