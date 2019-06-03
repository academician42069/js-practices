const upperCaseFirst = function (string){
    if (typeof string !== 'string'){
        throw Error('the parameter is not a string');
    }

    const newString = string.replace(string.charAt(0), (string.charAt(0)).toUpperCase());

    // console.log(string.charAt(0));

    return newString;
}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));