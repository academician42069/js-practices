var array = [1, 2, 3];

var f = function(argArray){
    if (!Array.isArray(argArray)){
        throw Error('parameter type should be an array');
    }
    if (argArray.length === 0){
        throw Error('parameter can\'t be an empty');
    }

    console.log(argArray)
}

f([1,2,3]);
f(1,2,3);
f([]);