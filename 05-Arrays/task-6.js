const arr = [1, 2, 3];

var reduceRight = function(inputArray, callBack, initialValue) {
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the first paramenter is not an array');
    }
    if (typeof(callBack) !== 'function'){
        throw Error('the second parameter is not a function');
    }
    if ( (typeof(initialValue) !== 'number') && (typeof(initialValue) !== 'string') ){
        throw Error('the third parameter is not a number or string');
    }

    let accumulator = initialValue;

    // Main logic
    for (let i = inputArray.length - 1; i >= 0; i--){
        accumulator = callBack(accumulator, arr[i]);
    }

    return accumulator;
}

// Testing
console.log(reduceRight (arr, function (sum, current){
    return (sum + current)
}, 0));

console.log(arr.reduceRight(function (sum, current){
    return (sum + current)
}, 0));