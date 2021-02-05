const fs = require('fs')
const ev = require('events')
const readableString = fs.createReadStream('data1.txt')

readableString.on('data', (data)=>console.log(data.toString()))

// const writeableString = fs.createWriteStream('data1.txt')
// readableString.pipe(writeableString)

// console.log(readableString instanceof ev)
// console.log(writeableString instanceof ev)
console.log("Hello")