const userReviews = {};

//Adding a new property:
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

//Updating existing properties
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;


// returns undefined if we only search for not-existent key
userReviews.colt; // undefined

// random thing i stumbled upon
userReviews.colt++; // NaN

// updates the key:value pair
userReviews.colt = 4;

// deletes the key:value pair
delete userReviews.colt;

