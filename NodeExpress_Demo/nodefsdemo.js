const fs = require('fs')
// var a = fs.readdirSync('../NodeJS_Demo')
// console.log(a)

fs.readdir('../NodeJS_Demo', (error, files)=>{
    if(error){
        throw error
    }
    console.log(files)
})

console.log("DONE")