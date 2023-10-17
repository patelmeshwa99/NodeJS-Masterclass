const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    // Not converting this to shorthand syntax since we are going to add code here soon
    return 'These are your notes....'
}

const addNote = (title, body) => {
    const notes = loadNotes();

    // Don't add redundant entry
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
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

// To export variables
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}