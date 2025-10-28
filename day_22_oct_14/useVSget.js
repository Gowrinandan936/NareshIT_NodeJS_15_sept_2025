const express = require('express');

const server = express();

server.get("/", (req,res)=>{
    res.send("Hello rey! beta.....");
});

server.use("/hello", (req,res)=>{
    res.send("Hello rey babu!.....");
});

server.listen(4000, ()=>{
    console.log("Server is running at port 4000");
});