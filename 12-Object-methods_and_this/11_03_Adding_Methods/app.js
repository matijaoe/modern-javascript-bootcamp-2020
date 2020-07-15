// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
}


// also works like thi, but its uncommon
// we want to encapsulate the methods inside given object, so that we can't call them by themselves

// const multiply = function (x, y) {
//   return x * y;
// }

// const add = function (x, y) {
//   return x + y;
// }

// const math = {
//   numbers: [1, 2, 3, 4, 5],
//   add,
//   multiply
// }



// To execute multiply:
math.multiply(5, 9); //45