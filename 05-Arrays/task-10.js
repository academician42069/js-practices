var reverse = function (inputArray){
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the first paramenter is not an array');
    }
    else if (typeof(inputArray[0]) === 'undefined'){
        throw Error('the array should not be empty');
    }

    // Main logic
    let temp = 0;
    let i = 0;
    let j = inputArray.length - 1;
    while (i < j){
        temp = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = temp;
        i++;
        j--;
    }

    return(inputArray);
}

// Testing
console.log(reverse([1, 2, 3]));