const createAutocomplete = ({
    root,
    renderOption,
    onOptionSelect,
    inputValue,
    fetchData
}) => {

    // create HTML for autocomplete widget
    root.innerHTML = `
    <input class="input" placeholder="Search">
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;

    // get elements from HTML root
    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.results');

    // action to do after getting whole value of input
    const onInput = async event => {
        const items = await fetchData(event.target.value);

        // clear data on new input
        resultsWrapper.innerHTML = '';

        // if no items found
        if (!items.length) {
            dropdown.classList.remove('is-active');
            return;
        }

        // open the dropdown
        dropdown.classList.add('is-active');

        for (let item of items) {
            const option = document.createElement('a');

            option.classList.add('dropdown-item');
            // generate HTML for the option
            option.innerHTML = renderOption(item);

            option.addEventListener('click', () => {
                dropdown.classList.remove('is-active');
                input.value = inputValue(item);

                // fetch more elaborate details
                onOptionSelect(item);
            });


            //TODO open first option on enter, works onyl the first time
            // input.addEventListener('keyup', e => {
            //     if (e.keyCode === 13) {
            //         if (dropdown.classList.contains('is-active')) {
            //             dropdown.classList.remove('is-active');
            //             input.value = inputValue(item);

            //             // fetch more elaborate details
            //             onOptionSelect(item);
            //         }
            //     }
            // });

            resultsWrapper.append(option);
        }
    };

    // on each input change, pass our custom fetch action to debounce function
    input.addEventListener('input', debounce(onInput, 500));



    // TODO make it work for touch events


    document.addEventListener('click', event => {
        // close the dropdown when clicked outside root
        if (!root.contains(event.target)) {
            dropdown.classList.remove('is-active');
        } else if (input.contains(event.target)) {
            // reopen the dropdown when clicking on input if dropdown has data
            if (resultsWrapper.querySelector('a')) {
                dropdown.classList.add('is-active');
            };
        }
    });
};