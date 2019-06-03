const extractCurrencyValue = function (source){
    if (typeof source !== 'string'){
        throw Error('the first parameter is not a string');
    }

    return Number.parseInt(source.substring(1));
}

console.log(extractCurrencyValue('$120'));