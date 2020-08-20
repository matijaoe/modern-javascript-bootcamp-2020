async function getPlanets() {
	const res = await axios.get('https://swapi.dev/api/planets/');
	console.log(res.data); //only runs once the previous line is complete (the axios promise is resolved)
}

let p = getPlanets();
console.log(p);

// Without async/await...

// function getPlanets() {
// 	return axios.get('https://swapi.co/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data);
// });
