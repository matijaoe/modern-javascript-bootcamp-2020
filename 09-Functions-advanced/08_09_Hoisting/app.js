//! variables declared with var are hoisted 
// console.log(animal); //* undefined
// var animal = 'Tapir';
// console.log(animal); // Tapir


//! variables declared with let & const are not hoisted
// console.log(shrimp); //* ERROR
// const shrimp = 'Harlequin Shrimp';
// console.log(shrimp); // 'Harlequin Shrimp';

//! function statements are hoisted
// howl();

// function howl() {
//   console.log("AWOOOOOOO");
// }

// function expressions are...kind of hoisted.
// The variable is hoisted (bcs of var), but has a value of undefined. For let it would be ERROR - hoot not defined
hoot();
var hoot = function () {
  console.log("HOOOO HOOOOO")
}

/* 
var declarations are processed when the function starts (or script starts for globals).

In other words, var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).

//* Declarations are hoisted, but assignments are not.
*/

// it is doing this behind the scenes:
// var animal; //* declaration
// console.log(animal);
// animal = 'Tapir'; //* assignment

