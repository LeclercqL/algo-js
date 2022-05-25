const readlineSync = require("readline-sync");
let minAge = readlineSync.question('Can you give a minimum age?');
let maxAge = readlineSync.question ('Can you give me an maximum age?');
let currentAge = readlineSync.question ('And now, can you give me your current age?');

if ((minAge<currentAge<maxAge)) {
    console.log(currentAge)
}
