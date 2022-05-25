const readlineSync = require("readline-sync");
let numDec = readlineSync.question('Can you give me a decimal number?');
let numberDec = readlineSync.question('Can you give me an another decimal number?');
console.log(Math.trunc(numberDec) * Math.trunc(numDec));