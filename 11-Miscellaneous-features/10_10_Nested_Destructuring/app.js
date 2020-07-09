const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]

//* NESTED DESTRUCTURING
const [{
  first: goldWinner
}, {
  country
}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"

// way without nesting
const [, silverMedal] = results; // gets 2nd object from results
const { country2 } = silverMedal; // "Ethiopia"
// or if we want a custom name, pass in key: custom-name
const { country: nation } = silverMedal; // "Ethiopia"