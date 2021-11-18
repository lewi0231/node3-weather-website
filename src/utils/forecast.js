const request = require("postman-request");

const forecast = ({ latitude, longitude }, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f381aa555c1c64ec630fb7c7d5b25138&query=" +
    latitude +
    ", " +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees and feels like ${body.current.feelslike} degrees.  Humidity is ${body.current.humidity}%, whilst the wind is travelling ${body.current.wind_dir} at a speed of ${body.current.wind_speed} km's per hour.`
      );
    }
  });
};

module.exports = forecast;
