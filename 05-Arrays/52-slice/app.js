let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

// first index INCLUSIVE, last index NON-INCLUSIVE
let swimmers = animals.slice(0, 3); // ["shark", "salmon", "whale"]

let mammals = animals.slice(2, 4); // ["whale", "bear"]

//One option:
// let reptiles = animals.slice(4, 6);

// Another option:
// From index 4 (inclusive) till the end
let reptiles = animals.slice(4); // ["lizard", "tortoise"]

// Another option
// Get last 2
// let reptiles = animals.slice(-2);

// Get last 3
let quadruped = animals.slice(-3); // ["bear", "lizard", "tortoise"]

// Again, last index not included
let mixed = animals.slice(-3, -1); // ["bear", "lizard"]


// MAKING A QUICK COPY OF AN ARRAY, doesn't impact the original
let animalsCopy = animals.slice();
