const arr = [1, 2, 3];

var some = function(inputArray, callBack) {
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the first paramenter is not an array');
    }
    if (typeof(callBack) !== 'function'){
        throw Error('the second parameter is not a function');
    }

    let isValid = false;

    // Main logic
    for (let i of inputArray){
        if (callBack(i)){
            isValid = true;
            break;
        }
    }

    return isValid;
}

// Testing

console.log(some(arr, function (n) {
    return (n === 2);
}));

console.log(arr.some(function (n) {
    return (n === 2);
}));