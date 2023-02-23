const yargs = require("yargs");
const notes = require("./notes.js");

// console.log(process.argv)
// console.log(yargs.argv);

// customize yargs version
yargs.version("1.1.0");

//create yargs add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: { describe: "Note Title", demandOption: true, type: "string" },
    body: { describe: "Note Body", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove yargs command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: { describe: "Note Title", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// create yargs list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler(argv) {
    console.log("Listing all notes", argv);
  },
});

// create yargs read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler(argv) {
    console.log("Reading a note", argv);
  },
});

// console.log(yargs.argv);
yargs.parse(); // parse is used to parse the command line arguments
