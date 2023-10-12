// Import file system lib
const fs = require('fs')

// Parse json data from json file
const dataBuffer = fs.readFileSync('challenge.json')
const dataJson = JSON.parse(dataBuffer.toString())

// Update json properties
dataJson.name = 'Its updated'
dataJson.age = 99

// Sync the file to the latest data
fs.writeFileSync('challenge.json', JSON.stringify(dataJson))