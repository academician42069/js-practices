var getDivisors = function(number){
    if (typeof(number) !== 'number'){
        throw Error('parameter type is not a Number');
    }
    else if (number === 0){
        throw Error('parameter can\'t be a 0');
    }
    var divisorArray = [];
    for (let i = 1; i <= number; i++){
        if (number % i === 0){
            divisorArray.push(i);
        }
    }
    return (divisorArray);
}

console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));