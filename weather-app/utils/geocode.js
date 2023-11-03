const request = require("request");

const geocode = (address, callback) => {
  const mapBoxUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=ACCESS_TOKEN&limit=1";

  // Call to mapbox API to get coordinates of a place
  request({ url: mapBoxUrl, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to mapbox!", undefined);
    } else if (body.features.length === 0) {
      callback("Invalid input!", undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const location = body.features[0].place_name;
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: location,
      });
    }
  });
};

module.exports = geocode;
