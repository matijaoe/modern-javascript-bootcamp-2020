// ********************************
// CHAINING REQUESTS USING AXIOS
// ********************************
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
// destructure the response to just the data
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	// value in parentshesis will be passed intro next .then() calback, which is fetchNextPlanets(...)
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});

// ********************************
// USING FETCH
// ********************************
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});


//* trying stuff out on my own

// axios.get('https://swapi.dev/api/planets/')
// 	.then(({ data }) => {
// 		let firstPlanet = data.results[0]
// 		return Promise.resolve(firstPlanet)
// 	})
// 	.then(planet => {
// 		console.log(planet);
// 		return axios.get(planet.residents[0]);
// 	})
// 	.then(({ data: resident }) => {
// 		console.log(resident.name);
// 	});