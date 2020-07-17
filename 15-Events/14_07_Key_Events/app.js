const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
	console.log('KEY DOWN!');

});

input.addEventListener('keyup', function (e) {
	console.log('KEY UP!');
});

// ANY key(except Shift, Fn, or CapsLock) is in pressed position.
//! Deprecated
input.addEventListener('keypress', function (e) {
	console.log('KEY PRESS!');
	// console.log(e);
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (!this.value) return; //if input is empty, skip everything

		// clear all list items (i added this)
		if (this.value.toLowerCase() === 'clear') {
			this.value = '';
			itemsUL.innerHTML = '';
			return;
		}

		//add a new item to list
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUL.appendChild(newItem);
		this.value = '';

	}
});
