const readlineSync = require("readline-sync");
let num = new Number(readlineSync.question('Type a number : '))
let total = 0;
for (let i = 0; i < num; i++) {
    let numUser = new Number(readlineSync.question('Type a number : '))
    total = total + numUser;
}
console.log(total)
