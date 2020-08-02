const autoCompleteConfig = {
    // how to show individual item
    renderOption(movie) {
        const imgPlaceholder = 'https://semantic-ui.com/images/wireframe/image.png';
        const imgSrc = movie.Poster === 'N/A' ? imgPlaceholder : movie.Poster;
        console.log(movie);

        return `
            <img src="${imgSrc}">
            ${movie.Title} (${movie.Year})
        `;
    },

    // what to do when someone click on the item
    onOptionSelect(movie) {
        // fetch more elaborate movie details
        onMovieSelect(movie);
    },

    // what to backfill in the input when someobody clicks on the item
    inputValue(movie) {
        return movie.Title;
    },

    // how to fetch the data
    async fetchData(searchTerm) {
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
    }
};


// create left autocomplete widget
createAutocomplete({
    // where to render autocomplete to
    root: document.querySelector('#left-autocomplete'),
    // unpack all object properties and put it here
    ...autoCompleteConfig
});

// create right autocomplete widget
createAutocomplete({
    root: document.querySelector('#right-autocomplete'),
    ...autoCompleteConfig
});

// function to fetch elaborate data for the movie
const onMovieSelect = async movie => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'ee59ae23',
            i: movie.imdbID
        }
    });
    console.log(response.data);

    document.querySelector('.summary').innerHTML = movieTemplate(response.data);
};

// return HTML for movie stats
const movieTemplate = (movieDetail) => {
    // TODO fix Rotten tomatoes (The Gentlemen) - fixed but needs refactor
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
            <p class="title">${movieDetail.Ratings[1] ?
            movieDetail.Ratings[1].Source === 'Rotten Tomatoes' ?
                movieDetail.Ratings[1].Value : 'N/A' : 'N/A'}</p>
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

