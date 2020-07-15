//To select all li's
document.getElementsByTagName('li');

// To select all h1's (there's only one on this page):
document.getElementsByTagName('h1');
// HTMLCollection [h1.header]

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
inputs[0]; //this works
//inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!

//* we can spread it into an aray
const arrInputs = [...inputs];
// [input, input, input]


document.getElementsByTagName('h3');
// if element doesn't exists, it return an empty array-like object []