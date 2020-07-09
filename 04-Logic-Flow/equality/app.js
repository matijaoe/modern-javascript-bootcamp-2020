let password = "pero 13";

if (password.length >= 6) {
    // checks if it contiains spaces, returns -1 if no
    if (password.indexOf(" ") === -1) {
        console.log("Valid password");
    } else {
        console.log("Password is long enough, but cannot contain spaces!");
    }
} else {
    console.log("Password must be longer!");
}