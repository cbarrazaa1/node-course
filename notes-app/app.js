const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: (argv) => {
    notes.add(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.remove(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Lists notes',
  handler: () => {
    notes.list();
  }
});

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: () => {
    console.log('Reading note');
  }
});

yargs.parse();