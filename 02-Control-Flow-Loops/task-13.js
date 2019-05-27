var someArray = [2, 7, 1, 8, -2, -8, -1, 8, 2, -8, 4]
var sum = 0;

for (let i of someArray) {
    if (i > 0) {
        sum += i;
    }
}

console.log(sum);
