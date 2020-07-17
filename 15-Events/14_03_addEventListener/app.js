const btn = document.querySelector('button');

btn.addEventListener('click', function () {
	alert('CLICKED!!!');
});

btn.addEventListener('click', function () {
	console.log('SECOND THING!!');
});
// with btn.onclick, you can only assign one function (last one)


// without mouseout it would stay the same,wouldn't change back to default
btn.addEventListener('mouseover', function () {
	btn.innerText = 'STOP TOUCHING ME';
});

btn.addEventListener('mouseout', function () {
	btn.innerText = 'Click me pls man...';
});

window.addEventListener('scroll', function () {
	console.log('STOP SCROLLING!!');
});

window.addEventListener('fullscreenchange', () => {
	document.body.style.color = 'blue';
})