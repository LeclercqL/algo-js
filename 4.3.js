const readlineSync = require("readline-sync");


function rand10() {
    return Math.floor(Math.random() * 11);
}

console.log(rand10(1, 11)); // Exo 4.2 c/c


let multiR = [];
let arrUser = readlineSync.question("What's the length of the array? ");

function multiRand(n) {
    for (let i = 0; i < n; i++) {
        multiR[i] = rand10();
    }
}
multiRand(arrUser);
console.log(multiR);

