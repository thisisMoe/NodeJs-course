const fs = require('fs');
const chalk = require('chalk');

//Create addNote()
const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		});

		saveNotes(notes);

		console.log(chalk.green.inverse('Note added!'));
	} else {
		console.log(chalk.red.inverse('Note title taken!'));
	}
};

//Create removeNote()
const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);

	if (notesToKeep.length === notes.length) {
		console.log(chalk.red.inverse('No such title found!'));
	} else {
		console.log(chalk.green.inverse('Note removed!'));
	}

	saveNotes(notesToKeep);
};

//Create listNotes()
const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.yellow.inverse('Your Notes:'));
	notes.forEach((note) => {
		console.log(note.title);
	});
};

//Create readNote()
const readNote = (title) => {
	const notes = loadNotes();
	const noteToRead = notes.find((note) => note.title === title);

	if (noteToRead) {
		console.log(chalk.inverse(noteToRead.title));
		console.log(noteToRead.body);
	} else {
		console.log(chalk.red.inverse('No such title found!'));
	}
};

//Create savNotes() which saves our notes array into JSON file
const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

//Create loadNotes() that reads the JSON file buffer turning it into a string then JSON.parse() it.
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
};
