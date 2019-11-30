const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Set up static directory to serve
app.use(express.static(publicDirPath));

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setting up route handlers:
app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather app',
		name: 'B. Sidi Mohammed'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'B. Sidi Mohammed'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		msg: 'Put content here',
		name: 'B. Sidi Mohammed'
	});
});

app.get('/weather', (req, res) => {
	res.send({
		location: 'boston',
		forecast: "It's 13 degrees out there."
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		msg: 'Help article not found.',
		title: 'Oops',
		name: 'B. Sidi Mohammed'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		msg: 'Page not found.',
		title: 'Oops',
		name: 'B. Sidi Mohammed'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});
