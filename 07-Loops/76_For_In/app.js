// FOR IN is for objects
//! for .. of - iterates over each value in a iteralbe (in a array or string)
//! for .. in - loops over the keys (the properties in the objects) - loops over enumerables

const jeopardyWinnings = {
	regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChamptions: 500000,
	battleOfTheDecades: 100000
}

for (let prop in jeopardyWinnings) {
	console.log(prop); // outputs each key
}

for (let prop in jeopardyWinnings) {
	console.log(jeopardyWinnings[prop]);
}

let total = 0;
for (let prop in jeopardyWinnings) {
	total += jeopardyWinnings[prop];
}
console.log(`Total is $${total}`);



//  same behavior with for .. of loops

// // error with for .. of
// for (let w of jeopardyWinnings) {
// 	console.log(w)
// }
// Uncaught TypeError: jeopardyWinnings is not iterable

// // for .. of - outputs keys
// for (let w of Object.keys(jeopardyWinnings)) {
// 	console.log(w)
// }

// // for .. of - outputs values
// for (let w of Object.values(jeopardyWinnings)) {
// 	console.log(w)
// }

//** */ You can use for .. in with an array, but DONT'T - it returns index (aka the key of the value)
// also, updating or manipulating properties may change the order in array - as it thinks of it as an object
let subjects = ['oop', 'vis', 'mat', 'uwt'];

for (let s in subjects) console.log(s); // returns 0, 1, 2, 3
for (let s in subjects) console.log(subjects[s]); // 'oop', 'vis', 'mat', 'uwt'

for (let s of subjects) console.log(s); // 'oop', 'vis', 'mat', 'uwt'
for (let s of Object.values(subjects)) console.log(s); // 'oop', 'vis', 'mat', 'uwt'