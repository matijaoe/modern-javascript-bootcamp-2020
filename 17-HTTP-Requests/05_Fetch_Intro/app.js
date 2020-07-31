// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

// Fetch returns a promise (pending, resolved, rejected)
// fetch('https://swapi.dev/api/planetsuyu/')
// 	.then((response) => {
// 		// catches 404's
// 		if (!response.ok)
// 		// throws error so catch catches it
// 			throw new Error(`Status Code Error: ${response.status}`);

// 		// second returned promise, we read it with json() 
// 		response.json().then((data) => {
// 			for (let planet of data.results) {
// 				console.log(planet.name);
// 			}
// 		});
// 	})
// 	// does not catch 404 or 500, only network errors and such
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});


// Fetch returns a promise (pending, resolved, rejected)
fetch('https://swapi.dev/api/planets/')
	.then((response) => {
		// catches 404's
		if (!response.ok)
			// throws error so catch catches it
			throw new Error(`Status Code Error: ${response.status}`);

		// second returned promise, we read it with json() 
		return response.json()
	})
	.then((data) => {
		for (let planet of data.results) {
			console.log(planet.name);
		}
	})
	// does not catch 404 or 500, only network errors and such
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
