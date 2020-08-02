const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'ee59ae23',
            s: searchTerm
        }
    });

    if (response.data.Error) {
        console.log('No movies found');
        return [];
    }

    return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
    <label><b>Search for a movie</b></label>
    <input class="input">
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;



const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
    const movies = await fetchData(event.target.value);

    // clear data on new input
    resultsWrapper.innerHTML = '';

    // if no movies found
    if (!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }

    // open the dropdown
    dropdown.classList.add('is-active');

    
    console.log(movies[0]);
    for (let movie of movies) {
        const option = document.createElement('a');

        const placeholderImg = 'https://semantic-ui.com/images/wireframe/image.png';
        const imgSrc = movie.Poster === 'N/A' ? placeholderImg : movie.Poster;


        option.classList.add('dropdown-item');
        option.innerHTML = `
            <img src="${imgSrc}"/>
            ${movie.Title.trim()}
        `;

        option.addEventListener('click', () => {
            dropdown.classList.remove('is-active');
            input.value = movie.Title;
        })

        resultsWrapper.append(option);
    }
};

// on each input change, pass our custom fetch action to debounce function
// seperating them makes debounce reusable for different stuff
input.addEventListener('input', debounce(onInput, 500));

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


