const http = require("node:http");

const serve = http.createServer((req,res)=>{
    res.writeHead(200 {"Content-Type":""});
    res.end("hello world..");
});

serve.listen(3000,()=>{
    console.log("server is running on the port 3000");
});