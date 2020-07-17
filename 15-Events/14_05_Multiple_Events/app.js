const colors = [
	'red',
	'orange',
	'goldenrod',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];

const changeColor = function () {
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;

	// I added
	h1.innerText = this.style.backgroundColor;
	document.body.style.backgroundColor = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	// event is passed in the changeColor function
	box.addEventListener('click', changeColor);
}
