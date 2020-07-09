// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr) {
    let total = 0;
    // loop over each number in array
    for (let n of arr) {
        // add each to total
        total += n;
    }
    // calculate average 
    let average = total / arr.length;
    return average;
}
