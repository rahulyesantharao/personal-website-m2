const path = require('path');
// const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

const CONFIG = {
  SRC: path.join(__dirname, '..', 'src'),
  DIST: path.join(__dirname, '..', 'dist')
};

module.exports = {
  entry: {
    vendor: path.resolve(CONFIG.SRC, 'vendor.js'),
    main: path.join(CONFIG.SRC, 'index.js')
  },
  devtool: 'source-map',
  output: {
    path: CONFIG.DIST,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
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
      },
      {
        test: /\.scss$/, // matches all .scss files
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 2
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ]
            }
          }, 'sass-loader']
        })
      },
      {
        test: /\.svg$/, // matches all .svg files
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'resources/img/[name].[hash].[ext]'
        }
      }
    ]
  },
  target: "web",
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new HtmlWebpackPlugin({
      template: path.join(CONFIG.SRC,'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    // new PurifyCSSPlugin({
    //   paths: glob.sync(path.join(CONFIG.SRC, '*.js'))
    // }),
    new webpack.optimize.UglifyJsPlugin(), // minify JS
  ]
};
