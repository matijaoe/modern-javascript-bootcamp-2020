// my alternative solutions

//* axios without async and await
// const fetchData = () => {
//     const response = axios.get('http://www.omdbapi.com/', {
//         params: {
//             apikey: 'ee59ae23',
//             s: 'avengers'
//         }
//     });
//     return response;
// }

// fetchData().then((response) => console.log(response.data));


//* fetch without async and await
// const fetchData = () => {
//     const response = fetch('http://www.omdbapi.com/?apikey=ee59ae23&s=avengers');
//     return response;
// }

// fetchData()
//     .then((response) => response.json())
//     .then(data => console.log(data));