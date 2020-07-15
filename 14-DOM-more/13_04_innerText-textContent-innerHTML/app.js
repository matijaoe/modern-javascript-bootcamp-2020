const ul = document.querySelector('ul');
// ul.innerText = 'I changed everthing';
// ul.textContent = 'ul text'
// ul.innerHTML = '<li>INNER HTML LIST ITEM</li>';

const p = document.querySelector('#main');

//* property of HTMLElement
console.log(p.innerText);
// "rendered" text content of a node and its descendants
// as if user highlightes the text with the cursor

//* property of Node
console.log(p.textContent);
// preserves whitespace but ignores <br>, acts like <pre>
// shows hidden content, i.e something with display:none 
// gets the content of all elements, including <script> and <style> elements


const form = document.querySelector('form');


form.innerHTML; // returns all HTML as a string
form.innerText; // only the text, without extra whitespace
form.textContent; // the text with bunch of whitespace


// form.innerHTML = '<b>I am a bold tag!</b>';
form.innerHTML; // <b>I am a bold tag!</b>
form.innerText; // I am a bold tag!
form.textContent; // I am a bold tag!


const h1 = document.querySelector('h1');

h1.innerHTML += ' is cool';
h1.innerText += ' !!';
h1.innerHTML += '<em> hehe</em>'

// ACCESSING ATTRIBUTES
const inputs = document.querySelectorAll('input');

// text
inputs[0].value;

//password
inputs[1].value; // shows the password value
inputs[1].placeholder = 'psswrd pls';

// checkbox
inputs[2].value; // always on 
inputs[2].checked; // true / false

// range
inputs[3].value; // changes based on slider position


const a = document.querySelector('a');
a.href;
a.href = 'http://www.google.com'

const img = document.querySelector('img');
img.src;


const range = document.querySelector('input[type="range"]');
range.max; // 500
range.getAttribute('max'); // 500
range.getAttribute('type'); // range
range.getAttribute('lolol'); // null

range.setAttribute('min', -500);
range.setAttribute('type', 'radio'); // changes the element
range.setAttribute('type', 'range');
range.setAttribute('dunno', 'whatever'); // still gets added

//! use setAttribute only for non-defined (non-standard) properties, and must retrieve them with getAttribure if they aren't pre-defined



const firstLi = document.querySelector('li');

// parentElement
firstLi.parentElement.style.background = 'lavender'; // access parent element

firstLi.parentElement.parentElement; // body
firstLi.parentElement.parentElement.parentElement; // html
firstLi.parentElement.parentElement.parentElement.parentElement; // null


// children
ul.children;
ul.children[0].innerText; // "First Thing"

// nextElementSibling
firstLi.nextElementSibling;
const thirdLi = firstLi.nextElementSibling.nextElementSibling;

// previousElementSibling
thirdLi.previousElementSibling;


/* previousSibling returns the previous sibling node as an element node, a text node or a comment node, while previousElementSibling returns the previous sibling node as an element node (ignores text and comment nodes). */
