// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// generate alphabet, took from stack overflow
function genCharArray(charA, charZ) {
    let arr = [];
    for (let i = charA.charCodeAt(0); i <= charZ.charCodeAt(0); ++i) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

function isPangram(sentence) {
    // turn into lowercase
    sentence = sentence.toLowerCase();
    let alphabet = genCharArray('a', 'z');

    // loop over the alphabet
    for (let letter of alphabet) {
        // if sentence doesn't contain the letter, return false straight away
        if (!sentence.includes(letter)) {
            return false;
        }
    }
    // return true only after the loop has finsihed and hasn't found any not-containing letters
    return true;
}


// alternative
// function isPangram(sentence) {
//     // turn intolowercase
//     sentence = sentence.toLowerCase();
//     let alphabet = genCharArray('a', 'z');

//     // loop over the alphabet
//     for (let letter of alphabet) {
//         // if sentence contains the letter, go to next iteration
//         if (sentence.includes(letter)) {
//             continue;
//         }
//         return false;
//     }
//     return true;
// }



console.log(isPangram('The five boxing wizards jump quickly')); //true
console.log(isPangram('The five boxing wizards jump quick')); //false