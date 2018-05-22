// ES6
// let and const are block scoped

// const add = (x, y) => {
//     return x+y;
// }

// const identity = x => x;

// import fs = require 'fs';
import fs from 'fs';
var output = fs.readFileSync('data.txt','utf8');
console.log(output);