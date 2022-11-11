const http = require("http");

const server = http.createServer((req, res) => {

    let urlDesc = new URL(req.url, "https://" + req.headers.host);
    let params = urlDesc.searchParams;
  let vowels = "AaEeIiOoUu";

  for (let i in params.get("name")) {
    if (vowels.includes(params.get("name")[i])) {
      res.write(params.get("name")[i]);
      res.end();
      break;
    }
  }
});
server.listen(8000);
console.log("Node.js web server at port 8000 is running..");
