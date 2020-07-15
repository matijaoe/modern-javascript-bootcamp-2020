const h1 = document.querySelector('h1');
const li = document.querySelector('li');

// style property only contains INLINE styles...
// Even though we gave the h1 a purple color, we still get:
h1.style.color; // "" 
// Same with any property we did not set inline:
h1.style.fontSize; // ""

// We can use getComputedStyle to figure out the ACTUAL styles that are applying:

console.log(getComputedStyle(li));

const compStyles = getComputedStyle(h1);

h1.style.color; // ""
compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
compStyles.getPropertyValue('color');

//h1.style.color = 'salmon'
//h1.setAttribute('style', 'color: orangered'); // dont use this for styles tho

h1.style.transition = 'all 400ms';
compStyles.transition; // "all 0.4s ease 0s"
compStyles.getPropertyValue('transition'); // "all 0.4s ease 0s"


compStyles.fontSize; //"60px"
compStyles.getPropertyValue('font-size'); //"60px"


//mdn window.getComputedStyle;