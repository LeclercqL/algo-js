const readlineSync = require("readline-sync");
let addMembers = "";
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
console.log(JSON.stringify(tvSerie));