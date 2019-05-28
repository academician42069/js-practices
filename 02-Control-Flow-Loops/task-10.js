var startingArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
var sortedArray = [];
var temp;

for (let i = 0; i < startingArray.length; i++){
    sortedArray[i] = startingArray[i]; // Cloning the array.
}

for (let i = 0; i < sortedArray.length; i++){
    for (let j = 0; j < sortedArray.length - i; j++){
        if (sortedArray[j] > sortedArray[j + 1]){
            temp = sortedArray[j + 1];
            sortedArray[j + 1] = sortedArray[j]; // Using the bubble sort method.
            sortedArray[j] = temp;
        }
    }
}

console.log(sortedArray);