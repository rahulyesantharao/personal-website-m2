/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const open = require('open');
const chalk = require('chalk');
// const compression = require('compression');

let test = 1;

const MESSAGE = chalk.bold.blue;
const ERROR = chalk.underline.red;
const SUCCESS = chalk.underline.green;

// Configuration for Express app
const CONFIG = {
  PORT: 3000, // the port to run the dev server on
}

// Initialize Express server
const app = express();

// Use the express.static middleware to make the server serve static content
app.use(express.static('dist'));
// app.use(compression);

// For any request, send the src/index.html
app.get('*', function(req, res) {
  console.log(MESSAGE(test + ': ' + req.url + '; Sending index.html'));
  test++;
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(CONFIG.PORT, function(err) {
  if(err) { // If there is an error, log it
    console.error(ERROR(err));
  } else { // Otherwise, open the server on CONFIG.PORT
    console.log(SUCCESS('Opening production build on prodServer'));
    open(`http://localhost:${CONFIG.PORT}`);
  }
});
