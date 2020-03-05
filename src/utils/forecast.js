const request = require('request');

const forecast = (lati, longi, callback) => {
  const url = `https://api.darksky.net/forecast/ac410a99faf819eb948cb4118dbe4aed/${lati},${longi}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to loacation services', undefined);
    } else if (body.error) {
      callback('Unable to find coordnates. Try another search', undefined);
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. Today's Highs & Lows are ${body.daily.data[0].temperatureHigh} & ${body.daily.data[0].temperatureLow}`);
    };
  });
};

module.exports = forecast;