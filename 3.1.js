const readlineSync = require("readline-sync");
/* let first = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < first.length; i++) {
    total += first[i];
}
console.log(total);

let second = [100, 101, 102];
let totalSecond = 0;

for (let i = 0; i < second.length; i++) {
    totalSecond += second[i];
}
console.log(totalSecond) */

const test1 = [1, 2, 3, 4, 5]
const test2 = [100, 101, 102]

// Henri
var total = 0

for(let i = 0; i < test2.length ; i++) {
    total = total + test2[i]
}
console.log(total)

// Marlène

let sum = test1.reduce( (previousValue, currentValue) => {
    previousValue + currentValue}, 0 )

console.log(sum)