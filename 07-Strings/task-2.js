const checkSpam = function (source, example){
    if (typeof source !== 'string'){
        throw Error('the first parameter is not a string');
    }
    else if (typeof example !== 'string'){
        throw Error('the second parameter is not a string');
    }

    methodSource = source.toLowerCase();
    methodExample = example.toLowerCase();

    if (methodSource.indexOf(methodExample) !== -1){
        return true;
    }
    else {
        return false;
    }
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'xxx'));