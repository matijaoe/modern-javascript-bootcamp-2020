const { forEach, map } = require('./index');
const assert = require('assert').strict;

const test = (desc, fn) => {
    console.log('----', desc);

    try {
        fn();
    } catch (error) {
        console.error(error.message);
    }
};

test('The forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], value => {
        sum += value;
    })

    // message is optional
    assert.strictEqual(sum, 6, 'Expected forEach to sum the array')

    // if (sum !== 6) throw new Error('Expected summing array to equal 6');
});

test('The map function', () => {
    const result = map([1, 2, 3], value => {
        return value * 2;
    });

    assert.deepStrictEqual(result, [2, 4, 6])

});


