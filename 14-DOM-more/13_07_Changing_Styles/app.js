
const h1 = document.querySelector('h1');
const p = document.querySelector('p');


// we can not read styles (each is empty string), unless we already defined them in javascript or inline
console.log(h1.style.color); // teal
console.log(h1.style.backgroundColor); // ''

// Change styles
h1.style.color = 'coral';
h1.style.backgroundColor = 'snow' //camel cased! (not background-color but backgroundColor)

p.style.color = 'white';
p.style.backgroundColor = 'navy';
p.style.background = 'black';
p.style.borderRadius = '8px';
p.style.padding = '1em';
p.style.fontSize = '20px';

document.body.style.fontFamily = 'Helvetica';

// Changing Multiple Elements:
const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLis.forEach((li, i) => {
  const color = colors[i];
  // const color = colors[Math.floor(Math.random() * colors.length)];
  li.style.color = color;
})