const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	//Access index i of both arrays
	console.log(`${words1[i]}${words2[i]}`);
}
