// Import node.js core modules
// Creating/syncing the file with passed data
const fs = require('fs')

fs.writeFileSync('output.txt', 'Hello, This is someone who\'s writing data to txt file!')

// Append some data to file
fs.appendFileSync('output.txt', ' Do you know me?')


// Import our own files
const notes = require('./notes.js')

const message = notes()
console.log(message)

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