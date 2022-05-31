const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 11);
}

console.log(rand10(1, 11));