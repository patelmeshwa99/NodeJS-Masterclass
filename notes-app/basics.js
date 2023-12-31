// Import node.js core modules
// Creating/syncing the file with passed data
const fs = require('fs')

fs.writeFileSync('output.txt', 'Hello, This is someone who\'s writing data to txt file!')

// Append some data to file
fs.appendFileSync('output.txt', ' Do you know me?')

// Import npm modules
const validator = require('validator')
const chalk = require('chalk')

// Validator package
console.log(validator.isEmail('abc@gmail.com'))
console.log(validator.isEmail('Hey'))
console.log(validator.isURL('https://google.com'))
console.log(validator.isURL('google.com'))

// Chalk package
console.log(chalk.green('OK'))
console.log(chalk.blue.bgYellow.bold('Good day!'))
console.log(chalk.bold.red('Good day!'))
console.log(chalk.bold.inverse.red('Inversed styling!'))

// Normal processing of command line arguments
console.log(process.argv)

// Processing of command line arguments using yargs module
const yargs = require('yargs')
console.log(yargs.argv)
// node app.js hi => { _: [ 'hi' ], '$0': 'app.js' }
// node app.js hi => { _: [ 'hi' ], '$0': 'app.js' }
// node app.js hi --name="Something" => { _: [ 'hi' ], name: 'Something', '$0': 'app.js' }

// Customize yargs version
// yargs.version('1.1.0')