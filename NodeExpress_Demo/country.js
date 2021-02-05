const http = require('http').createServer()
const fs = require('fs')
http.on('request',(req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'})
            // var json =JSON.parse( fs.readFileSync('countrystates.json','UTF-8'))
            // const data = JSON.stringify(json, null, 2)
            // res.end(data)
            //console.log(json.countries)
            var json =JSON.parse(fs.readFileSync('countrystates.json','UTF-8'))
            let country = json.countries.filter(data => data.country).map(data => data.country)


            let states = json.countries.filter(data =>data.country === "Afghanistan").map(data =>data.states)
            //console.log(country)
            //const country1 = JSON.stringify(country, null, 2)
            function getCountry(country1){
                var data = '';
                for(let i=0; i<country1.length; i++){
                    data = data+"<option>"+country1[i]+"</option>"
                }
                data = "<select>"+data+"</select>"
                return data
                //document.getElementById("country").innerHTML = data
            }
            function getState(country1){
                var data = '';
                for(let i=0; i<country1.length; i++){
                    data = data+"<option>"+country1[i]+"</option>"
                }
                data = "<select>"+data+"</select>"
                return data
                //document.getElementById("country").innerHTML = data
            }
            var data = getCountry(country)
            var st = getState(states[0])
            res.end(data)
            console.log(states[0])
            res.end(st)

            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.end('<h3>Page Not Found</h3>')  
            break;  
    }
})
http.listen(8086,'localhost',()=>console.log('server started'));


//console.log(a.countries.filter(data => data.country).map(data => data.country))