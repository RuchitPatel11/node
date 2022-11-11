const fs = require('fs');

let readContent = fs.readFileSync("dummy.txt", "utf-8");

let noOfWords = readContent.split(" ").length

console.log(noOfWords);