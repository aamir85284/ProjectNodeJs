const fs = require('fs')
//var arr = []
fs.readFile('data.txt', 'UTF-8', (err,data)=>{

   var a =  data.split('\r\n')
 
   console.log((a.filter(num => num%2 == 0)))
    
      });
