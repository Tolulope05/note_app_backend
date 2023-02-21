const { on } = require("events");
const fs = require("fs");

const getNotes = function () {
  return "your Notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  notes.push({ title: title, body: body });
  saveNote(notes);
  console.log(notes);
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

module.exports = { getNotes: getNotes, addNote: addNote };
