const readlineSync = require("readline-sync");
/* let addMembers = "";
let cast = [];

function askTvSerie() {
    let nameSerie = readlineSync.question("What's the name of your favorite series? ");
    let yearSerie = readlineSync.question("What is the year of release? ");


    do {
        let members = readlineSync.question("Can you name some of the actors in this series? ");
        cast.push(members);
        addMembers = readlineSync.question('Any other names to add? Y / N ');
    } while (addMembers !== "N");
    return {
        "Name ": nameSerie, "Production year ": yearSerie, "Names of the cast members ": cast
    };
}
console.log(JSON.stringify(askTvSerie()));

let tvSerie = askTvSerie();
let newCast = [];
function randomizeCast() {
    for (let i = 0; i < cast.length; i++) {
        newCast.push(cast[Math.floor(Math.random() * cast.length)]);
    }
}

randomizeCast();
tvSerie["Cast members of the new serie "] = newCast;
console.log(JSON.stringify(tvSerie)); */
const askTvSerie = () => {
    const tvSerie = {};
    tvSerie.name = readlineSync.question('Please enter the name of your favorite tv show : ');
    tvSerie.year = readlineSync.question('In what year was it produced ? : ');
    tvSerie.cast = [];
    let keepGoing = true;
    while (keepGoing) {
        let input = readlineSync.question('Please give me the cast (type stop to finish): ');
        input != "stop" ? tvSerie.cast.push(input) : keepGoing = false;
    }
    return tvSerie;
}

const randomGenerator = (n) => {
    return Math.floor(Math.random() * n )
}

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie 
// then display a randomized list of the previous cast that will form the new cast of your next serie.
const randomizeCast = (tvSerie) => {
    // https://bost.ocks.org/mike/shuffle/
    let numberOfCharacters = tvSerie.cast.length, t
    const newCast = tvSerie.cast
    while( numberOfCharacters != 0) {
        let randomIndex = randomGenerator(numberOfCharacters--);
        t = newCast[numberOfCharacters]
        newCast[numberOfCharacters] = newCast[randomIndex]
        newCast[randomIndex] = t
    }
    
    return newCast
}

const tvshow = askTvSerie();
console.log(`Your favorite show object : ${JSON.stringify(tvshow)}`);
console.log(`And here's a random cast with the current cast: ${randomizeCast(tvshow)}`);