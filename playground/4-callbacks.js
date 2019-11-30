const add = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum);
});

const geocode = (adress, callback) => {
	setTimeout(() => {
		const data = {
			long: 0,
			lat: 0
		};
		callback(data);
	}, 2000);
};

geocode('Oran', (data) => {
	console.log(data);
});
