const request = require('request');

const url =
	'https://api.darksky.net/forecast/c0c3d2464e2e7d27281f4190e4f01530/37.8267,-122.4233?lang=fr&units=si&exclude=minutely,hourly';

//Geocode URL
const mapboxUrl =
	'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVtbWVkIiwiYSI6ImNrM2Q1eTVsMTEycXkzaXMxY203czlvMzgifQ.u5wE_IAbKb7XVtr4T0Bt3g&limit=1';

// DarkSky API http request
request({ url: url, json: true }, (error, response) => {
	console.log(
		response.body.daily.data[0].summary +
			' Il fait actuellement ' +
			response.body.currently.temperature +
			' degrés.' +
			'Il y a ' +
			response.body.currently.precipProbability +
			'% de chances de pluie.'
	);
});

//Requesting mapbox api
request({ url: mapboxUrl, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to Geolocalisation service');
	} else if (response.body.message) {
		console.log('Something wrong happened!');
	} else if (response.body.features.length === 0) {
		console.log('Unable to find location, Try another place');
	} else {
		console.log('Longitude: ' + response.body.features[0].center[0]);
		console.log('Latitude: ' + response.body.features[0].center[1]);
	}
});
