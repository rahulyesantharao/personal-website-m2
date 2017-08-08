/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');

let test = 1;

// Configuration for Express app
const CONFIG = {
  PORT: 3000, // the port to run the dev server on
  COMPILER: webpack(webpackConfig) // the webpack compiler instance with dev configurations (provided to webpack-dev-middleware)
}

// Initialize Express server
const app = express();

// Use the Webpack Dev Middleware to serve the Webpack content from memory without writing files
app.use(webpackDevMiddleware(CONFIG.COMPILER, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));

// For any request, send the src/index.html
app.get('*', function(req, res) {
  console.log(test + ': ' + req.url + '; Sending index.html');
  test++;
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Start the server
app.listen(CONFIG.PORT, function(err) {
  if(err) {
    console.log(err);
  } else { // if there is no error, open the server on CONFIG.PORT
    open(`http://localhost:${CONFIG.PORT}`);
  }
});
