const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
//const random = Math.floor(Math.random() * 26);

//function to export to index.html
const makeWord = () => {
    let firstLetter;
    let secondLetter;
    let thirdLetter;
    let fourthLetter;
//first and third letter must always be consonants and second must always be a vowel. Random number generator to choose a random letter.
    let format = Math.floor(Math.random() * 2);
    if (format === 0){
        firstLetter = consonants[Math.floor(Math.random() * 21)];
        secondLetter = vowels[Math.floor(Math.random() * 4)];
        thirdLetter = consonants[Math.floor(Math.random() * 21)];
        fourthLetter = consonants[Math.floor(Math.random() * 21)];
    } else {
        firstLetter = consonants[Math.floor(Math.random() * 21)];
        secondLetter = consonants[Math.floor(Math.random() * 21)];
        thirdLetter = vowels[Math.floor(Math.random() * 4)];
        fourthLetter = consonants[Math.floor(Math.random() * 21)];
    }
//send the letters to index.html
//alert(firstLetter + secondLetter + thirdLetter);
document.getElementById("firstletter").innerHTML = firstLetter;
document.getElementById("secondletter").innerHTML = secondLetter;
document.getElementById("thirdletter").innerHTML = thirdLetter;
document.getElementById("fourthletter").innerHTML = fourthLetter;
};

const makePolyWord = () => {
    let firstLetter;
    let secondLetter;
    let thirdLetter;
    let fourthLetter;
    let format = Math.floor(Math.random() * 2);
    if(format === 0){
        firstLetter = consonants[Math.floor(Math.random() * 21)];
        secondLetter = vowels[Math.floor(Math.random() * 4)];
        thirdLetter = consonants[Math.floor(Math.random() * 21)];
        fourthLetter = vowels[Math.floor(Math.random() * 4)];
    } else {
        firstLetter = vowels[Math.floor(Math.random() * 4)];
        secondLetter = consonants[Math.floor(Math.random() * 21)];
        thirdLetter = vowels[Math.floor(Math.random() * 4)];
        fourthLetter = consonants[Math.floor(Math.random() * 21)];
    }
    document.getElementById("firstletter").innerHTML = firstLetter;
    document.getElementById("secondletter").innerHTML = secondLetter;
    document.getElementById("thirdletter").innerHTML = thirdLetter;
    document.getElementById("fourthletter").innerHTML = fourthLetter;
}