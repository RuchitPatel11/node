const fs = require("fs");

let Name = process.argv.splice(2);

if (Name.length > 0) {
  fs.appendFile("person.txt", "Hello" + " " + Name + "\n", (err) => {
    if (err) throw err;
    console.log("Name Appended");
  });
}
