const assert = require('assert').strict;
const { forEach } = require('../index');

let numbers;
// referecing global variable
beforeEach(() => {
    numbers = [1, 2, 3];
})

it('should sum an array', () => {
    let total = 0;
    forEach(numbers, value => {
        total += value;
    });

    // run with 'mocha' to verify (cos its installed globally)
    assert.strictEqual(total, 6, 'Expected forEach to sum the array');
    numbers.push(3)
    numbers.push(3)
    numbers.push(3)
    numbers.push(3)
});

it('beforeEach is ran each time', () => {
    assert.strictEqual(numbers.length, 3)
})