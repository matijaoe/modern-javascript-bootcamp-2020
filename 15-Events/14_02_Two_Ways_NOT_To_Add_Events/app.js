// ***********************************
// Two ways NOT to add event handlers
// ***********************************

// **********************************
// Inline - take a look at index.html
// **********************************
// Check out index.html to see an example

// **********************************
// Via JS - setting the onclick property
// **********************************

// Select an element:
const btn = document.querySelector('#clicker');

// Set the onclick property to a function:
// dont just do 
// btn.onclick = alert('HIIII')
// because it will add this value to btn property (but will store undefined) and execute the command on load

// You can use an existing function: (not that common)
// btn.onclick = greet; 

// Or use an anonymous function (more common)
btn.onclick = () => {
  console.log('YOU CLICKED ME UGHHHH!!');
}
// it can have multiple events at once
btn.ondblclick = () => {
  console.log('DOUBLE KLICK');
}

function greet() {
  alert('HEY BUDDY!')
}
