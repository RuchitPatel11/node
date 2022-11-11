const fs = require("fs");
let res = fs.readFileSync("Resume.txt", "utf8");

res = res.split("\n");

let x = 0;

for (let i in res) {
  if (res[i].includes("Experience")) {
    x = parseInt(i);
  }
}

res[x] = res[x].replace("Fresher", "Experienced");

res = res.join("\n");

fs.writeFileSync("Resume.txt", res);
