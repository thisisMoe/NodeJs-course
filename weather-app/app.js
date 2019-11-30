const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
	console.log('Please provide an address');
} else {
	//using objects destructuring here
	geocode(process.argv[2], (error, { lat, long, location }) => {
		if (error) {
			return console.log(error);
		}
		forecast(lat, long, (forecastError, forecastData) => {
			if (forecastError) {
				return console.log(forecastError);
			}
			console.log(location);
			console.log(forecastData);
		});
	});
}
