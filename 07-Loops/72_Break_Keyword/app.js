const target = Math.floor(Math.random() * 10);
let guess;

//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
while (true) {
	if (target === guess) break; //Break stops the loop in its tracks
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
