const note = {
    title: "Title",
    author: "Author"
}

// Convert to string
console.log(JSON.stringify(note))

// Write to a file
const fs = require('fs')
fs.writeFileSync('1-json.json', JSON.stringify(note))

// Read from that file
// When you read, by default, its in bytes format
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
// We need to convert it to string using toString method
const dataString = dataBuffer.toString()
console.log(dataString)
// Parse string to json object
console.log(JSON.parse(dataString).title)