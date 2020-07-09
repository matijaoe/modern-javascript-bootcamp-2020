// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// collects multiple arguments into a single array (basically opposite of spread)
// can be only one and must be last 

// New way using rest:
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)






// me tryin out things

// argumnets will be turned into an array, then we iterate over it
function giveMeFour(...args) {
  args.map(a => console.log(a));
}

// will turn nums into an array
giveMeFour(1, 2, 3, 4);
// 1
// 2
// 3
// 4

// turns into a array with only 1 element - the array we passed in
giveMeFour([1, 2, 3, 4]); 
// [1, 2, 3, 4]

// spreds the array into numbers, and then the funciton collects them in an array
giveMeFour(...[1, 2, 3, 4]);
// 1
// 2
// 3
// 4
