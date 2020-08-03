const autoCompleteConfig = {
    // how to show individual item
    renderOption(movie) {
        const imgPlaceholder = 'https://dummyimage.com/45x60/f5f5f5.png';
        const imgSrc = movie.Poster === 'N/A' ? imgPlaceholder : movie.Poster;

        return `
            <img src="${imgSrc}">
            ${movie.Title} (${movie.Year})
        `;
    },

    // what to backfill in the input when someobody clicks on the item
    inputValue(movie) {
        return movie.Title;
    },

    // how to fetch the data
    async fetchData(searchTerm) {
        const response = await axios.get('https://www.omdbapi.com/', {
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

    // what to do when someone click on the item
    onOptionSelect(movie) {
        // fetch more elaborate movie details
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
        document.querySelector('.tutorial').classList.add('is-hidden');
    },

    // unpack all object properties and put it here
    ...autoCompleteConfig
});

// create right autocomplete widget
createAutocomplete({
    root: document.querySelector('#right-autocomplete'),
    onOptionSelect(movie) {
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
        document.querySelector('.tutorial').classList.add('is-hidden');
    },
    ...autoCompleteConfig
});

let leftMovie;
let rightMovie;
// function to fetch elaborate data for the movie
const onMovieSelect = async (movie, summaryElement, side) => {
    const response = await axios.get('https://www.omdbapi.com/', {
        params: {
            apikey: 'ee59ae23',
            i: movie.imdbID
        }
    });
    // print to console data for the movie
    console.log(`%c${response.data.Title} (${response.data.Year})`, 'font-size: 18px', response.data);

    summaryElement.innerHTML = movieTemplate(response.data);

    if (side === 'left') {
        leftMovie = response.data;
    } else if (side === 'right') {
        rightMovie = response.data;
    }

    // run comparison when both movies are defined
    if (leftMovie && rightMovie) {
        runComparison();
    }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification');
    const rightSideStats = document.querySelectorAll('#right-summary .notification');

    leftSideStats.forEach((leftStat, index) => {
        const rightStat = rightSideStats[index];

        const leftSideValue = +leftStat.dataset.value;
        const rightSideValue = +rightStat.dataset.value;

        if (leftSideValue > rightSideValue) {

            // remove leftovers
            leftStat.classList.remove('is-danger');
            rightStat.classList.remove('is-success');

            leftStat.classList.add('is-success');
            rightStat.classList.add('is-danger');

        } else if (leftSideValue < rightSideValue) {

            leftStat.classList.remove('is-success');
            rightStat.classList.remove('is-danger');

            leftStat.classList.add('is-danger');
            rightStat.classList.add('is-success');
        } else {
            leftStat.classList.remove('is-danger');
            leftStat.classList.remove('is-primary');
            rightStat.classList.remove('is-primary');
            rightStat.classList.remove('is-danger');
        }

    });
}

// return HTML for movie stats
const movieTemplate = (movieDetail) => {

    let rottenTomatoes = 'N/A';
    if (movieDetail.Ratings[1]) {
        if (movieDetail.Ratings[1].Source === 'Rotten Tomatoes') {
            rottenTomatoes = movieDetail.Ratings[1].Value;
        }
    };

    let dollars;
    if (movieDetail.BoxOffice) {
        dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    }

    const metascore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));
    const rottenTomatoesRating = parseInt(rottenTomatoes);

    const awards = movieDetail.Awards.split(' ').reduce((total, curr) => {
        let value = parseInt(curr);
        if (isNaN(value)) {
            return total;
        }
        return total + value;
    }, 0);

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
                    <span class="tag is-primary is-light is-medium">${movieDetail.Year}</span>
                        <span class="tag is-link is-light is-medium">${movieDetail.Country.split(',')[0]}</span> 
                        <span class="tag is-danger is-light is-medium">${movieDetail.Rated}</span>
                    </h6>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>

        <article data-value=${awards} class="notification is-light">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${dollars} class="notification is-light">
            <p class="title">${movieDetail.BoxOffice || 'N/A'}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article data-value=${metascore} class="notification is-light">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article data-value=${rottenTomatoesRating} class="notification is-light">
            <p class="title">${rottenTomatoes}</p>
            <p class="subtitle">Rotten Tomatoes</p>
        </article>
        <article data-value=${imdbRating} class="notification is-light">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value=${imdbVotes} class="notification is-light">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMBD Votes</p>
        </article>
    `;
};

