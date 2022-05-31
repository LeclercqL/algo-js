const readlineSync = require("readline-sync");

var a = 0;
var b = 0;

function calcDistance(a1, b1, a2, b2) {
    var a1 = readlineSync.question('Give the first coordinate of a ');
    var a2 = readlineSync.question('Give the second coordinate of a ');
    var b1 = readlineSync.question('Give the first coordinate of b ');
    var b2 = readlineSync.question('Give the second coordinate of b ');
    return Math.hypot(a2 - a1, b2 - b1)
}
console.log(Math.hypot(calcDistance(a, b)));