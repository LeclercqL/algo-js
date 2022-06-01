/*const arr = [1, 4, 8, 15];
 let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); */

let arr1 = [1, -4, 7, 12];

// Dylan 

// const positiveArr = arr1.filter( function(a) { return a >= 0} )
// if(positiveArr === 0 ) {
//     console.log(0)
// } else {
//     let sum = positiveArr.reduce( function (a, b) {return a + b})
//     console.log(sum)
// }

// let sum = 0
// positiveArr === 0 ? console.log(sum) : sum = positiveArr.reduce( function (a, b) {return a + b}) 
// console.log(sum)
// true ? true : false 

const positiveArr = arr1.filter( (el) => el >= 0 )
                        .reduce( (previous, current) => previous + current, 0)

console.log(positiveArr)