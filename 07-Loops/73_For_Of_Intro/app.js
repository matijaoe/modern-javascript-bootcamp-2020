let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}

//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
	console.log(sub);
}

//Works with other iterables, like strings!
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}
