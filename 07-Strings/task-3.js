const truncate = function (string, maxlength){
    if (typeof string !== 'string'){
        throw Error('the first parameter is not a string');
    }
    else if (typeof maxlength !== 'number'){
        throw Error('the second parameter is not a number');
    }

    if (string.length <= maxlength){
        return string;
    }
    else {
        const truncatedString = string.substring(0, maxlength - 3).concat('...');
        return (truncatedString);
    }
}

console.log(truncate('I wanna to say next thing about this topic', 22));