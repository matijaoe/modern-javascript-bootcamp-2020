const assert = require('assert');
const { getMaxListeners } = require('process');

it('has a text input', async () => {
    const dom = await render('index.html');


    const input = dom.window.document.querySelector('input');

    // throws an error if falsy
    assert(input, 'Expected to find a text input');
});

it('shows a success message for a valid email', async () => {
    // made it wait till entire html, including its scripts, was loaded
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');
    input.value = 'marcus.aurelius@gmail.com';
    // trigger a submit event (cos changing input value is JS doesn't trigger events)
    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');

    assert.strictEqual(h1.innerHTML, 'Looks good!')
});

it('shows a fail message for an invalid email', async () => {
    // made it wait till entire html, including its scripts, was loaded
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');
    input.value = 'notgood';
    // trigger a submit event (cos changing input value is JS doesn't trigger events)
    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');

    assert.strictEqual(h1.innerHTML, 'Invalid email')
});