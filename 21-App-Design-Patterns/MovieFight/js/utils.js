const debounce = (func, delay = 1000) => {
    let timeoutId;
    // set the timer on the first change, stop previous timer on every new change while also creating a new timer
    // at the end, only the last timer remains and fetches the complete data
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        };
        timeoutId = setTimeout(() => {
            // func.apply(null, args);
            func(...args);
        }, delay);
    };
};