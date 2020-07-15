const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

// The old way: 
// Make the object
// const team = {};
// Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

// USING COMPUTED PROPERTIES!
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}
// {16: "sixteen", host: "Jools Holland", Director: "James Cameron"}

// function addProp(obj, k, v) {
//   const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   }
// }

// arrow function with implicit return
// we're returning an object so we gotta wrap it in paranthesis cos js thinks it's a block ({})
const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v
})

const res = addProp(team, 'happy', ':)')
// {16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}
// team stayed unchanged btw