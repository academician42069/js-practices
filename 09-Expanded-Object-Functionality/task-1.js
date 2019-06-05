Object.prototype.extend = function(argObject) {
    for (let i of Object.keys(argObject)){
        if (typeof this[i] === 'undefined'){
            this[i] = argObject[i];
            Object.defineProperty(this, i, Object.getOwnPropertyDescriptor(argObject, i));
        }
    }
}

Object.defineProperty(Object.prototype, extend, {
    enumerable: false,
})

const data = {
    a: 'a'
};
const source = {
    a: 'A', b: 'b'
};

Object.defineProperty(source, 'b', {
    writable: false
});

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false