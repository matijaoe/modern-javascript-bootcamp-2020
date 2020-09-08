// wait until the given element appears
const waitFor = (selector) => {
    return new Promise((resolve, reject) => {
        // every 30ms check if element has appeared
        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval)
                clearInterval(timeout)
                resolve();
            }
        }, 30);

        // if element doesn't appear after 2000ms, reject the promise
        const timeout = setTimeout(() => {
            clearInterval(interval)
            reject();
        }, 2000);
    })
}

// Sets up testing environment for every single test
beforeEach(() => {
    // reset the autocomplete widget and create a new one from scratch
    document.querySelector('#target').innerHTML = '';
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Not Avengers' },
                { Title: 'Some other movie' }
            ]
        },
        renderOption(movie) {
            return movie.Title;
        }
    })
})

it('Dropdown starts closed', () => {
    const dropdown = document.querySelector('.dropdown');

    // chai.js
    expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', async () => {
    const input = document.querySelector('input');
    input.value = 'avengers'
    // trigger an event (just changing value doesn't trigger any events)
    input.dispatchEvent(new Event('input'));

    await waitFor('.dropdown-item');

    const dropdown = document.querySelector('.dropdown');

    expect(dropdown.className).to.include('is-active');
});

it('After searching, display some results', async () => {
    const input = document.querySelector('input');
    input.value = 'avengers'
    input.dispatchEvent(new Event('input'));

    await waitFor('.dropdown-item');

    const items = document.querySelectorAll('.dropdown-item');

    expect(items.length).to.equal(3);
})  