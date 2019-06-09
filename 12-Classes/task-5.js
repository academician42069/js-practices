class Validator {

    isEmail(usrString) {
        if (usrString.match(/^(\w+\b@)(\w+\b\.)(\w+)/gm)) {
            return true;
        }
        else {
            return false;
        }
    }

    isDomain(usrString) {
        if (usrString.match(/^\w+\b\.\w+/gm)){
            return true;
        }
        else {
            return false;
        }
    }

    isDate(usrString) {
        if (usrString.match(/^(\d{2})\.(\d{2})\.(\d{4})/gm)){
            return true;
        }
        else {
            return false;
        }
    }

    isPhone(usrString) {
        if (usrString.match(/^(\+\d{3})\s(\(\d{2}\))\s(\d{3}\-\d{2}\-\d{2})/gm)){
            return true;
        }
        else {
            return false;
        }
    }

}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country