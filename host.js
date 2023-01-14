const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("responsive1.html");
const { createServer } = require("http");

const hostname = "localhost";
const port = 80;

const server = http.createServer ((req , res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(home);
}) ;

server.listen(80,"127.0.0.1",()=>{
    console.log("listening on port 80 for the responsive1 website of the restaurant");
});