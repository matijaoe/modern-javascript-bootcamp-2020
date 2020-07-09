let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false
nums == mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK! - bcs empty array is a new place in memory so they are refering to different parts of memory
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}
//or
if (user.notifications.length === 0) {
	console.log('NO NEW NOTIFICATIONS!');
}
