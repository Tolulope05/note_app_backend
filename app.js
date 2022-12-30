const fs = require("node:fs")
const https = require('node:https');

fs.writeFileSync("hello.txt","Tolu: 'How are you?'")
fs.appendFileSync("hello.txt","Seyi: 'I am fine too and you?'")


https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
