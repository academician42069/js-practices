const arr = [1, 2, 3];

var forEach = function(inputArray, callBack) {
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the first paramenter is not an array');
    }
    if (typeof(callBack) !== 'function'){
        throw Error('the second parameter is not a function');
    }

    // Main logic
    for (let i = 0; i < inputArray.length; i++){
        callBack(arr[i], i, arr);
    }
}

// Testing
console.log(forEach(arr, function(item, index, array){
    console.log(item, index, array);
}));