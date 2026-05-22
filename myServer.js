const http = require("http");

http.createServer((request, response) => {
    response.write("My First Node JS Server");
    response.end()
}).listen(5000);
