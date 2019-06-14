class Customers {

    constructor(){
        this.customersArray = [];
        let value;
        let done = false;
    }

    add(usrObj){
        if (usrObj.name === undefined){
            throw Error ('field \'name\' must be provided')
        }
        else {
            this.customersArray.push(usrObj);
        }
    }

    [Symbol.iterator]() {
        const verifiedCustomers = this.customersArray.filter(value => {
            return value.verified === true;
        });
    
        let value;
        let done;
        let index = 0;

        return {
            next(){
                value = verifiedCustomers[index];
                index++;
                done = index <= verifiedCustomers.length ? false : true;

                return {
                    value,
                    done,
                }
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
