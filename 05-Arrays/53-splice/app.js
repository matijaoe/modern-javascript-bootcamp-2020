let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

// splice modifies IN PLACE
// returns deleted values as an array, empty array if nothing is deleted


//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]


//if we only set startIdx, it deletes everthing after it (inclusive), and returns it
animals.splice(3); 
// ["shark", "octopus", "salmon"]