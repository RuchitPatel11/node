const http = require('http'); 


const server = http.createServer(function (req, res) {   
    if(req.url === "/"){
        res.write("Good Morning");
        res.end();
    }
    if(req.url === "/studentid") {
           
            res.write(JSON.stringify(1));  
            res.end();  
    }
    if(req.url === "/studentname") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write("Rahul");  
        res.end();  
}
});

server.listen(3010);

console.log('Node.js web server at port 3010 is running..')