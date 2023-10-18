// Import our own files
const notesUtil = require('./notes.js')

// Import yards module
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    showInHelp: true,
    builder: {
        title: {
            describe: 'Title for new note',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Body for new note',
            type: 'string',
            demandOption: true
        }
    },
    handler (argv) {
        // Add newly created note to fs
        notesUtil.addNote(argv.title, argv.body)
    }
});


// Create remove command
yargs.command({
    command: 'remove',
    showInHelp: true,
    describe: 'Command to remove the note',
    builder: {
        title: {
            describe: 'Title for note to be removed',
            type: 'string',
            demandOption: true
        }
    },
    handler () {
        notesUtil.removeNote(yargs.argv.title)
    }
});

// Create list command
yargs.command({
    command: 'list',
    showInHelp: true,
    describe: 'Command to list the notes',
    handler () {
        notesUtil.listNotes()
    }
});

// Create read command
yargs.command({
    command: 'read',
    showInHelp: true,
    describe: 'Command to list the notes',
    builder: {
        title: {
            describe: 'Title for note to be read',
            type: 'string',
            demandOption: true
        }
    },
    handler (argv) {
        notesUtil.readNote(argv.title)
    }
});

yargs.parse();