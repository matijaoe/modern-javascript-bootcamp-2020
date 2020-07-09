// Pick a target number we are trying to guess (1 to 9)
const target = Math.floor(Math.random() * 10);

// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
