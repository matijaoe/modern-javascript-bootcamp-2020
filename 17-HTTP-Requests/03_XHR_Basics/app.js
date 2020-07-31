const firstReq = new XMLHttpRequest();

/* can't be arrow function bcs it wont reference the correct this */
firstReq.addEventListener('load', function () {
	console.log('IT WORKED!!!');
	const data = JSON.parse(this.responseText);
	for (let planet of data.results) {
		console.log(planet.name);
	}
});

firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');

cč
