const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  let urlDesc = new URL(req.url, "https://" + req.headers.host);
  console.log(req.headers.host);
  let params = urlDesc.searchParams;

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify(parseInt(params.get("num1")) + parseInt(params.get("num2")))
  );

  res.end();
});
server.listen(9000);
console.log("Node.js web server at port 9000 is running..");
