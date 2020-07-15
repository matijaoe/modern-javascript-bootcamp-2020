// To select all elements with the class of 'special':
document.getElementsByClassName('special');

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName('special');
for (let el of specials) {
  console.log(el);
}


const ul = document.getElementsByTagName('ul')[0];
// we can narrow within
ul.getElementsByClassName('special');
ul.getElementsByTagName('li');

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop() //this works because it's now an array!