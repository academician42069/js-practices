function f() {
    console.log('hello');
}

Function.prototype.delay = function(ms) {
    const self = this;
    return (function() {
        setTimeout(() => self(...arguments), ms);
    })
};

f.delay(1000)(); // print "hello" after 1 second

// or with parameters:
function f2(a, b) {
    console.log(a + b);
}

f2.delay(3000)(1, 2); // print 3 after 1 second