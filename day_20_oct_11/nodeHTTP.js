const http = require('http');

let server = http .createServer((req, res) => {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello, World! from Server......</h1>");
    res.end()
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});