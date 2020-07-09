//! SHIFT - remove from start
//! UNSHIFT - add to start

let dishesToDo = ['large platter'];

//! to add to the start:
dishesToDo.unshift('plate');



//! add to the start again:
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('spoon');
// returns new lentgh of array

//! remove from the start:
dishesToDo.shift();
// returns the removed item


// if we add multiple items in one unshit, they get added as one chunk, in order we specified 
dishesToDo.unshift("spork", "fork"); // ["spork", "fork", "plate", "large platter"]


console.log(dishesToDo);
