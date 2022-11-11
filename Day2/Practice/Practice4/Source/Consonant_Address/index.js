const fs = require("fs");

let vowels = "aeiouAEIOU";
let count = 0;

const readAddress = fs.readFileSync("address.txt", "utf-8");

for (let character of readAddress) {
  if (!vowels.includes(character)) {
    count++;
  }
}
console.log(count);

// fs.unlinkSync("address.txt");