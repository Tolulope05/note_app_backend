const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };
// const bookJson = JSON.stringify(book);
// // console.log(bookJson);
// const parsedData = JSON.parse(bookJson);
// // console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJson);

// want to read the file created
const dataBuffer = fs.readFileSync("1-json.json"); //i.e its binary data
const dataJson = dataBuffer.toString(); // standard strinf in js
const data = JSON.parse(dataJson); //parsed data
console.log(data.author);
