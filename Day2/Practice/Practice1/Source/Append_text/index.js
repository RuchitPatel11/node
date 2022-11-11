const fs = require("fs");

fs.appendFile("person.txt", "Hello India", (err) => {
  if (err) throw err;
  console.log("Hello India Appended");
});
