const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {
//   first,
//   last,
//   time
// } = runner;
// "Eliud"
// "Kipchoge"
// undefined

const {
  country: nation,
  title: honorific
} = runner;
// nation is "Kennya"
// honorific "Elder of the Order of the Golden Heart of Kenya"

const {
  first,
  last,
  ...other
} = runner;
// first is "Eliud"
// last is "Kipchoge"
// other is an object { country: "Kenya", title: "Elder of the Order of the Golden Heart of Kenya" }