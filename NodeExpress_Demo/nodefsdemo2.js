const fs = require('fs')
const path = require('path')
// var a = fs.readdirSync('../NodeJS_Demo')
// console.log(a)

fs.readdir('../NodeJS_Demo', (error, files)=>{
    if(error){
        throw error
    }
    files.forEach(file => {
        const filepath = path.basename(file)
        console.log(filepath)
        if(filepath === 'shape.js'){
        fs.readFile(`../NodeJS_Demo/${filepath}`, 'UTF-8', (err, data)=>{
          
            console.log(data)
        })
    }
    })
    //console.log(files)

})

console.log("DONE")