const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes();

    // Don't add redundant entry
    const firstDuplicateNote = notes.find((note) => note.title === title)

    if (!firstDuplicateNote) {
        // Push new note to already existing notes array
        notes.push({
            title: title,
            body: body
        })
    
        // Save on fs
        saveNotes(notes)
        console.log(chalk.green('Note added ...'))
    } else {
        console.log(chalk.blue('Note with title ' + title + ' already exists!'))
    }

}

const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataString);
}

const removeNote = function(title) {
    const notes = loadNotes();

    // Filtered notes that doesn't have the same title
    // These notes are now supposed to be there on the file
    const filteredNotes = notes.filter((note) => note.title !== title)

    // Only if note that is to be removed is found, update the notes in fs
    // Else, just log that note not found
    if (notes.length === filteredNotes.length) {
        console.log(chalk.red('No note found with title ' + title))
    } else {
        // Save on fs
        saveNotes(filteredNotes)
        console.log(chalk.green('Note removed with title ' + title))
    }
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        const notesString = notesBuffer.toString()
        return JSON.parse(notesString)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue('Your notes...'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Reading note with title ' + title))
    const noteFound = notes.find((note) => note.title === title)
    if (noteFound) {
        console.log(chalk.green(noteFound.title))
        console.log(noteFound.body)
    } else {
        console.log(chalk.red.inverse('No note with title ' + title + ' found!'))
    }
}

// To export variables
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}