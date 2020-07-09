// ======= EXAMPLE 1 ==========
// Printing each element in an array
const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

// ======= EXAMPLE 2 ==========
// Same idea, but with a more complex array
const myStudents = [
	{
		firstName : 'Zeus', 
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}

// ======= EXAMPLE 3 ==========
// Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade; //add each grade to total
}
console.log(total / myStudents.length); //divide by number of students

// ======= EXAMPLE 4 ==========
// Reversing a string
const word = 'stressed';

let reversedWord = ''; //will hold reversed string

//Loop backwards over the string
for (let i = word.length - 1; i >= 0; i--) {
	reversedWord += word[i]; //add each char to reversedWord
}

console.log(reversedWord);
