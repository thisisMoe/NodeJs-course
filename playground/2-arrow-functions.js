// const square = (x) => {
// 	return x * x;
// };

const square = (x) => x * x;

console.log(square(2));

const event = {
	name: 'Birthday party',
	guestList: [ 'Moe', 'Asma', 'Karen' ],
	printGuestList() {
		console.log('Guest list for: ' + this.name);

		this.guestList.forEach((guest) => {
			console.log(guest + ' is attending this party');
		});
	}
};

event.printGuestList();
