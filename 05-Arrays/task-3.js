const arr = [1, 2, 3];

var every = function(inputArray, callBack) {
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the first paramenter is not an array');
    }
    if (typeof(callBack) !== 'function'){
        throw Error('the second parameter is not a function');
    }

    let isValid = true;

    // Main logic
    for (let i of inputArray){
        if (!callBack(i)){
            isValid = false;
        }
    }

    return isValid;
}

// Testing
console.log(arr.every(function (n) {
    return (n > 1);
}));

console.log(arr.every(function (n) {
    return (n > 1);
}));