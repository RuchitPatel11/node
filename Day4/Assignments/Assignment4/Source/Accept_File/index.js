const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "POST" && req.url == "/upload") {
    res.writeHead(200, { "Content-Type": "application/json" });

    let chunks;
    req.on("data", (data) => {
      chunks = data;
    });

    req.on("end", () => {
      console.log(chunks);
      const data = chunks.toString();
      console.log(data);
      fs.writeFileSync("FileContent.txt", data);
    });

    res.end();
  }
});
server.listen(3002);
console.log("Node.js web server at port 3002 is running..");
