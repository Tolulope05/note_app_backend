const validator = require("validator")

const getNotes = require("./note.js");

// console.log(process.argv[2])

if (process.argv[2]==="add") {
    console.log("Ading New Note")
} else if (process.argv[2]==="remove"){
console.log("Deleting your note!")
}
