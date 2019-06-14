const isCustomerVerified = (customer) => {
    return new Promise((resolve, reject) => {
        if (customer.verified === true){
            resolve('true');
        }
        else {
            reject('Customer is not verified');
        }
    })
};

const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified
