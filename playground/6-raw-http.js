const https = require('https');

const url =
	'https://api.darksky.net/forecast/c0c3d2464e2e7d27281f4190e4f01530/40,-75?lang=fr&units=si&exclude=minutely,hourly';

const request = https.request(url, (response) => {
	let data = '';

	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body.currently.summary + ', Temperature:', body.currently.temperature);
	});
});

request.end();
