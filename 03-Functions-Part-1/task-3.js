var f = function (num1, num2, num3) {
    for (let i of arguments) {
        if (typeof(i) !== 'number'){
            throw Error('all parameters type should be a Number');
        }
    }
    return ( (num1 - num2) / num3 );
}

console.log(f(9,3,2));
console.log(f('s',9,3));