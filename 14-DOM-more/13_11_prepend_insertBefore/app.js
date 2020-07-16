const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'I AM A NEW LIST ITEM!';

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI) //Doesn't work in IE!
//they can add multiple elements, and innerText as a string
parentUL.append(newLI) 
parentUL.append('bjlsdKLJBS')

// can add only one element
parentUL.appendChild(newLI) 


//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll('li.todo')[2] //3rd li with class of 'todo'

// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);
// newLI.parentElement.insertBefore(newLI, targetLI);




const secondLi = parentUL.children[1];
// it moves the existing element, it does not create another one just like it
parentUL.prepend(secondLi);



const i  = document.createElement('i');
i.innerText = 'I AM ITALICS!!!'

const firstP = document.querySelector('p');
firstP.insertAdjacentElement('beforebegin', i); // right before the elemtent (as parent.insertBefore())
firstP.insertAdjacentElement('afterbegin', i); // first inside the element (as prepend())
firstP.insertAdjacentElement('beforeend', i); // last inside the element (as append())
firstP.insertAdjacentElement('afterend', i); // right after the element (as parent.append())

