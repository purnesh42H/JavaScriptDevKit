/* eslint-disable no-console */

//var chalk_std = require('chalk'); //standard js

import chalk_babel from 'chalk'; //babel js which transpiles to standard  js

console.log(chalk_babel.green('Starting app in dev mode...'));
// Note: To run babel script i.e. ES6 use babel-node instead of just node
// For example, check scripts part of package.json