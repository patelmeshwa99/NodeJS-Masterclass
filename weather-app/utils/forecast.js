const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const weatherStackUrl =
    "http://api.weatherstack.com/current?access_key=API_KEY&query=" +
    latitude +
    "," +
    longitude;

  // Call to weather stack API to get the weather stats
  request({ url: weatherStackUrl, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather stack!", undefined);
    } else if (body.error) {
      callback("Invalid input!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. There is a " +
          body.current.precip +
          "% chance of rain!"
      );
    }
  });
};

module.exports = forecast;
