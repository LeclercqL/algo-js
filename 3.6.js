const readlineSync = require("readline-sync");

/* let arr = ['Hello', 'the','people!'];
console.log(...arr) */
const sentence = ['hello', 'world', 'this', 'is', 'great']

// Lydia
const finalSentence = sentence.join(" ")
console.log(finalSentence)

// Seb
console.log(...sentence)



let nam = "BeCode"

const sayHi = () => {
    const hi = "Hi"
    const welcome = () => {
        const team = "team"
        return `${hi} ${nam}, welcome to the ${team}`
    }
    return welcome()
} 

sayHi()