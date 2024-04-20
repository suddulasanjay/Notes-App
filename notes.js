//console.log('Welcome to the  "Notes.js" File');
const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => "Your Notes....";
const addNotes = function (title, body) {
  const notes = loadNotes();
  let duplicates = notes.filter((note) => note.title === title);
  if (duplicates.length) {
    console.log("This title has been already taken");
  } else {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  }
};
const removeNote = function (title) {
  const currentNotes = loadNotes();
  let updatedNotes = currentNotes.filter((note) => note.title !== title);
  saveNotes(updatedNotes);
  if (currentNotes.length === updatedNotes.length) {
    console.log(chalk.red.inverse("No Note Found !"));
  } else {
    console.log(chalk.green.inverse(`${title} Note has been removed !!`));
  }
};
const listNotes = () => {
  console.log(chalk.yellow.inverse("Your List goes here :  "));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.blue(note.title) + " : " + chalk.green(note.body));
  });
};
const readNote = (title) => {
  console.log(chalk.yellow.inverse("Your Note goes here :  "));
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.blue(note.title) + " : " + chalk.green(note.body));
  } else {
    console.log(chalk.red.inverse("No Note Found !"));
  }
};

function saveNotes(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
}
function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
//console.log('You are at the end of the "Notes.js" File');
