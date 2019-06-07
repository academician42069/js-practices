const person = {};

Object.defineProperties(person, {
    rate: {
        writable: true,
        enumerable: false,
        configurable: false,
    },
    salary: {
        get (){
            const date = new Date();
            if (this.rate === undefined){
                return 0;
            }
            else {
                return this.rate * date.getDate();
            }
        }
    }
});

person.rate = 30;
console.log(person.salary);