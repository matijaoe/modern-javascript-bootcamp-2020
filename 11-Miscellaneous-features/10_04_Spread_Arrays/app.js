const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

// // same thing as
//const mollusca = cephalopods.concat(gastropods);


const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
console.log(cephCopy === cephalopods) // false, because they are unique refferences, modifying one does not change the other

// if we did
//const cephCopy = cephalopods;
//cephcopy.push['dog']; // it would modify BOTH arrays, beacuse they are pointing to the same thing, as long as we dont reinitialize either
//console.log(cephCopy === cephalopods) // true, because they are unique refferences

// spread strings in an array - 2 mthods
'abcdefg'.split(''); // ["a", "b", "c", "d", "e", "f", "g"]
[...'abcdefg']; // ["a", "b", "c", "d", "e", "f", "g"]
