const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Create add command
yargs.command({
	command: 'add',
	describe: 'Add new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

//Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove note',
	builder: {
		title: {
			descirbe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

//Create list command
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler() {
		notes.listNotes();
	}
});

//Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note by title',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});

yargs.parse();