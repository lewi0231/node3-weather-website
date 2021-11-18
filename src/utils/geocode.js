const request = require("postman-request");

const geocode = (location, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json?access_token=pk.eyJ1IjoiaWxrc2VhIiwiYSI6ImNraW9jZHp6bjFiaGUycnN2ODk4MHZhbWsifQ.0jEn7ir7L0i1SC07PhKukA&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (!body.features.length) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
