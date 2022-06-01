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

console.log(JSON.stringify(askTvSerie())); */

const askTvSerie = () => {
    const tvshow = {};
    tvshow.name = readlineSync.question('Please enter the name of your favorite tv show : ');
    tvshow.year = readlineSync.question('In what year was it produced ? : ');
    tvshow.cast = [];
    let keepGoing = true;
    while (keepGoing) {
        let input = readlineSync.question('Please give me the cast (type stop to finish): ');
        input != "stop" ? tvshow.cast.push(input) : keepGoing = false;
    }
    return tvshow;
}
console.log(`Your favorite show object : ${JSON.stringify(askTvSerie())}`);
