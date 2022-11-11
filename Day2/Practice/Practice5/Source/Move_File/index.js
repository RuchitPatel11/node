const fs = require('fs-extra')

fs.writeFile("./person.txt","Move File To Person Folder",(err) => {
    if (err) throw err;
    console.log("File Created");
  })

  fs.move("./person.txt","./Person/person.txt",(err) => {
    if (err) throw err;
    console.log("File moved succesfully");
  })