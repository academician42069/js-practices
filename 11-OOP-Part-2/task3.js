function Hamster() {
    this.food = [];
    this.found = function(something) {
        this.food.push(something);
    };
}

// Create two hamsters and feed the first
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??)

// The problem is that for each new object of type Hamster
// the 'stomach' (i.e the food array) is shared. That means
// if speedy 'finds' some food, he will put it not in his
// stomach, but in the shared one. Consequently, lazy will
// access that stomach too and we'll see that the length of
// this array is 2, even though he has 'found' nothing yet.
// The problem can be fixed by moving everything to the class
// definition. That way, each instance will have its own 
// 'stomach' and the found function will push to that stomach.