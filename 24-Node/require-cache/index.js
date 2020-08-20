const counterObject = require('./myscript');

console.log(counterObject.getCounter()); // 0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); // 1

// stays in cache
const newCounterObject = require('./myscript');

console.log(newCounterObject.getCounter()); // 1
