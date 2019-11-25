const request = require('request');

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
	const url =
		'https://api.darksky.net/forecast/c0c3d2464e2e7d27281f4190e4f01530/' +
		String(lat) +
		',' +
		String(long) +
		'?lang=fr&units=si&exclude=minutely,hourly';

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Impossible de se connecter au service de Meteo', undefined);
		} else if (response.body.error) {
			callback(response.body.error, undefined);
		} else {
			const msg =
				response.body.daily.data[0].summary +
				' Il fait actuellement ' +
				response.body.currently.temperature +
				' degrés.' +
				'Il y a ' +
				response.body.currently.precipProbability +
				'% de chances de pluie.';

			callback(undefined, msg);
		}
	});
};

module.exports = forecast;
