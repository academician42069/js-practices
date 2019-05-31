var f = function (inputArray){
    // Input validation
    if (!Array.isArray(inputArray)) {
        throw Error('the paramenter is not an array');
    }

    // Main logic
    let fArray = [];
    let sum = 0;

    for (let i of inputArray){
        if (Array.isArray(i)){
            fArray = inputArray.flat();
            console.log(fArray);
        }
    }

    for (let i of fArray){
        sum += i;
    }

    return sum;
}

f([[2], 3]);