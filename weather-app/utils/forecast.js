const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    'https://api.darksky.net/forecast/afea1b483ad526fdb96f8ffec08b0c06/' + lat + ',' + long + '?units=si';

  request({
    url,
    json: true,
  }, (error, {body}) => {
    if(error != null) {
      callback('Unable to connect to weather service.', null);
      return;
    }

    if(body.error != null) {
      callback('Unable to find location.', null);
      return;
    }

    callback(null, {
      temperature: body.currently.temperature,
      rainProb: body.currently.precipProbability,
    });
  });
}

module.exports = forecast;75