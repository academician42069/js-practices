const person = {
    get salary () {
        const date = new Date();
        if (date.getDate() - 20 > 0){
            console.log('good salary');
        }
        else {
            console.log('bad salary');
        }
    },
}

person.salary;