const readlineSync = require("readline-sync");

let length = 5;
let width = 10;

function calcSurface(length,width) {
    return length * width;
}
console.log("If we give our rectangle a length of 5 and a height of 10, its surface will be" +calcSurface(length, width))


function rectangle(lengthUser, widthUser) {
    return lengthUser * widthUser;
}
let lengthUser = readlineSync.question("What's the length of the rectangle ?");
let widthUser = readlineSync.question("What's the width of the rectangle ?");
console.log("The surface of the rectangle is " + rectangle(lengthUser, widthUser));