const fs = require("fs")

fs.writeFileSync("hello.txt","Tolu: 'How are you?'")
fs.appendFileSync("hello.txt","Seyi: 'I am fine too and you?'")