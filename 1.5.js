const readlineSync = require("readline-sync");
let numDec = readlineSync.question('Can you give me a decimal number?');
let number = readlineSync.question('Can you give me a integer number?');
console.log(number * Math.trunc(numDec));