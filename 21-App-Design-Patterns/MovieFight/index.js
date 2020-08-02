// fetch and return movies by given search term
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

// create HTML for autocomplete widget
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

// get elements from HTML
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

// action to do after getting whole value of input
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

            // fetch more elaborate movie details
            onMovieSelect(movie);
        });

        resultsWrapper.append(option);
    }
};

// on each input change, pass our custom fetch action to debounce function
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

// function to fetch elaborate data for the movie
const onMovieSelect = async movie => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'ee59ae23',
            i: movie.imdbID
        }
    });
    console.log('Movie: ', response.data);

    document.querySelector('.summary').innerHTML = movieTemplate(response.data);
};

// returns HTML for movie stats
const movieTemplate = (movieDetail) => {
    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}" alt="Movie Poster">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <h6>
                        <span>${movieDetail.Country.split(',')[0]}</span>, 
                        <span>${movieDetail.Year}</span>
                    </h6>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.BoxOffice || 'idk tbh 🤷‍♂️'}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Ratings[1] ? movieDetail.Ratings[1].Value : 'N/A'}</p>
            <p class="subtitle">Rotten Tomatoes</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMBD Votes</p>
        </article>
    `;
};