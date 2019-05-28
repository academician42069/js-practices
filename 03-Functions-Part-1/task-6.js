var isEven = function (number){
    if (typeof(number) !== 'number'){
        throw Error('parameter type is not a Number');
    }
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));