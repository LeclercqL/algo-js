const readlineSync = require("readline-sync");
/* let arr = [1, 2, 3, 4, 5];
let average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

let arr2 = [100, 101, 102];
let average2 = arr2.reduce((a,b) => a + b, 0) / arr2.length;
console.log(average2); */


const test1 = [1, 2, 3, 4, 5]
const test2 = [100, 101, 102]

// Henri
var total = 0

for(let i = 0; i < test2.length ; i++) {
    total = total + test2[i]
}
total = total / test2.length
console.log(total)



// Marlène

let sum = test1.reduce( (previousValue, currentValue) => {
    return previousValue + currentValue }, 0 )
sum = sum / test1.length
console.log(sum)