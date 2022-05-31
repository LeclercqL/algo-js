const readlineSync = require("readline-sync");

let num = new Number(readlineSync.question("What's your favourite number ?"));

while (num != 42){
        console.log('Are you sure ?');
        num = readlineSync.question("What's your favourite number ?");
} 
console.log("42? Very good choice!");