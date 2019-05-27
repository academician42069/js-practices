var numList = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var quotientCounter = 0;
var primeList = [];

for (let i of numList){ // Loop 1: iterates thorough the array
    for (let j = 1; j <= i; j++){ // Loop 2: iterates through natural numbers including the current number
        if (i % j === 0) { // Checks if the former divides the latter
            quotientCounter++;
        }
    }
    if (quotientCounter === 2) { // If i has two divisors (is prime)
        primeList.push(i);
    }
    quotientCounter = 0; // Resets the counter for the new i.
}

console.log(primeList);