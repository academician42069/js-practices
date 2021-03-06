class DB {
    
    constructor(){
        this.usrMap = new Map();
    }
    
    create(usrObject){
        // Object validation
        let {name, age, country, salary} = usrObject;
        
        if ( (typeof name !== 'string') || (name === undefined) ){
            throw Error ('name should be a string')
        }
        
        if ( (typeof age !== 'number') || (age === undefined) ){
            throw Error ('age should be a number')
        }
        
        if ( (typeof country !== 'string') || (country === undefined) ){
            throw Error ('country should be a string')
        }
        
        if ( (typeof salary !== 'number') || (salary === undefined) ){
            throw Error ('salary should be a number')
        }

        let usrID = name.concat(age);

        this.usrMap.set(usrID, usrObject);

        return usrID;
    }

    read(usrID){
        if (typeof usrID !== 'string'){
            throw Error ('the parameter must be a valid user ID (string)')
        }

        let usr = this.usrMap.get(usrID);

        if (usr === undefined){
            return null;
        }
        else {
            usr.id = usrID;
            return usr;
        }
    }

    readAll(dummy){
        if (dummy !== undefined){
            throw Error ('It is forbidden to pass the argument.');
        }
        let returnArray = [];
        this.usrMap.forEach((value) => returnArray.push(value));
        return returnArray;
    }

    update(usrID, updateObj){
        if ( (usrID === undefined) || (updateObj === undefined) ){
            throw Error ('you must pass both the ID and the object')
        }

        if (typeof usrID !== 'string'){
            throw Error ('the ID must be a string');
        }

        if (typeof updateObj !== 'object'){
            throw Error ('you must provide an object with which to update the user');
        }

        if (!this.usrMap.has(usrID)){
            throw Error ('the user with this ID does not exist');
        }

        let usr = this.usrMap.get(usrID);
        
        Object.assign(usr, updateObj);
    }

    delete(usrID){
        if (typeof usrID !== 'string'){
            throw Error ('the ID must be a string')
        }

        if (!this.usrMap.has(usrID)){
            throw Error ('the user with this ID does not exist')
        }

        return this.usrMap.delete(usrID);
    }

    find(query){
        let foundUsers = [];

        let isMatching = false;
        for (let i of this.readAll()){
            console.log(`i: ${i}`);
            for (let j in Object.keys(query)){
                if (typeof query[j] === 'string'){
                    if (i[j] === query[j]){
                        isMatching = true;
                    }
                    else {
                        isMatching = false;
                    }
                }
                else if (typeof query[j] === 'object'){
                    if ( (i[i] >= query[j[min]]) && (i[j] <= query[j[max]]) ){
                        isMatching = true;
                    }
                    else {
                        isMatching = false;
                    }
                }
            }
            if (isMatching){
                foundUsers.push(i);
            }
        }
        // return foundUsers;
        return this.readAll();
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ua', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers1 = db.find(query); // array of users
console.log(customers1);