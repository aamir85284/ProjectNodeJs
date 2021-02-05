const http = require('http')
const fs = require('fs')
const url = require('url')



const server = http.createServer((req, res)=>{
    const filname = `./mods/${req.url}`
    fs.readFile(filname, 'UTF-8', (err, html)=>{
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'})
            res.end('<h2>Page Not found</h2>')
        }
        else{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(html)
        res.end()
        }
    })

})

server.listen(8083, 'localhost', ()=>{
    console.log("Server Started")
})