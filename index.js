//consonants and vowels are separated
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
//const random = Math.floor(Math.random() * 26);

//function to export to index.html
const makeWord = () => {
//first and third letter must always be consonants and second must always be a vowel. Random number generator to choose a random letter.
let firstLetter = consonants[Math.floor(Math.random() * 21)];
let secondLetter = vowels[Math.floor(Math.random() * 4)];
let thirdLetter = consonants[Math.floor(Math.random() * 21)];

    //avoiding naughty words!
    if(firstLetter === "s" && secondLetter === "e" && thirdLetter === "x"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    }else if(firstLetter === "d" && secondLetter === "i" && thirdLetter === "k"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    }else if(firstLetter === "d" && secondLetter === "i" && thirdLetter === "c"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } else if (firstLetter === "f" && secondLetter === "u" && thirdLetter === "k"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } else if (firstLetter === "f" && secondLetter === "u" && thirdLetter === "c"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } else if (firstLetter === "f" && secondLetter === "u" && thirdLetter === "x"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } else if (firstLetter === "d" && secondLetter === "i" && thirdLetter === "x"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    } else if (firstLetter === "f" && secondLetter === "a" && thirdLetter === "g"){
        firstLetter = "l";
        secondLetter = "o";
        thirdLetter = "l";
    }

//send the letters to index.html
//alert(firstLetter + secondLetter + thirdLetter);
document.getElementById("firstletter").innerHTML = firstLetter;
document.getElementById("secondletter").innerHTML = secondLetter;
document.getElementById("thirdletter").innerHTML = thirdLetter;
} 