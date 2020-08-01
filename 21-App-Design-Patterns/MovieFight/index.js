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
    <label<b>Search for a movie</b></label>
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
    // console.log(movies);
    for (let movie of movies) {
        console.log(movie);
        const div = document.createElement('div');
        div.classList.add('suggestion');

        div.innerHTML = `
            <img src="${movie.Poster}">
            <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').append(div);
    }
};

// on each input change, pass our custom fetch action to debounce function
// seperating them makes debounce reusable for different stuff
input.addEventListener('input', debounce(onInput, 500));



