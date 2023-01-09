import http from "node:http";

const server = http.createServer((req,res)=>{
    console.log("hello word");
    res.end("hellow word");
});

server.listen(3000);