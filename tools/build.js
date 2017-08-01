/* eslint-disable no-console */
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.prod');

const MESSAGE = chalk.bold.blue;
const ERROR = chalk.underline.red;
const WARNING = chalk.keyword('orange');
const SUCCESS = chalk.underline.green;

process.env.NODE_ENV = "production";

console.log(MESSAGE('Generating minified production bundle via Webpack'));

webpack(webpackConfig).run((err, stats) => {
  if(err) { // fatal error occurred; stop
    console.error(ERROR(err.stack || err));
    if(err.details) {
      console.error(ERROR(err.details));
    }
    return 1;
  }

  const statsJson = stats.toJson;

  if(stats.hasErrors()) { //  error in stats; stop
    console.error(ERROR(statsJson.errors));
    return 1;
  }

  if(stats.hasWarnings()) {
    console.warn(WARNING(statsJson.warnings));
  }

  console.log(MESSAGE(`Webpack Stats: ${stats}`));
  console.log(SUCCESS('Production build succeeded! Written to /dist'));

  return 0;
});
