const path = require("path");

var filepath = path.parse(__filename);

console.log(filepath);
console.log(`File Name: ${filepath.name}`);
console.log(`File Extension: ${filepath.ext}`);
console.log(`Base Name: ${filepath.base}`);
console.log(`Directory Path: ${filepath.dir}`);

var dirpath = path.parse(__dirname);
console.log(dirpath);
console.log(`Parent Directory: ${dirpath.dir}`);
