//console.log('you are in the "app.js" File');
/*
//Taking Arguments from the Terminal
let args = process.argv[2];
console.log(args);
*/
const fs = require("fs");
const notes = require("./notes.js");
//Parsing the input from the Terminal
const yargs = require("yargs");
//Adding Commands
yargs.command({
  command: "add",
  description: "Adding a Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Adding a new Note !");
    // console.log("Title : " + argv.title);
    // console.log("Body : " + argv.body);
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  description: "Removing a Note",
  builder: {
    title: {
      describe: "Title of the Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Removing a new Note !");
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  description: "listing a Note",
  handler: function () {
    console.log("listing the Notes !");
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  description: "Reading a Note",
  builder: {
    title: {
      describe: "Title of the Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Reading a new Note !");
    notes.readNote(argv.title);
  },
});

yargs.parse();

//console.log('you are at the end of the "app.js" File');
