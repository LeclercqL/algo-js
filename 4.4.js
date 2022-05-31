const readlineSync = require("readline-sync");

let multiR = [];
let mini;
let maxi;
let avg;

var numUser = new Number(readlineSync.question("What's the length of the array? "));

function average(arr) {
    return avg = arr.reduce((a, b) => a + b, 0) / arr.length;
}

function min(arr) {
    return mini = Math.min(...arr);
}

function max(arr) {
    return mani = Math.max(...arr);
}

function rand10() {
    return Math.floor(Math.random() * 11);
}

function multiRand(n) {
    for (let i = 0; i < n; i++) {
        multiR[i] = rand10();
    }
}

multiRand(numUser);
console.log(multiR);
console.log(min(multiR));
console.log(max(multiR));
console.log(average(multiR));