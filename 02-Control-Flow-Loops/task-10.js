var startingArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
var sortedArray = [];
var tempMax, trueMax;

tempMax = startingArray[0];
for (let i of startingArray){
    if (i > tempMax) {
        tempMax = i; // Figuring out the maximum in the array.
    }
}

trueMax = tempMax;
tempMax = 0;
sortedArray.push(trueMax);

for (let j of startingArray){
    for (let i of startingArray){
        if (i < trueMax){
            if (i >= tempMax) {
                tempMax = i; // Figuring out the maximum in the array.
            }
        }
    }
    trueMax = tempMax;
    tempMax = 0;
    sortedArray.push(trueMax);
}

console.log(sortedArray);

// tempmax = array[0]
/* for i in array:
 *   if i > tempmax:
 *     tempmax = i;
 *
 *  truemax = tempmax;
 *  tempmax = 0;
 *  sortedArray.push(trueMax);
 * 
 * Now we've gotten the max figured out. It resides in the sorted array at index 0.
 *
 * for i in array:
 *   if i < truemax:
 *     do the max thing again
 *
 */
