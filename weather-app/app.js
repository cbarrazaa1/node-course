const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if(address == null) {
  console.log('Please provide an address.')
} else {
  geocode(address, (error, {lat, long, place}) => {
    if(error != null) {
      console.log(`Error: ${error}`);
      return;
    }

    forecast(lat, long, (error, data) => {
      if(error != null) {
        console.log(`Error: ${error}`);
        return;
      }

      console.log(place);
      console.log(data);
    });
  });
  }