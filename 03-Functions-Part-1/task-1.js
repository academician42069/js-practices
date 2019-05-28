var f = function(userNumber) {
    if (!(typeof(userNumber) === 'number')) {
        throw Error('parameter type is not a Number');
    }
    else {
        return (userNumber ** 3);
    }
}

console.log(f(3));
console.log(f('u'));