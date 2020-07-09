// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

isValidPassword('89Fjj1nms', 'dogLuvr');  //true
isValidPassword('dogLuvr123!', 'dogLuvr') //false
isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword(password, username) {
    if (
        password.length < 8 ||
        password.includes(' ') ||
        password.includes(username)) {
        return false;
    }
    return true;
}

// alternative solution
function isValidPassword(password, username) {
    return !(
        password.length < 8 ||
        password.includes(' ') ||
        password.includes(username)) || false
}

// alternative solution 2
function isValidPassword(password, username) {
    return !(
        password.length < 8 ||
        password.includes(' ') ||
        password.includes(username));
}

// alternative solution 3
function isValidPassword(password, username) {
    return (
        password.length < 8 ||
        password.includes(' ') ||
        password.includes(username))
        ? false
        : true;
}


// my way of official solution
function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.includes(' ');
    const tooSimilar = password.includes(username);
    return !(tooShort || hasSpace || tooSimilar);
}

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !(tooShort || hasSpace || tooSimilar);
}


