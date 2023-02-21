const fs = require("fs");
data = { title: "Tolulope", details: "note_details" };
fs.writeFileSync("note.json", data);
