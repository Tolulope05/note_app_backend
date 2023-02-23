const { on } = require("events");
const fs = require("fs");

const getNotes = function () {
  return "your Notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title == title;
  });

  if (duplicateNotes.length == 0) {
    notes.push({ title: title, body: body });
    saveNote(notes);
  } else {
    console.log("OPS!: Note Title Taken");
  }

  console.log(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();

  // const notesToKeep = notes.filter(function (note) {
  //   return note.title !== title;
  // });
  // using arrow function
  const notesToKeep = notes.filter((n) => n.title !== title);
  //NB:Arrow functions do not bind to this binding in an objects

  // function to know whether note was removed
  if (notes.length > notesToKeep.length) {
    console.log("Note Removed Successfully!");
    saveNote(notesToKeep);
  } else {
    console.log("No note found");
  }
};

const saveNote = function (n) {
  const dataJSON = JSON.stringify(n);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const parsedData = JSON.parse(dataJSON);
    return parsedData;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
