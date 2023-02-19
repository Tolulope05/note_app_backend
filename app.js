const yargs = require("yargs");
const getNotes = require("./note.js");

// console.log(process.argv)
console.log(yargs.argv);

// customize yargs version
yargs.version("1.1.0");

//create yargs add command
yargs.command({
  command: "add",
  describe: "Add a note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// remove yargs command

yargs.command({
  command: "Remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});

// create yargs list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all notes");
  },
});

// create yargs read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});
