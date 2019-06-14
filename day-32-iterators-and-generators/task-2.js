class Customers {

    constructor(){
        this.customersArray = [];
    }

    add(usrObj){
        if (usrObj.name === undefined){
            throw Error ('field \'name\' must be provided')
        }
        else {
            this.customersArray.push(usrObj);
        }
    }

    *[Symbol.iterator]() {
        for (let customer of this.customersArray){
            if (customer.verified === true){
                yield customer;
            }
        }
    }

}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
