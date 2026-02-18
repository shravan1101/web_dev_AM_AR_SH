
var slugfiy = require('slugify')

let a = slugfiy('some string');
console.log(a);

const b = slugfiy('some strw=034' , '_');
console.log(b)