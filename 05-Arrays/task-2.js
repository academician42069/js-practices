const arr = [1, 2, 3];

var filter = function(inputArray, callBack) {
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the first paramenter is not an array');
    }
    if (typeof(callBack) !== 'function'){
        throw Error('the second parameter is not a function');
    }

    var filteredArray = [];

    // Main logic
    for (let i = 0; i < inputArray.length; i++){
        if (callBack(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return (filteredArray);
}

// Testing
console.log(filter(arr, function(number){
    return number > 1;
}));

console.log(arr.filter(function(number) {
    return number > 1;
}));