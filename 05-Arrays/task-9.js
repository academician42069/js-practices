var arrayFill = function (item, length){
    // Input validation
    if ( (typeof(item) !== 'number') && (typeof(item) !== 'string') ){
        throw Error('the first parameter is not a number or string');
    }
    if (typeof(length) !== 'number'){
        throw Error('the second parameter is not a number');
    }
    
    // Main logic
    const returnArray = [];

    for (let i = 0; i < length; i++){
        returnArray.push(item);
    }

    return returnArray;
}

// Testing
console.log(arrayFill('x', 5));