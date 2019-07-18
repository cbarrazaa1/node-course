const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicates = notes.filter(note => {
    return note.title === title
  });

  if(duplicates.length > 0) {
    console.log('That title is already taken.');
    return;
  }

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
  console.log(`Note ${title} added!`);
}

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => {
    return note.title !== title;
  });

  if(notes.length > filteredNotes.length) {
    console.log('That note does not exist.');
    return;
  }

  saveNotes(filteredNotes);
  console.log(`Note ${title} removed!`);
}

const listNotes = () => {
  const notes = loadNotes();

  if(notes.length === 0) {
    console.log('You have no notes.');
    return;
  }

  console.log('Your notes:');
  notes.forEach(note => console.log(note.title));
}

const saveNotes = notes => {
  const data = JSON.stringify(notes);
  fs.writeFileSync('notes.json', data);
}

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('notes.json');
    return JSON.parse(buffer.toString());
  } catch(e) {
    return [];
  }
}

module.exports = {
  get: getNotes,
  add: addNote,
  remove: removeNote,
  list: listNotes,
};