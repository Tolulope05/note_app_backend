const yargs = require("yargs");
const getNsotes = require("./intro.js");

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
  handler: function (argv) {
    console.log("Adding a new note!", argv.title);
    console.log("Note body:", argv.body);
  },
});

// remove yargs command

yargs.command({
  command: "Remove",
  describe: "Remove a note",
  handler: function (argv) {
    console.log("Removing a note", argv);
  },
});

// create yargs list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function (argv) {
    console.log("Listing all notes", argv);
  },
});

// create yargs read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function (argv) {
    console.log("Reading a note", argv);
  },
});

// console.log(yargs.argv);
yargs.parse(); // parse is used to parse the command line arguments
