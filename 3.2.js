const readlineSync = require("readline-sync");
let arr = [1, 2, 3, 4, 5];
let average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

let arr2 = [100, 101, 102];
let average2 = arr2.reduce((a,b) => a + b, 0) / arr2.length;
console.log(average2);