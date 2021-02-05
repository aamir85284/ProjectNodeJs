const http = require('http').createServer()
const fs = require('fs')
http.on('request',(req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(JSON.stringify(fs.readFileSync('countrystates.text','UTF-8').split('\r\n')))
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.end('<h3>Page Not Found</h3>')  
            break;  
    }
})
http.listen(8086,'localhost',()=>console.log('server started'));