// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:
//index 0: total steps
//index 1: total floors
//etc.
const fitbitData = [ 308756, 1814, 211 ];

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful
const lucyFitbitData = [ 12344, 1814, 211 ];

// OBJECTS TO THE RESCUE!
