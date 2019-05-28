var array = [1, 2, -4, 3, -9, -1, 7];
var newArray = [];

var isPositive = function(number){
    if (typeof(number) !== 'number'){
        throw Error('parameter type is not a Number');
    }
    if (number > 0 ){
        return true;
    }
    else {
        return false;
    }
}

for (let i of array){
    if (isPositive(i)){
        newArray.push(i);
    }
}

console.log(newArray);