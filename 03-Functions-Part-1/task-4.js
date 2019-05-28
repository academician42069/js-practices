var f = function(userInput) {
    if (typeof(userInput) !== 'number'){
        throw Error('parameter type is not a Number');
    }
    switch (userInput){
        case 1:
            return ("ორშაბათი");
            break;
        case 2:
            return ("სამშაბათი");
            break;
        case 3:
            return ("ოთხშაბათი");
            break;
        case 4:
            return ("ხუთშაბათი");
            break;
        case 5:
            return ("პარასკევი");
            break;
        case 6:
            return ("შაბათი");
            break;
        case 7:
            return ("კვირა");
            break;
        default:
            throw Error('parameter should be in the range of 1 to 7');
    }
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));