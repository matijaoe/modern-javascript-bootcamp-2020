let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

// does not alter the array itself
console.log(fruits.concat(veggies)); // ["apple", "banana", "asparagus", "brussel sprouts"]
console.log(veggies.concat(fruits)); // ["asparagus", "brussel sprouts", "apple", "banana"]

let allFoods = fruits.concat(veggies, meats);
// ["apple", "banana", "asparagus", "brussel sprouts", "steak", "chicken breast"]
