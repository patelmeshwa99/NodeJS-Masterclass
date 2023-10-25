const request = require('request')
const chalk = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=ACCESS_KEY&query=India'

request({ url: url, json: true}, (error, response) => {
    console.log(chalk.red.bold(response.body.current.weather_descriptions[0]) + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + 
    response.body.current.precip + '% chance of rain!')
})