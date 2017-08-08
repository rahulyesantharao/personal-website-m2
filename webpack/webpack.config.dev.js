const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {
  SRC: path.join(__dirname, '..', 'src'),
  DIST: path.join(__dirname, '..', 'dist')
};

module.exports = {
  entry: [
    path.join(CONFIG.SRC, 'index.js')
  ],
  devtool: 'inline-source-map',
  output: {
    path: CONFIG.DIST,
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/, // matches all .scss files
        use: ['style-loader', 'css-loader', 'sass-loader']
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
        loader: 'file-loader?name=[path][hash].[ext]'
      }
    ]
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(CONFIG.SRC,'index.html'),
      inject: true
    })
  ]
};
