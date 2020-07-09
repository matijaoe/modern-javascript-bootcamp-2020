const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

// they are seperate unique references
const catDogClone = {
  ...catDog
}



const random = [...'hello', {
  ...catDog
}]


// if we try to spread object into an array
// const dogClone = [...dog] // ERROR - object is not iterable

// if we try to spread array into an object
// {...[4,5,6]} // {0: 4, 1: 5, 2: 6} - we gat key:value pairs based off the indexes

// same with strings
// {...'abcdefg'} // {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g"}