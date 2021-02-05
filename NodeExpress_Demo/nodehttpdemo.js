const http = require('http')
const server = http.createServer((req, res)=>{
    res.writeHead(201, {'Content-Type':'text/html'})
    res.write('<h2>Hello worlld</h2>')
    res.end()
})
server.listen(8082, "localhost",()=>{
    console.log("Server ready.....")
})

