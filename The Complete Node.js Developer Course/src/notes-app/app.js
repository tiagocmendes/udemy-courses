const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(`${chalk.green.underline.inverse.bold('Success:')} ${chalk.default.blue(msg)}`);
