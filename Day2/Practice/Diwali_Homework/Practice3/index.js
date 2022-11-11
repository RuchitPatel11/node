const fs = require('fs');

fs.writeFileSync("numbers.txt","")

for(let i=0; i<=100; i++){
    fs.appendFileSync("numbers.txt",i + "\n")
}