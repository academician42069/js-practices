Object.prototype.mergeDeepRight = function(argObject) {
    for (let i of Object.keys(argObject)){
        if (typeof this[i] !== 'undefined'){
            // if (typeof this[i] === 'object'){
            //     this.mergeDeepRight(argObject);
            // }
            console.log("TRUE");
            this[i] = argObject[i];
        }
    }
}

Object.defineProperty(Object.prototype, mergeDeepRight, {
    enumerable: false,
})

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});

console.log(data);

// data will be
// {
// 	name: 'fred',
// 	age: 40,
// 	contact: {
// 		email: 'baa@example.com',
//         favorite: true,
// 		meta: {
//             verified: true,
//             tags: ['vip', 'important']
//         }
// 	}
// }