const fs = require('fs')
const buf = fs.readFileSync(process.argv[2])
const str = String(buf.toString())
const arrayOfNewLines = str.split('\n')
console.log(arrayOfNewLines.length-1);