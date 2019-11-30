const product = {
	label: 'Pizza 1',
	price: 250,
	rating: 4.2
};

//this line uses object destructuring
// const { label: productName, price } = product;

// console.log(productName);
// console.log(price);

//Object destructuring works with functions arguments too.
const transaction = (type, { label, price }) => {
	console.log(type, label, price);
};

transaction('Order', product);
