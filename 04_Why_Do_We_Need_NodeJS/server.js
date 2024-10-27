const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req)
    res.end("Hello World from NodeJS...")
})

server.listen(3000)