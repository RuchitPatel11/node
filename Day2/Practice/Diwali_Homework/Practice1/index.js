const fs = require("fs");

const readStrings = fs.readFileSync("strings.txt", "utf-8");

readStrings.split(" ").forEach((item) => {
  let length = item.length;

  let bl = true;
  for (let i = 0; i < length / 2; i++) {
    if (item[i] == item[length - 1 - i]) {
      bl = true;
    } else {
      bl = false;
    }
  }
  if (bl) {
    console.log(item);
    fs.appendFile("palindrom.txt", item + "\n", (err) => {
      if (err) throw err;
      console.log("palindrom Appended");
    });
  }
  return "No Palindrome Strings";
});
