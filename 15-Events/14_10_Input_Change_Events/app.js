const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const formData = {};

// ONE callback works for any number of inputs!!
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
	// destructured event object cos we only need his target obj
	//// input.addEventListener('change', ({ target }) => {
	input.addEventListener('input', ({ target }) => {
		// we added name in html so we can can use target.name property as a key
		// destructured target object with only the keys we need
		const { name, type, value, checked } = target;

		// create key with name and value based on e.target.type (destructured)
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}

// first, worse version
// for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
// 	input.addEventListener('input', e => {
// 		formData[e.target.name] = e.target.type === 'checkbox'
// 			? e.target.checked
// 			: e.target.value;
// 		console.log(formData);
// 	});
// }

//We could use hard-coded callbacks:
// creditCardInput.addEventListener('input', (e) => {
// 	console.log('CC CHANGED!', e);
// 	//formData['cc'] = creditCardInput.value;
// 	formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('VEGGIE!', e);
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('CHECKBOX', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });
