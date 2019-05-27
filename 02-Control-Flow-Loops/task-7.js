var arr = [1,2,3,4];
var sum = 0;

for (var element of arr) {
    if (element % 2 === 0){
        sum += element;
    }
}

console.log(sum);
