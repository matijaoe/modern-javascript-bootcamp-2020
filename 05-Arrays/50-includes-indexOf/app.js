let ingredients = [
	'water',
	'corn starch',
	'flour',
	'cheese',
	'brown sugar',
	'shrimp',
	'eel',
	'shrimp',
	'butter'
];

//includes returns true or false
if (ingredients.includes('flour')) {
	console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//indexOf returns an index (or -1 if not found)
// returns the index of only the first found element
if (ingredients.indexOf('shrimp') !== -1) {
	console.log('Sorry, I hate shrimp.');
}

// returns -1 if not found
console.log(ingredients.indexOf('banana')); //-1


// return only the index of first found
console.log(ingredients.indexOf('shrimp')); // 5

// return the index of last 
console.log(ingredients.lastIndexOf('shrimp')); // 7


// also we can pass another argumnet, fromIndex i.ee
console.log(ingredients.indexOf('shrimp', 3)); // 5
console.log(ingredients.indexOf('shrimp', 6)); // 7
