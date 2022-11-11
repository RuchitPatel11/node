const http = require('http'); 
const fs = require('fs');

const readPerson = fs.readFileSync("./person.json", "utf-8");

const server = http.createServer(function (req, res) {   
    
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(readPerson);  
            res.end();  
    
});

server.listen(3001);

console.log('Node.js web server at port 3001 is running..')